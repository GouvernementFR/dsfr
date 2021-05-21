import { getElement } from './element';
import { Collection } from '../../global/collection';
import state from '../state';

class Registration {
  constructor (selector, InstanceClass) {
    this.isMounted = false;
    this.selector = selector;
    this.InstanceClass = InstanceClass;
    this.instances = new Collection();
    state.registrations.add(this);
  }

  mount () {
    if (this.isMounted) return;
    this.parse(document.documentElement);
    this.isMounted = true;
  }

  parse (node, nonRecursive) {
    const nodes = [];
    if (node.matches && node.matches(this.selector)) nodes.push(node);
    // eslint-disable-next-line no-useless-call
    if (!nonRecursive && node.querySelectorAll && node.querySelector(this.selector)) nodes.push.apply(nodes, [...node.querySelectorAll(this.selector)]);

    for (node of nodes) {
      const element = getElement(node);
      const instance = element.create(this);
      this.instances.add(instance);
    }
  }

  remove (instance) {
    this.instances.remove(instance);
  }

  dispose () {
    for (const instance of this.instances) instance._dispose();
    state.registrations.remove(this);
  }
}

const register = (selector, InstanceClass) => {
  const registration = new Registration(selector, InstanceClass);
  if (state.isActive) registration.mount();
  return registration;
};

export { register };
