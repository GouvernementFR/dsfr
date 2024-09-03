import { addons } from '@storybook/manager-api';
import { getPreferredColorScheme } from './dsfr-theme';


addons.setConfig({
  theme: getPreferredColorScheme(),
});
