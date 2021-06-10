import state from './engine/state';

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

export default api;
