import api from '../../../api.js';

const push = (type, layer) => {
  if (typeof window.EA_push !== 'function') {
    api.inspector.warn('Analytics datalayer not sent, Eulerian API isn\'t yet avalaible');
    return;
  }

  api.inspector.info('analytics', type, layer);

  window.EA_push(type, layer);
};

export default push;
