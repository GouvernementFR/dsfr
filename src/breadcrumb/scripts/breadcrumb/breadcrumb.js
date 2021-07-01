import api from '../../api.js';

class Breadcrumb extends api.core.Instance {
  constructor () {
    super();
    this.count = 0;
    this.focusing = this.focus.bind(this);
  }

  init () {
    this.getCollapse();
    this.isResizing = true;
  }

  get proxy () {
    const scope = this;
    return {
      ...super.proxy,
      focus: scope.focus.bind(scope),
      disclose: scope.collapse.disclose.bind(scope.collapse)
    };
  }

  getCollapse () {
    const collapse = this.collapse;
    if (collapse) {
      collapse.listen(api.core.DisclosureEvents.DISCLOSE, this.focusing);
    } else {
      this.addAscent(api.core.DisclosureEmissions.ADDED, this.getCollapse.bind(this));
    }
  }

  resize () {
    const collapse = this.collapse;
    const links = this.links;
    if (!collapse || !links.length) return;

    if (this.isBreakpoint('md')) {
      if (collapse.buttonHasFocus) links[0].focus();
    } else {
      if (links.indexOf(document.activeElement) > -1) collapse.focus();
    }
  }

  get links () {
    return [...this.querySelectorAll('a[href]')];
  }

  get collapse () {
    return this.element.getDescendantInstances(api.core.Collapse.name, null, true)[0];
  }

  focus () {
    this.count = 0;
    this._focus();
  }

  _focus () {
    const link = this.links[0];
    if (!link) return;
    link.focus();
    this.requestNext();
  }

  next () {
    this.count++;
    if (this.count > 100) return;
    const link = this.links[0];
    if (!link) return;
    if (document.activeElement !== link) this._focus();
  }
}

export { Breadcrumb };
