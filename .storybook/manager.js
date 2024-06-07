import { addons } from '@storybook/manager-api';
import dsfrTheme from './dsfr-theme';

const getPreferredColorScheme = () => {
  if (!window || !window.matchMedia) return 'light';

  const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkThemePreferred) return 'dark';

  return 'light';
};


addons.setConfig({
  theme: dsfrTheme[getPreferredColorScheme()],
});
