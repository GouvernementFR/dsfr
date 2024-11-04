import config from '../../../../.config/config';
import patch from './patch';

const executor = {};
const promise = new Promise((resolve, reject) => {
  executor.resolve = resolve;
  executor.reject = reject;
});

window[patch.namespace] = {
  configuration: window[config.namespace],
  promise: promise
};

const patchInternals = () => {
  const api = window[config.namespace];
  if (!api || !api.internals) {
    requestAnimationFrame(patchInternals);
    return;
  }
  if (api.inspector.trace) api.inspector.log = api.inspector.trace;

  executor.resolve();
};

export default patchInternals;
