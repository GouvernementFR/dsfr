import action from '../ejs/action/action.ejs?raw';
import img from '../ejs/media/img.ejs?raw';
import responsiveImg from '../ejs/media/responsive-img.ejs?raw';

export const corePartials = [
  {
    names: ['action'],
    partial: action
  },
  {
    names: ['img'],
    partial: img
  },
  {
    names: ['responsive-img'],
    partial: responsiveImg
  }
];
