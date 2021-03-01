import { Header } from './header.js';
import { HEADER_SELECTOR } from './constants';

const build = () => {
  const elements = Array.prototype.slice.call(document.querySelectorAll(HEADER_SELECTOR));

  const headers = [];

  for (const element of elements) headers.push(new Header(element));
};

export { build };
