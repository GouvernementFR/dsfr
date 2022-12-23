import { Instance } from '../api/modules/register/instance';
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

  get isPrimary () {
    console.log('isPrimary');
    return this.getCanDisclose() && !this.registration.creator.node.contains(this.node);
  }

  get canDisclose () {
    console.log('canDisclose', this);
    return this.getCanDisclose();
  }

  // TODO : A rationaliser dans la version NEXT
  getCanDisclose () {
    console.log('getCanDisclose');
    return this.hasAttribute(this.attributeName);
  }

  init () {
    this.controlsId = this.getAttribute('aria-controls');
    console.log('init before');
    const toto = this.isPrimary;
    console.log('init middle', toto);
    if (this.isPrimary && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
    console.log('init after');
    this.enableCreator();
    this.listenClick();
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      focus: scope.focus.bind(scope)
    });
  }

  handleClick (e) {
    console.log('handleClick');
    if (this.registration.creator) this.registration.creator.toggle(this.canDisclose);
  }

  mutate (attributeNames) {
    console.log('mutate');
    if (this.isPrimary && attributeNames.indexOf(this.attributeName) > -1 && this.registration.creator) {
      if (this.disclosed) this.registration.creator.disclose();
      else if (this.type.canConceal) this.registration.creator.conceal();
    }

    this.enableCreator();
  }

  enableCreator () {
    console.log('enableCreator');

    if (this.isPrimary) this.registration.creator.isEnabled = !this.type.canDisable || !this.hasAttribute('disabled');
  }

  apply (value) {
    console.log('apply');
    if (!this.isPrimary) return;
    this.setAttribute(this.attributeName, value);
  }

  get disclosed () {
    return this.getAttribute(this.attributeName) === 'true';
  }

  focus () {
    super.focus();
    this.scrollIntoView();
  }
}

export { DisclosureButton };
