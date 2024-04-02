

import { BISAC } from './data/bisac';

let reverseMapping: Record<string, string> | undefined = undefined;

export function getBISACLabelsForCode(code: string): string[] | undefined {
  return BISAC[code]
}

export function getBISACCodeForLabel(label: string): string | undefined {

  if (!reverseMapping) {
    reverseMapping = Object.keys(BISAC)
      .reduce<Record<string, string>>((acc, code: string) => {
        const labels = BISAC[code];
        for (const label of labels) {
          acc[label] = code;
        }
        return acc;
      }, {})
    ;
  }

  return reverseMapping[label];
}
