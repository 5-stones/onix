import { XMLParser } from 'fast-xml-parser';
import type { ONIXMessageRoot } from './interfaces';

export function parse(body: string): ONIXMessageRoot {
  const parser = new XMLParser({
    ignoreAttributes: false,
    numberParseOptions: {
      hex: false,
      leadingZeros: false,
      skipLike: /.*/,
    },
  });
  
  return parser.parse(body) as ONIXMessageRoot;
}
