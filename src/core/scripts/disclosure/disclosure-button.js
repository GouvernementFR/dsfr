import { Instance } from '../api/register/instance';
import ns from '../api/utilities/namespace.js';

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.type = type;
    this.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
  }

  static get instanceClassName () {
    return 'DisclosureButton';
  }

  init () {
    this.controlsId = this.getAttribute('aria-controls');
    this.isPrimary = this.hasAttribute(this.attributeName);
    if (this.isPrimary && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
    this.listen('click', this.click.bind(this));
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      focus: scope.focus.bind(scope)
    });
  }

  click (e) {
    if (this.registration.creator) this.registration.creator.toggle(this.isPrimary);
  }

  mutate (attributeNames) {
    if (this.isPrimary && attributeNames.indexOf(this.attributeName) > -1 && this.registration.creator) {
      if (this.disclosed) this.registration.creator.disclose();
      else if (this.type.canConceal) this.registration.creator.conceal();
    }
  }

  apply (value) {
    if (!this.isPrimary) return;
    this.setAttribute(this.attributeName, value);
  }

  get disclosed () {
    return this.getAttribute(this.attributeName) === 'true';
  }
}

export { DisclosureButton };
