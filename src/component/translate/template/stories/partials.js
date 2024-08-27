import translate from '../ejs/translate.ejs?raw';
import languages from '../ejs/languages.ejs?raw';

export const translatePartials = [
  {
    names: ['translate'],
    partial: translate
  },
  {
    names: ['languages'],
    partial: languages
  }
];
