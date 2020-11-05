class AriaControllerGroup {
  constructor () {
    this.controllers = [];
    this.current = null;
  }

  add (controller) {
    this.controllers.push(controller);
    controller.setGroup(this);
  }

  select (controller) {
    if (this.current !== null) this.current.deactivate(true);
    this.current = controller;
  }

  unselect (controller) {
    if (this.current === controller) this.current = null;
  }

  deactivate () {
    this.controllers.forEach((controller) => {
      controller.deactivate(true);
    });
  }

  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }
}

export { AriaControllerGroup };
