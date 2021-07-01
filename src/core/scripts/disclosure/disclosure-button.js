import { Instance } from '../engine/register/instance';
import { ns } from '../global/namespace';

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
  }

  init () {
    this.controlsId = this.getAttribute('aria-controls');
    this.isPrimary = this.hasAttribute(this.attributeName);
    if (this.isPrimary && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
    this.listen('click', this.click.bind(this));
    if (this.isPrimary) this.observe({ attributes: true, attributeFilter: [this.attributeName] });
  }

  get proxy () {
    const scope = this;
    return {
      ...super.proxy,
      focus: scope.focus.bind(scope)
    };
  }

  click (e) {
    if (this.registration.creator) this.registration.creator.change(this.isPrimary);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.attributeName && this.registration.creator) this.registration.creator.change(this.disclosed);
    });
  }

  apply (value) {
    if (!this.isPrimary) return;
    this.unobserve();
    this.setAttribute(this.attributeName, value);
    this.observe();
  }

  get disclosed () {
    return this.getAttribute(this.attributeName) === 'true';
  }
}

export { DisclosureButton };
