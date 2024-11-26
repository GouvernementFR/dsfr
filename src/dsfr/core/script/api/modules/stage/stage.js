import state from '../../state.js';
import { Element } from './element.js';
import { Module } from '../module.js';
import { Root } from './root.js';
import inspector from '../../inspect/inspector.js';

class Stage extends Module {
  constructor () {
    super('stage');
    this.root = new Root();
    super.add(this.root);
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.modifications = [];
    this.willModify = false;
    this.modifying = this.modify.bind(this);
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
    const examinations = [];
    mutations.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          mutation.removedNodes.forEach((node) => this.dispose(node));
          mutation.addedNodes.forEach((node) => this.parse(node));
          break;

        case 'attributes':
          if (this.hasElement(mutation.target)) {
            const element = this.getElement(mutation.target);
            element.prepare(mutation.attributeName);
            if (examinations.indexOf(element) === -1) examinations.push(element);
            for (const descendant of element.descendants) if (examinations.indexOf(descendant) === -1) examinations.push(descendant);
          }
          if (this.modifications.indexOf(mutation.target) === -1) this.modifications.push(mutation.target);
          break;
      }
    });

    examinations.forEach(element => element.examine());
    if (this.modifications.length && !this.willModify) {
      this.willModify = true;
      window.requestAnimationFrame(this.modifying);
    }
  }

  modify () {
    this.willModify = false;
    const targets = this.modifications.slice();
    this.modifications.length = 0;
    for (const target of targets) if (document.documentElement.contains(target)) this.parse(target);
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
        element.project(registration);
        if (creations.indexOf(element) === -1) creations.push(element);
      }
    }

    for (const element of creations) element.populate();
  }
}

export { Stage };
