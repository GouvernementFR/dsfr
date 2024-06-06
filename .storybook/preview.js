/** @type { import('@storybook/html').Preview } */


import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/dsfr.module.js';
import dsfrTheme from './dsfr-theme';
import { withThemeByDataAttribute, DecoratorHelpers  } from '@storybook/addon-themes';
import { useStorybookApi } from '@storybook/manager-api';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters,  } = DecoratorHelpers;

let currentTheme;

const getThemeDecorator = () => {
  const defaultTheme = 'light';
  initializeThemeState(Object.keys(dsfrTheme), defaultTheme);
  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();

    currentTheme = themeOverride || selectedTheme || defaultTheme;
    context.parameters.docs.theme = dsfrTheme[currentTheme];
    return Story();
  };
}

const getInitialTheme = () => {
  //console.log('divers', useGlobals());
  //console.log('divers', useStoryContext());
  return 'light';
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
      // theme: dsfrTheme.light,
    },
  },

};

export default preview;
