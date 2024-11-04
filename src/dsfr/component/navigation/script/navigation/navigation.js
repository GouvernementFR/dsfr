import api from '../../api.js';
import { NavigationSelector } from './navigation-selector.js';
import { NavigationMousePosition } from './navigation-mouse-position.js';

class Navigation extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'Navigation';
  }

  init () {
    super.init();
    this.clicked = false;
    this.out = false;
    this.addEmission(api.core.RootEmission.CLICK, this._handleRootClick.bind(this));
    this.listen('mousedown', this.handleMouseDown.bind(this));
    this.listenClick({ capture: true });
    this.isResizing = true;
  }

  validate (member) {
    return super.validate(member) && member.element.node.matches(api.internals.legacy.isLegacy ? NavigationSelector.COLLAPSE_LEGACY : NavigationSelector.COLLAPSE);
  }

  handleMouseDown (e) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG) || this.index === -1 || !this.current) return;
    this.position = this.current.node.contains(e.target) ? NavigationMousePosition.INSIDE : NavigationMousePosition.OUTSIDE;
    this.requestPosition();
  }

  handleClick (e) {
    if (e.target.matches('a, button') && !e.target.matches('[aria-controls]') && !e.target.matches(api.core.DisclosureSelector.PREVENT_CONCEAL)) {
      this.index = -1;
    }
  }

  _handleRootClick (target) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG)) return;
    if (!this.node.contains(target)) {
      this.out = true;
      this.requestPosition();
    }
  }

  requestPosition () {
    if (this.isRequesting) return;
    this.isRequesting = true;
    this.request(this.getPosition.bind(this));
  }

  getPosition () {
    if (this.out) {
      switch (this.position) {
        case NavigationMousePosition.OUTSIDE:
          this.index = -1;
          break;

        case NavigationMousePosition.INSIDE:
          if (this.current && !this.current.node.contains(document.activeElement)) this.current.focus();
          break;

        default:
          if (this.index > -1 && !this.current.hasFocus) this.index = -1;
      }
    }

    this.request(this.requested.bind(this));
  }

  requested () {
    this.position = NavigationMousePosition.NONE;
    this.out = false;
    this.isRequesting = false;
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current && this.current.hasFocus) this.current.focus();
    super.index = value;
  }

  get canUngroup () {
    return !this.isBreakpoint(api.core.Breakpoints.LG);
  }

  resize () {
    this.update();
  }
}

export { Navigation };
