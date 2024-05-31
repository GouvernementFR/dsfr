/** @type { import('@storybook/html').Preview } */

import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/dsfr.module.js';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
