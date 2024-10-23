import action from '../ejs/action/action.ejs?raw';
import responsiveImg from '../ejs/media/responsive-img.ejs?raw';
import responsiveVid from '../ejs/media/responsive-vid.ejs?raw';
import paragraph from '../ejs/typography/paragraph.ejs?raw';
import img from '../ejs/media/img.ejs?raw';
import pictogram from '../ejs/artwork/pictogram.ejs?raw';

export const corePartials = [
  {
    names: ['action'],
    partial: action
  },
  {
    names: ['paragraph'],
    partial: paragraph
  },
  {
    names: ['responsive-img'],
    partial: responsiveImg
  },
  {
    names: ['responsive-vid'],
    partial: responsiveVid
  },
  {
    names: ['img'],
    partial: img
  },
  {
    names: ['pictogram'],
    partial: pictogram
  }
];
