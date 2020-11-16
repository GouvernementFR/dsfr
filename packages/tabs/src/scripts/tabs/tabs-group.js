import { Tab } from './tab';
import { Disclosure, DisclosuresGroup } from '@frds/utilities/src/scripts';
import { KEY_BINDS, PANEL_SELECTOR, TABS_LIST_SELECTOR } from './tabs-constants';

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond a un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends DisclosuresGroup {
  constructor (wrapper) {
    super();
    this._index = -1;
    this.element = wrapper;

    console.log('build');
    this.build(wrapper, PANEL_SELECTOR, Disclosure.SELECT);

    if (this.current === null) this.index = 0;

    this._attachEvents();
  }

  disclosureFactory (element, type, selector) {
    return new Tab(element, type, selector);
  }

  _attachEvents () {
    this.element.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case KEY_BINDS.RIGHT:
          // Si on est a la fin retourne au debut
          if (this.index < this.disclosures.length - 1) {
            this.index++;
          } else {
            this.index = 0;
          }
          e.preventDefault();
          break;

        case KEY_BINDS.LEFT:
          //  Si on est au debut retourne a la fin
          if (this.index > 0) {
            this.index--;
          } else {
            this.index = this.disclosures.length - 1;
          }
          e.preventDefault();
          break;

        case KEY_BINDS.HOME:
          this.index = 0;
          e.preventDefault();
          break;

        case KEY_BINDS.END:
          this.index = this.disclosures.length - 1;
          e.preventDefault();
          break;
      };
    });
  }

  disclosureFactory (element, type, selector) {
    return new Tab(element, type, selector);
  }

  _attachEvents () {
    this.element.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case KEY_BINDS.RIGHT:
          // If we're at the end, go to the start
          if (this.index < this.disclosures.length - 1) {
            this.index++;
          } else {
            this.index = 0;
          }
          e.preventDefault();
          break;

        case KEY_BINDS.LEFT:
          // If we're at the start, move to the end
          if (this.index > 0) {
            this.index--;
          } else {
            this.index = this.disclosures.length - 1;
          }
          e.preventDefault();
          break;

        case KEY_BINDS.HOME:
          this.index = 0;
          e.preventDefault();
          break;

        case KEY_BINDS.END:
          this.index = this.disclosures.length - 1;
          e.preventDefault();
          break;
      };
    });
  }

  get index () { return this._index; }

  set index (value) {
    if (value < 0 || value >= this.disclosures.length || this._index === value) return;
    this._index = value;
    this.current = this.disclosures[value];
    this.setPanelHeight();
  }

  get current () { return super.current; }

  set current (controller) {
    super.current = controller;
    this._index = this.disclosures.indexOf(controller);
    this.setPanelHeight();
  }

  setPanelHeight () {
    this.element.querySelector(TABS_LIST_SELECTOR).style.marginBottom = getComputedStyle(this.current.element).height;
  }
}

export { TabsGroup };
