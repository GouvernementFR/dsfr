class Initializer {
  constructor (selector, builders) {
    this.selector = selector;
    this.builders = builders;
    this.instances = [];

    if (document.readyState !== 'loading') window.requestAnimationFrame(this.start.bind(this));
    else document.addEventListener('DOMContentLoaded', this.start.bind(this));
  }

  start () {
    if (this.instances.length > 0) return;

    if (document.querySelectorAll(this.selector).length > 0) {
      for (let i = 0; i < this.builders.length; i++) {
        this.instances.push(this.builders[i]());
      }
    }
  }
}

export { Initializer };
