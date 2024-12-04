import { addons } from '@storybook/manager-api';
import { getPreferredColorScheme } from './dsfr-theme';
import { version } from '../../package.json';

addons.setConfig({
  theme: getPreferredColorScheme(),
});

window.addEventListener('load', (event) => {
  const title = document.querySelector('#dsfr button');
  title.append(` ${version}`);
})
