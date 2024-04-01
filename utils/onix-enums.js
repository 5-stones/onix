const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://ns.editeur.org/onix/en/';

function makeCamelCase(str) {
  return str
    .split(' ')
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    .join('')
}

function generate(body, num) {
  const $ = cheerio.load(body);
  let isNumeric = false;
  let data = [];
  const rawName = $(`table tr[id="en_${num}"] td[class*="preflabel"] a`).text();
  const enumName = makeCamelCase(
    rawName
      .replace(/\//g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/-/g, '')
      .replace(/–/g, '')
      .replace(/\s+/, ' ')
    ,
  );
  const elements = $(`table tr[id*="en_${num}_"]`);

  if (!elements || elements.length === 0) return;

  for (let el of elements) {
    const code = $('td[class="code"]', el)?.text().replace('-', '_');
    const label = $('td[class*="preflabel"] a', el)?.text();

    if (/^[\d]/.test(code)) {
      isNumeric = true;
    }

    if (code && label) {
      data.push({
        code, 
        label,
      });
    }
  }
  
  gen = data.reduce((acc, val) => {
    acc += `\n  ${isNumeric ? '_' : ''}${val.code} = '${val.code}', // ${val.label}`;
    return acc;
  }, `\n// ${baseUrl + num} \nexport enum ${enumName} {`);
  gen += "\n}"
  return {
    name: enumName,
    content: gen,
  };
}

(async () => {
  const max = 263;
  const files = [];
  for (let i = 1; i <= max; i++) {
    const url = baseUrl + i;
    console.log(">>>>>>>> url", url);
    const resp = await fetch(url);
    const body = await resp.text();
    const gen = generate(body, i);

    if (!gen) continue;

    const { name, content } = gen;

    files.push(name);
    fs.writeFileSync(
      path.join(__dirname, '../src/enums/', name + '.ts'),
      content,
    );
  }


  let index = ``;
  for (let file of files.sort()) {
    index += `export { ${file} } from './${file}';\n`;
  }


  fs.writeFileSync(
    path.join(__dirname, '../src/enums/index.ts'),
    index,
  );
})()
