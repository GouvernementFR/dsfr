import { AriaController } from './aria-controller';

class AriaControllerButton {
  constructor (element, controller) {
    this.element = element;
    this.controller = controller;
    this.hasAttribute = this.element.hasAttribute(this.controller.attributeName);
    this.element.addEventListener('click', this.click.bind(this));

    switch (this.controller.type) {
      case AriaController.EXPAND:
        this.observer = new MutationObserver(this.mutate.bind(this));
        this.observe();
        break;
    }
  }

  observe () {
    this.observer.observe(this.element, { attributes: true });
  }

  click (e) {
    this.controller.change(this.hasAttribute);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.controller.attributeName) this.controller.change(this.activation); // TODO
    });
  }

  apply (value) {
    if (!this.hasAttribute) return;
    if (this.observer) this.observer.disconnect();
    this.element.setAttribute(this.controller.attributeName, value);
    if (this.observer) this.observe();
  }

  get activation () {
    return this.element.getAttribute(this.controller.attributeName) === 'true';
  }
}

export { AriaControllerButton };
