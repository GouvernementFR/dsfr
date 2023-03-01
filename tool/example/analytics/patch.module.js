/*! DSFR v1.9.0-alpha | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.9.0-alpha'
};

const patch = {
  namespace: 'a4e35ba2a938ba9d007689dbf3f46acbb9807869'
};

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

  console.log('patched');
  executor.resolve();
};

console.log('start patching');
patchInternals();
