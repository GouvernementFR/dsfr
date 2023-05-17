import api from '../api.js';
import ns from '../../core/script/api/utilities/namespace';
import { completeAssign } from '../../core/script/api/utilities/property/complete-assign';
import { Modes } from '../../core/script/api/options/options.js';

api.inspector = completeAssign(console, {});

api.internals = {
  ns: ns
};

api.Modes = Modes;

export default api;
