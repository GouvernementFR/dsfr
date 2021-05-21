import state from '../state.js';
import { hasElement, getElement } from './element';
import inspector from '../../inspect/inspector';

class Observer {
  constructor () {
    this.adding = this.add.bind(this);
    this.removing = this.remove.bind(this);
    this.observer = new MutationObserver(this.mutate.bind(this));
    state.activations.add(this.activate.bind(this));
    state.deactivations.add(this.deactivate.bind(this));
  }

  activate () {
    this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    for (const registration of state.registrations.collection) registration.mount();
  }

  deactivate () {
    this.observer.disconnect();
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          mutation.removedNodes.forEach(this.removing);
          mutation.addedNodes.forEach(this.adding);
          break;

        case 'attributes':
          this.modify(mutation.target);
          break;
      }
    });
  }

  modify (node) {
    inspector.debug('modify', node);
    if (hasElement(node)) getElement(node).examine();
    this.add(node, true);
  }

  remove (node) {
    const disposables = [];
    for (const element of state.elements.collection) {
      if (node.contains(element.node)) disposables.push(element);
    }

    for (const disposable of disposables) disposable.dispose();
  }

  add (node, nonRecursive) {
    for (const registration of state.registrations.collection) registration.parse(node, nonRecursive);
  }
}

export { Observer };
