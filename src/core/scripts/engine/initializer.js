
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
