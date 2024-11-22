import segmented from '../ejs/segmented.ejs?raw';
import segment from '../ejs/segmented-element.ejs?raw';

export const segmentedPartials = [
  {
    names: ['segmented-element'],
    partial: segment
  },
  {
    names: ['segmented'],
    partial: segmented
  }
];
