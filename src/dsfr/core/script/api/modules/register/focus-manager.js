import api from '../../api';

class FocusManager {
  constructor () {
    this._activeElements = [];
    window.document.addEventListener('focusin', this._onFocusIn.bind(this));
  }

  _onFocusIn (e) {
    this._activeElements.push(e.target);
  }

  get index () {
    return this._activeElements.length - 1;
  }

  focus (index) {
    const element = this._activeElements[index];
    switch (true) {
      case index < 0:
      case this._activeElements.length === 0:
        this.focusOnLogo();
        return;
      case !element:
      case !document.documentElement.contains(element):
      case !this._isDisplayed(element):
        this.focus(index - 1);
        return;
    }

    element.focus();
  }

  focusOnLogo () {
    const logo = document.querySelector(api.header.HeaderSelector.BRAND_LINK);
    if (logo) logo.focus();
  }

  _isDisplayed (element) {
    while (element && element !== document.documentElement) {
      if (element === document.body) return true;
      const style = window.getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      element = element.parentElement;
    }
    return true;
  }
}

const focusManager = new FocusManager();

export default focusManager;
