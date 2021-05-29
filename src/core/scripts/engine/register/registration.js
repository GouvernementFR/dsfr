import { Collection } from '../../global/collection';

class Registration {
  constructor (selector, InstanceClass, creator) {
    this.selector = selector;
    this.InstanceClass = InstanceClass;
    this.creator = creator;
    this.instances = new Collection();
    this.isMounted = false;
  }

  parse (node, nonRecursive) {
    this.isMounted = true;
    const nodes = [];
    if (node.matches && node.matches(this.selector)) nodes.push(node);
    // eslint-disable-next-line no-useless-call
    if (!nonRecursive && node.querySelectorAll && node.querySelector(this.selector)) nodes.push.apply(nodes, [...node.querySelectorAll(this.selector)]);
    return nodes;
  }

  create (element) {
    if (!element.node.matches(this.selector)) return;
    const instance = new this.InstanceClass();
    this.instances.add(instance);
    return instance;
  }

  remove (instance) {
    this.instances.remove(instance);
  }

  dispose () {
    this.instances.forEach((instance) => instance._dispose());
    this.creator = null;
  }
}

export { Registration };
