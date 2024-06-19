/** @type { import('@storybook/html').Preview } */
import '../dist/dsfr.css';
import '../dist/utility/utility.css';
import '../dist/core/core.module.js';
import '../dist/component/component.module.js';
import './preview.css';
import * as prettier from "prettier";
import htmlParser from 'prettier/parser-html';
import dsfrTheme, { getPreferredColorScheme } from './dsfr-theme'
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

  return Story();
};

const getInitialTheme = () => {
  const store = new UrlStore();
  const theme = store?.selectionSpecifier?.globals?.theme ?? 'light';
  document.documentElement.setAttribute('data-fr-theme', theme);
  return getPreferredColorScheme();
}

const viewports = {
  xs: {
    name: 'Phone - Breakpoint XS',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  sm: {
    name: 'Phablet - Breakpoint SM',
    styles: {
      width: '576px',
      height: '1024px',
    },
  },
  md: {
    name: 'Tablette - Breakpoint MD',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  lg: {
    name: 'Tablette horizontale - Breakpoint LG',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  xl: {
    name: 'Desktop - Breakpoint XL',
    styles: {
      width: 'auto',
      height: 'auto',
    },
  },
};

const preview = {
  decorators: [
    themeDecorator,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: getInitialTheme(),
      source: {
        language: 'html',
        transform: (src) => prettier.format(src, { parser: 'html', plugins: [htmlParser], tabWidth: 2, })
      },
    },
    options: {
      storySort: (a, b) => {
        const indexA = Math.min.apply(null,  a?.tags?.filter(tag => tag.startsWith('sort:')).map(tag => parseInt(tag.split(':')[1]))) || 999999;
        const indexB = Math.min.apply(null,  b?.tags?.filter(tag => tag.startsWith('sort:')).map(tag => parseInt(tag.split(':')[1]))) || 999999;
        return indexA - indexB;
      }
    },
    viewport: {
      viewports: viewports,
      defaultViewport: 'lg',
    },
  }
};


export default preview;
