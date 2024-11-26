import ns from '../api/utilities/namespace.js';

const AssessEmission = {
  UPDATE: ns.emission('assess', 'update'),
  ADDED: ns.emission('assess', 'added')
};

export { AssessEmission };
