class Initializer {
  constructor (selector, classes) {
    this.selector = selector;
    this.classes = classes;
    this.instances = [];

    if (document.readyState !== 'loading') this.start();
    else document.addEventListener('DOMContentLoaded', this.start.bind(this));
  }

  start () {
    if (this.instances.length > 0) return;

    if (document.querySelectorAll(this.selector).length > 0) {
      for (let i = 0; i < this.classes.length; i++) {
        this.instances.push(new this.classes[i]());
      }
    }
  }
}

export { Initializer };
