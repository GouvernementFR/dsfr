import follow from '../ejs/follow.ejs?raw';
import newsletter from '../ejs/newsletter.ejs?raw';
import socials from '../ejs/socials.ejs?raw';

export const followPartials = [
  {
    names: ['follow'],
    partial: follow
  },
  {
    names: ['newsletter'],
    partial: newsletter
  },
  {
    names: ['socials'],
    partial: socials
  }
];
