import { AriaControllerButton } from './aria-controller-button';

class AriaController {
  constructor (id, attributeName) {
    this.id = id;
    this.attributeName = attributeName;
    this.buttons = [];
    this.active = null;

    const buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) {
      let button;
      for (let i = 0; i < buttons.length; i++) {
        button = new AriaControllerButton(buttons[i], this);
        if (button.isToggle) {
          if (this.active === null) {
            this.active = button.activation;
            this.toggle = button;
          }
          else button.change(this.active);
        }
        this.buttons.push(button);
      }
      this.init();
    }
    this.active = this.active || false;
  }

  activate(ignore) {
    if (this.active) return;
    if (!ignore && this.group !== null) this.group.select(this);
    if (this.controllee !== null) this.controllee.activate();

  }

  deactivate(ignore) {
    if (!this.active) return;
    if (!ignore && this.group != null) this.group.unselect(this);
    if (this.controllee !== null) this.controllee.deactivate();

  }

  change(value) {

  }

  setGroup(group) {
    this.group = group;
  }

  setControllee(controllee) {
    this.controllee = controllee;
  }
}



export { AriaController };
