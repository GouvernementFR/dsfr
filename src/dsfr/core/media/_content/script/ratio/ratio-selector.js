import ref from '../../../ref.js';
import { RATIOS } from './ratios';

export const RatioSelector = {
  RATIO: RATIOS.map(ratio => ref.internals.ns.selector(`ratio--${ratio.id}`)).join(',')
};
