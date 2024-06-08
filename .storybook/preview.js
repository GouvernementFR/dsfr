/** @type { import('@storybook/html').Preview } */


import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/core/core.module.js';
import '../dist/component/component.module.js';
import dsfrTheme from './dsfr-theme';
import { DecoratorHelpers } from '@storybook/addon-themes';
import { UrlStore } from '@storybook/preview-api';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } = DecoratorHelpers;

const defaultTheme = 'light';
const themes = Object.keys(dsfrTheme);
initializeThemeState(themes, defaultTheme);

const themeDecorator = (Story, context) => {
  const selectedTheme = pluckThemeFromContext(context);
  const { themeOverride } = useThemeParameters();

  const theme = themeOverride || selectedTheme || defaultTheme;

  document.documentElement.setAttribute('data-fr-theme', theme);
  context.parameters.docs.theme = dsfrTheme[theme];

  return Story();
};

const getInitialTheme = () => {
  const store = new UrlStore();
  const theme = store?.selectionSpecifier?.globals?.theme ?? 'light';
  document.documentElement.setAttribute('data-fr-theme', theme);
  return dsfrTheme[theme];
}

const preview = {
  decorators: [
    themeDecorator,
  ],
  parameters: {
    backgrounds: {
      disable: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: getInitialTheme()
    }
  }
};


export default preview;
