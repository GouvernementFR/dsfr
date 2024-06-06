import { create } from '@storybook/theming/create';

const light = {
  base: 'light',
  // Typography
  fontBase: '"Marianne", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Système de design de l\'État français',
  brandUrl: 'https://www.systeme-de-design.gouv.fr/',
  brandImage: 'logo-light.png',
  brandTarget: '_self',

  //
  colorPrimary: '#000091',
  colorSecondary: '#666',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appPreviewBg: '#fff',
  appBorderColor: '#666',
  appBorderRadius: 0,

  // Text colors
  textColor: '#3a3a3a',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#3a3a3a',
  barSelectedColor: '#000091',
  barHoverColor: '#000091',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#eee',
  inputBorder: '#3a3a3a',
  inputTextColor: '#3a3a3a',
  inputBorderRadius: 0,
};

const dark = {
  ...light,
  base: 'dark',

  brandImage: 'logo-dark.png',

  //
  colorPrimary: '#8585f6',
  colorSecondary: '#666',

  // UI
  appBg: '#161616',
  appContentBg: '#161616',
  appPreviewBg: '#161616',
  appBorderColor: '#353535',
  appBorderRadius: 0,

  // Text colors
  textColor: '#cecece',
  textInverseColor: '#666',

  // Toolbar default and active colors
  barTextColor: '#cecece',
  barSelectedColor: '#8585f6',
  barHoverColor: '#8585f6',
  barBg: '#161616',

  // Form colors
  inputBg: '#242424',
  inputBorder: '#cecece',
  inputTextColor: '#cecece',
  inputBorderRadius: 0,
}

export default { light: create(light), dark: create(dark) };
