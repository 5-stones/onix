

import { BISAC } from './data/bisac';

let reverseMapping: Record<string, string> | undefined = undefined;

export function getBISACLabelsForCode(
  code: string,
  shortLabel: boolean = false,
): string[] | undefined {
  const labels = BISAC[code]?.labels || [];

  if (shortLabel) {
    return labels.map((l: string) => l.split(' / ').at(-1));
  } else {
    return labels;
  }
}

export function getBISACCodeForLabel(label: string): string | undefined {
  if (!reverseMapping) {
    reverseMapping = Object.keys(BISAC)
      .reduce<Record<string, string>>((acc, code: string) => {
        const labels = BISAC[code].labels;
        for (const label of labels) {
          acc[label] = code;
        }
        return acc;
      }, {})
    ;
  }

  return reverseMapping[label];
}

export interface BISACNode {
  code: string;
  labels: string[]
  primaryFullLabel: string;
  primaryShortLabel: string;
  primaryFullLabelNonGeneric: string;
  primaryShortLabelNonGeneric: string;
}

export function getBISACNodeForCode(code: string): BISACNode | undefined {
  if (!code) return undefined;

  const labels = getBISACLabelsForCode(code);

  if (!labels || !labels.length) return undefined;

  const primaryFullLabel = labels[0];
  const primaryShortLabel = labels[0].split(' / ').at(-1);

  return {
    code,
    labels,
    primaryFullLabel,
    primaryShortLabel,
    primaryFullLabelNonGeneric: primaryFullLabel.replace(' / General', ''),
    primaryShortLabelNonGeneric: primaryShortLabel === 'General'
      ? labels[0].split(' / ').at(-2)
      : primaryShortLabel,
  };
}

export function getBISACAncestorForCode(code: string): BISACNode | undefined {
  if (!code) return undefined;

  const labels = BISAC[code]?.labels;
  if (!labels) {
    throw new Error(`Unrecognized code '${code}'`);
  }

  const label = labels[0];
  let numLeavesToTruncate = label.endsWith(' / General') ? 2 : 1;
  let searchLabel = label
    .split(' / ')
    .slice(0, numLeavesToTruncate * -1)
    .join(' / ')
  ;

  if (!searchLabel) return undefined;

  let result = getBISACCodeForLabel(searchLabel);
  if (!result) {
    result = getBISACCodeForLabel(searchLabel + ' / General');
  }

  return getBISACNodeForCode(result);
}
