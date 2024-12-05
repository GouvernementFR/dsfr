import ns from '../../core/script/api/utilities/namespace';
import { Modes } from '../../core/script/api/options/modes.js';
import config from '../../core/config';

const api = {};

const hasLoggingLevel = (level) => api.internals.configuration.production !== true && (level > 1 || api.internals.configuration.verbose);

api.inspector = {
  log: (...msg) => hasLoggingLevel(0) ? console.log.apply(console, msg) : null,
  debug: (...msg) => hasLoggingLevel(1) ? console.debug.apply(console, msg) : null,
  info: (...msg) => hasLoggingLevel(2) ? console.info.apply(console, msg) : null,
  warn: (...msg) => hasLoggingLevel(3) ? console.warn.apply(console, msg) : null,
  error: (...msg) => hasLoggingLevel(4) ? console.error.apply(console, msg) : null
};

const configuration = window[config.namespace];

api.internals = {
  ns: ns,
  configuration: configuration
};

api.Modes = Modes;
api.mode = configuration.mode || Modes.AUTO;

window[config.namespace] = api;
export default api;
