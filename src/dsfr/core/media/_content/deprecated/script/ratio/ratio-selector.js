import ref from '../../../../ref.js';
import { IMAGE_RATIOS, VIDEO_RATIOS } from './ratios';

export const RatioSelector = {
  RATIO: [...IMAGE_RATIOS.map(ratio => ref.internals.ns.selector(`responsive-img--${ratio.id}`)), ...VIDEO_RATIOS.map(ratio => ref.internals.ns.selector(`responsive-vid--${ratio.id}`))].join(',')
};
