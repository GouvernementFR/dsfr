import { Module } from '../module.js';
import { Registration } from './registration';
import state from '../state.js';

class Register extends Module {
  constructor () {
    super('register');
  }

  register (selector, InstanceClass, creator) {
    const registration = new Registration(selector, InstanceClass, creator);
    this.add(registration);
    if (state.isActive) state.getModule('observe').parse(document.documentElement, registration);
    return registration;
  }

  remove (registration) {
    registration.dispose();
    super.remove(registration);
  }
}

export { Register };
