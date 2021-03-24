import api from '../../api.js';
import { BUTTON_SELECTOR, EQUISIZED_BUTTONS_GROUP_SELECTOR } from './constants';

const build = () => {
  const group = document.querySelectorAll(EQUISIZED_BUTTONS_GROUP_SELECTOR);
  const arrayEquisized = [];
  for (let i = 0; i < group.length; i++) {
    arrayEquisized.push(new api.Equisized(BUTTON_SELECTOR, group[i]));
  }
};

export default build;
