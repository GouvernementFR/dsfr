import ns from '../api/utilities/namespace.js';

const ratiosImg = ['32x9', '16x9', '3x2', '4x3', '1x1', '3x4', '2x3'];
const ratiosVid = ['16x9', '4x3', '1x1'];

const ratioSelector = (name, modifiers) => {
  return modifiers.map(modifier => ns.selector(`${name}--${modifier}`)).join(',');
};

const deprecatedRatioSelector = `${ns.selector('responsive-img')}, ${ratioSelector('responsive-img', ratiosImg)}, ${ns.selector('responsive-vid')}, ${ratioSelector('responsive-vid', ratiosVid)}`;

export const RatioSelector = {
  RATIO: `${ns.selector('ratio')}, ${ratioSelector('ratio', ratiosImg)}, ${deprecatedRatioSelector}`
};
