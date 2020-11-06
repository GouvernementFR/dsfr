import { AriaControllerButton } from './aria-controller-button';

class AriaController {
  constructor (controllee, type, factory) {
    this.controllee = controllee;
    this.type = type;
    this.attributeName = 'aria-' + type;
    this.buttons = [];
    this.active = null;

    const buttons = document.querySelectorAll('[aria-controls="' + this.controllee.id + '"]');

    if (factory === undefined) factory = (element, controller) => new AriaControllerButton(element, controller);

    if (buttons.length > 0) {
      let button;
      for (let i = 0; i < buttons.length; i++) {
        button = factory(buttons[i], this);
        if (button.hasAttribute) {
          if (this.active === null) {
            this.active = button.activation;
            this.primary = button;
          } else button.apply(this.active);
        }
        this.buttons.push(button);
      }
    }

    this.active = this.active === true;

    this.apply(this.active);
  }

  activate () {
    if (this.active) return;

    if (this.group !== null) this.group.select(this);
    this.apply(true);
  }

  deactivate () {
    if (!this.active) return;

    if (this.group != null) this.group.unselect(this);
    this.apply(false);
  }

  apply (value) {
    this.active = value;
    this.controllee.apply(value);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  change (hasAttribute) {
    switch (this.type) {
      case AriaController.EXPAND:
        switch (true) {
          case !hasAttribute:
          case this.active:
            this.deactivate();
            break;

          default:
            this.activate();
        }
        break;

      case AriaController.SELECT:
        this.activate();
        break;
    }
  }

  setGroup (group) {
    this.group = group;
  }
}

AriaController.EXPAND = 'expanded';
AriaController.SELECT = 'selected';

export { AriaController };
