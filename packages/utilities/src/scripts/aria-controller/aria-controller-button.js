class AriaControllerButton {
  constructor (element, controller) {
    this.element = element;
    this.controller = controller;
    this.isToggle = false;
    this.element.addEventListener('click', this.click.bind(this));

    if (this.element.hasAttribute(this.controller.attribute)) {
      this.isToggle = true;
      this.observer = new MutationObserver(this.mutate.bind(this));
      this.observe();
    }
  }

  observe () {
    this.observer.observe(this.element, { attributes: true });
  }

  click (e) {
    if (this.isToggle) this.controller.toggle();
    else this.controller.close();
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.controller.attributeName) this.controller.change(this.activation);
    });
  }

  apply (value) {
    if (!this.isToggle) return;
    this.observer.disconnect();
    this.element.attribute(this.controller.attributeName, value);
    this.observe();
  }

  get activation () {
    return this.element.attribute(this.controller.attributeName);
  }

  get hasFocus () {
    return this.element === document.activeElement;
  }

  focus () {
    this.element.focus();
  }
}

export { AriaControllerButton };
