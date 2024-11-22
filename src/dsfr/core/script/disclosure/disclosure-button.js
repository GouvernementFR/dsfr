import { Instance } from '../api/modules/register/instance';
import ns from '../api/utilities/namespace.js';

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.type = type;
    this.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
    this._canDisclose = false;
  }

  static get instanceClassName () {
    return 'DisclosureButton';
  }

  get isPrimary () {
    return this.registration.creator.primaryButtons.includes(this);
  }

  get canDisclose () {
    return this._canDisclose;
  }

  get isDisabled () {
    return this.type.canDisable && this.hasAttribute('disabled');
  }

  init () {
    this._canDisclose = this.hasAttribute(this.attributeName);
    this._isInitiallyDisclosed = this.isDisclosed;
    this._isContained = this.registration.creator.node.contains(this.node);
    this.controlsId = this.getAttribute('aria-controls');
    this.registration.creator.retrievePrimaries();
    this.listenClick();
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      focus: scope.focus.bind(scope)
    });
  }

  handleClick (e) {
    if (this.registration.creator) this.registration.creator.toggle(this.canDisclose);
  }

  mutate (attributeNames) {
    this._canDisclose = this.hasAttribute(this.attributeName);
    this.registration.creator.applyAbility();
    if (!this._isApplying && this.isPrimary && attributeNames.indexOf(this.attributeName) > -1 && this.registration.creator) {
      if (this.isDisclosed) this.registration.creator.disclose();
      else if (this.type.canConceal) this.registration.creator.conceal();
    }
  }

  apply (value) {
    if (!this.canDisclose) return;
    this._isApplying = true;
    this.setAttribute(this.attributeName, value);
    this.request(() => { this._isApplying = false; });
  }

  get isDisclosed () {
    return this.getAttribute(this.attributeName) === 'true';
  }

  get isInitiallyDisclosed () {
    return this._isInitiallyDisclosed;
  }

  focus () {
    super.focus();
    this.scrollIntoView();
  }

  measure (rect) {
    const buttonRect = this.rect;
    this._dx = rect.x - buttonRect.x;
    this._dy = rect.y - buttonRect.y;
  }

  get dx () {
    return this._dx;
  }

  get dy () {
    return this._dy;
  }
}

export { DisclosureButton };
