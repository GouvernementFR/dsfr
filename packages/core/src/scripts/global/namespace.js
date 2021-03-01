import { prefix } from '../../../generated/scripts/config.js';

export const ns = (name) => {
  return `${prefix}-${name}`;
};

ns.selector = (name, notation) => {
  if (notation === undefined) notation = '.';
  return `${notation}${ns(name)}`;
};

ns.attr = (name, quoted, value) => {
  return `data-${ns(name)}`;
};

ns.attr.selector = (name, value) => {
  let result = ns.attr(name);
  if (value !== undefined) result += `="${value}"`;
  return `[${result}]`;
};
