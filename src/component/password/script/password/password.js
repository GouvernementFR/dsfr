import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class Password extends api.core.Instance {
  static get instanceClassName () {
    return 'Password';
  }

  init () {
    this.update();
    this.addAscent(PasswordEmission.TOGGLE, this.descend.bind(this));
    this.isSwappingFont = true;
    api.internals.register(api.password.PasswordSelector.LABEL, api.password.PasswordLabel);
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      update: scope.update.bind(scope)
    });
  }

  // get input () {
  //   return this.element.getRegisteredInstances('PasswordInput')[0];
  // }

  // get toggle () {
  //   return this.element.getRegisteredInstances('PasswordToggle')[0];
  // }

  get label () {
    return this.getRegisteredInstances('PasswordLabel')[0];
  }

  update () {
    // const style = getComputedStyle(this.toggle.node);
    // const maxWidth = parseFloat(style.width);
    // this.label.style.maxWidth = `${maxWidth}px`;
    console.log('------------------', this.label);
  }

  swapFont (families) {
    this.update();
  }
}

export { Password };
