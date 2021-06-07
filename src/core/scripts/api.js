import state from './engine/state';

const api = (node) => {
  const observer = state.getModule('observe');
  return observer.getProxy(node);
};

export default api;
