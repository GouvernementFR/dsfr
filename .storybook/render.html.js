import { renderToStaticMarkup } from 'react-dom/server';
import { decode } from 'html-entities';
import prettier from 'prettier';
import HTMLParser from 'prettier/parser-html';

export const renderToHTML = (src) => {
  const options = {
    parser: 'html',
    plugins: [HTMLParser],
    htmlWhitespaceSensitivity: 'ignore',
    tabWidth: 4,
  };
  return prettier.format(decode(renderToStaticMarkup(src)), options);
};
