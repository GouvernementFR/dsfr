import state from '../state.js';
import { Element } from './element';
import { Module } from '../module.js';
import inspector from '../../inspect/inspector';

class Observer extends Module {
  constructor () {
    super('observe');
    this.modifications = [];
    this.requireModification = false;
    this.modifying = this.modify.bind(this);
    this.root = new Element(document.documentElement, 'root');
    super.add(this.root);
    this.observer = new MutationObserver(this.mutate.bind(this));
  }

  hasElement (node) {
    for (const element of this.collection) if (element.node === node) return true;
    return false;
  }

  getElement (node) {
    for (const element of this.collection) if (element.node === node) return element;
    const element = new Element(node);
    this.add(element);
    inspector.debug(`add element [${element.id}] ${element.html}`);
    return element;
  }

  getProxy (node) {
    if (!this.hasElement(node)) return null;
    const element = this.getElement(node);
    return element.proxy;
  }

  add (element) {
    super.add(element);
    this.put(element, this.root);
  }

  put (element, branch) {
    let index = 0;
    for (let i = branch.children.length - 1; i > -1; i--) {
      const child = branch.children[i];
      const position = element.node.compareDocumentPosition(child.node);
      if (position & Node.DOCUMENT_POSITION_CONTAINS) {
        this.put(element, child);
        return;
      } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        branch.removeChild(child);
        element.addChild(child, 0);
      } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        index = i + 1;
        break;
      }
    }

    branch.addChild(element, index);
  }

  activate () {
    this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  }

  deactivate () {
    this.observer.disconnect();
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          mutation.removedNodes.forEach((node) => this.dispose(node));
          mutation.addedNodes.forEach((node) => this.parse(node));
          break;

        case 'attributes':
          if (this.modifications.indexOf(mutation.target) === -1) this.modifications.push(mutation.target);
          if (!this.requireModification) {
            this.requireModification = true;
            window.requestAnimationFrame(this.modifying);
          }
          break;
      }
    });
  }

  modify () {
    for (const node of this.modifications) {
      if (this.hasElement(node)) this.getElement(node).examine();
      this.parse(node, null, true);
    }
    this.requireModification = false;
    this.modifications.length = 0;
  }

  dispose (node) {
    const disposables = [];
    this.forEach((element) => {
      if (node.contains(element.node)) disposables.push(element);
    });

    for (const disposable of disposables) {
      disposable.dispose();
      this.remove(disposable);
    }
  }

  parse (node, registration, nonRecursive) {
    const registrations = registration ? [registration] : state.getModule('register').collection;
    const creations = [];

    for (const registration of registrations) {
      const nodes = registration.parse(node, nonRecursive);

      for (const n of nodes) {
        const element = this.getElement(n);
        creations.push(new Creation(element, registration));
      }
    }

    for (const creation of creations) creation.create();
  }
}

class Creation {
  constructor (element, registration) {
    this.element = element;
    this.registration = registration;
  }

  create () {
    this.element.create(this.registration);
  }
}

export { Observer };
