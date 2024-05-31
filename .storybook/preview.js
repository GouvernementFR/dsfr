/** @type { import('@storybook/html').Preview } */

import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/dsfr.module.js';
import { renderToHTML } from './render.html.js'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      transformSource: (src, storyContext) => renderToHTML(src),
    },
  },
};

export default preview;
