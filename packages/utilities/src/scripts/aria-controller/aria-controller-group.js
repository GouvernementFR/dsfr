class AriaControllerGroup {
  constructor () {
    this.controllers = [];
    this._current = null;
  }

  add (controller) {
    this.controllers.push(controller);
    controller.setGroup(this);

    console.log('group add', this.current, controller.active, !controller.active);

    switch (true) {
      case this.current !== null:
      case !controller.active:
        console.log('not current');
        controller.apply(false);
        break;

      default:
        this.current = controller;
        console.log('current');
        controller.apply(true);
    }
  }

  get current () { return this._current; }

  set current (controller) {
    if (this._current !== null && this._current !== controller) this._current.apply(false);
    this._current = controller;
    if (this._current !== null) this._current.apply(true);
  }

  select (controller) {
    this.current = controller;
  }

  unselect () {
    this.current = null;
  }
}

export { AriaControllerGroup };
