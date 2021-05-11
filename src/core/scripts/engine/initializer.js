
const factories = {};
const elements = [];

class Initializer {
  constructor () {
    this.adding = this.add.bind(this);
    this.removing = this.remove.bind(this);
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.instances = [];
    this.resizes = [];
  }

  register (selector, factory) {
    if (factories[selector]) return;
    factories[selector] = factory;

    // apply to existent
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (this._isActive === value) return;
    this._isActive = value;
    if (value) {
      console.log('observe');
      this.observer.observe(document.body, { childList: true, subtree: true });
    } else {
      this.observer.disconnect();
    }
  }

  mutate (mutations) {
    console.log('mutate');
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach(this.removing);
      mutation.addedNodes.forEach(this.adding);
    });
  }

  remove (node) {
    console.log('remove', node);
    for (const element of elements) if (node.contains(element.node)) element.dispose();
  }

  add (node) {
    console.log('add', node);
  }
}

export { Initializer };
