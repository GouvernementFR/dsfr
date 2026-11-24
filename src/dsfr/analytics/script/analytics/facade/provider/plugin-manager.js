import { EulerianProvider } from '../eulerian/eulerian-provider';
import { MatomoProvider } from '../matomo/matomo-provider';

const PluginManager = {
  eulerian: {
    name: 'Eulerian',
    classProvider: EulerianProvider
  },
  matomo: {
    name: 'Matomo',
    classProvider: MatomoProvider
  }
};

export { PluginManager };
