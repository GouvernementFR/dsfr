// import './core/core';
import integrateAttributes from './attributes/attributes';
import integrateComponents from './component/components';

const integration = (selector) => {
  integrateAttributes();
  integrateComponents(selector);
};

export default integration;
