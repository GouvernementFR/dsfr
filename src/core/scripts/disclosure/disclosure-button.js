import { Instance } from '../engine/register/instance';
import { ns } from '../global/namespace';

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
  }

  init () {
    this.id = this.element.node.getAttribute('aria-controls');
    this.hasAttribute = this.element.node.hasAttribute(this.attributeName);
    if (this.hasAttribute && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
    this.listen('click', this.click.bind(this));
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observe();
  }

  observe () {
    this.observer.observe(this.element.node, { attributes: true, attributeFilter: [this.attributeName] });
  }

  click (e) {
    this.registration.creator.change(this.hasAttribute);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.attributeName) this.registration.creator.change(this.disclosed);
    });
  }

  apply (value) {
    if (!this.hasAttribute) return;
    if (this.observer) this.observer.disconnect();
    this.element.node.setAttribute(this.attributeName, value);
    if (this.observer) this.observe();
  }

  get disclosed () {
    return this.element.node.getAttribute(this.attributeName) === 'true';
  }

  focus () {
    this.element.node.focus();
  }

  get hasFocus () {
    return this.element.node === document.activeElement;
  }
}

export { DisclosureButton };
