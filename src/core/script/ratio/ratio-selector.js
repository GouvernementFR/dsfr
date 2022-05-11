import ns from '../api/utilities/namespace.js';

const ratios = ['32x9', '16x9', '3x2', '4x3', '1x1', '3x4', '2x3'];

const ratioSelector = (name, modifiers) => {
  return modifiers.map(modifier => ns.selector(`${name}--${modifier}`)).join(',');
};

export const RatioSelector = {
  RATIO: `${ns.selector('ratio')}, ${ratioSelector('ratio', ratios)}, ${ns.selector('responsive-img')}, ${ratioSelector('responsive-img', ratios)}, ${ns.selector('responsive-vid')}, ${ratioSelector('responsive-vid', ['1x1', '4x3'])}`
};
