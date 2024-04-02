const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.bisg.org/complete-bisac-subject-headings-list';

function titleize(str) {
  let upper = true
  let newStr = ""
  for (let i = 0, l = str.length; i < l; i++) {
      // Note that you can also check for all kinds of spaces  with
      // str[i].match(/\s/)
      if (str[i] == " ") {
          upper = true
          newStr += str[i]
          continue
      }
      newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
      upper = false
  }
  return newStr
}

function cleanLabel(label) {
  return label
    .trim()
    .replace(/\s/g, ' ') // normalize whitespace characters
    .replace(/\s\*$/g, '')
  ;
}

async function scrapePage(href) {
  console.log(">>>>>>>", href);
  const resp = await fetch(href);
  const body = await resp.text();
  const $ = cheerio.load(body);

  const paragraphs = $('p');
  let isCodeCtx = false;
  let prefix;

  const codes = {};
  let lastCode;
  for(let p of paragraphs) {
    const txt = $(p).text();
    const reg = /^([A-Z]{3,3}[0-9]{6,6})/;
    if(reg.test(txt)) {
      isCodeCtx = true;
      const parts = txt.split(reg);
      const code = parts[1].trim();
      const label = cleanLabel(parts[2]);

      lastCode = code;
      if (!prefix) {
        prefix = label.split('/')[0].trim();
      }
      
      codes[code] = [label.replace(prefix, titleize(prefix))];
    } else if (prefix && txt.includes(prefix)) {
      codes[lastCode].push(
        cleanLabel(txt)
          .replace(prefix, titleize(prefix))
       );
    }
  }

  return {
    category: titleize(prefix),
    codes,
  };
}

(async () => {
  const resp = await fetch(baseUrl);
  const body = await resp.text();
  const $ = cheerio.load(body);
  
  const pages = $('table a');

  let allCodes = {};
  for (const page of pages) {
    const href = page.attribs.href;
    const { category, codes } = await scrapePage(href);
    
    allCodes = {
      ...allCodes,
      ...codes,
    };

    console.log(">>>>>> completed", category);
  }

  console.log(allCodes);


  fs.writeFileSync(
    path.join(__dirname, '../src/data/bisac.ts'),
    `export const BISAC: Record<string, string[]> = ${JSON.stringify(allCodes, null, 2)}`,
  );
})()
