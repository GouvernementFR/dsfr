import { Instance } from '../engine/element/instance';
import { ns } from '../global/namespace';

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.type = type;
    this.attributeName = this.type.ariaState ? 'aria-' + this.type.id : ns.attr(this.type.id);
    this.hasAttribute = this.element.node.hasAttribute(this.attributeName);
  }

  init () {
    this.listen('click', this.click.bind(this));
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
  }

  observe () {
    this.observer.observe(this.element, { attributes: true });
  }

  click (e) {
    // TODO
    this.disclosure.change(this.hasAttribute);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      // TODO
      if (mutation.type === 'attributes' && mutation.attributeName === this.disclosure.attributeName) this.disclosure.change(this.disclosed);
    });
  }

  apply (value) {
    if (!this.hasAttribute) return;
    if (this.observer) this.observer.disconnect();
    this.element.setAttribute(this.attributeName, value);
    if (this.observer) this.observe();
  }

  get disclosed () {
    return this.element.node.getAttribute(this.attributeName) === 'true';
  }

  get hasFocus () {
    return this.element.node === document.activeElement;
  }
}

export { DisclosureButton };
