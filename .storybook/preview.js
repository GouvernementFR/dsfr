/** @type { import('@storybook/html').Preview } */


import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/core/core.module.js';
import '../dist/component/component.module.js';
import dsfrTheme from './dsfr-theme';
import { withThemeByDataAttribute, DecoratorHelpers  } from '@storybook/addon-themes';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters,  } = DecoratorHelpers;

let currentTheme;

const getThemeDecorator = () => {
  const defaultTheme = 'light';
  initializeThemeState(Object.keys[dsfrTheme], defaultTheme);
  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();

    currentTheme = themeOverride || selectedTheme || defaultTheme;

    context.parameters.docs.theme = dsfrTheme[currentTheme];

    return Story();
  };
};

const getInitialTheme = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const globals = (urlParams.get('globals') ?? '').split(';').reduce((acc, item) => { const pair = item.split(':'); acc[pair[0]] = pair[1]; return acc; }, {});
  return dsfrTheme[globals.theme || 'light'];
}

const preview = {
  decorators: [
    getThemeDecorator(),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-fr-scheme',
    })
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
