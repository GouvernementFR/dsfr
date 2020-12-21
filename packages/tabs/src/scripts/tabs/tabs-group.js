import { Tab } from './tab';
import { Disclosure, DisclosuresGroup, KeyListener } from '@gouvfr/core/src/scripts';
import { TAB_CLASSNAME, PANEL_SELECTOR, TABS_SELECTOR, TABS_LIST_SELECTOR } from './tabs-constants';

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond a un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends DisclosuresGroup {
  constructor (wrapper) {
    super();
    this._index = -1;
    this.element = wrapper;

    this.build(wrapper, TABS_SELECTOR, PANEL_SELECTOR, Disclosure.SELECT);

    if (this.current === null) this.index = 0;

    this._attachEvents();
  }

  disclosureFactory (element, type, selector) {
    return new Tab(element, type, selector);
  }

  _attachEvents () {
    this.keyEvents = new KeyListener(this.element);
    this.keyEvents.down(KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
    this.keyEvents.down(KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
    this.keyEvents.down(KeyListener.HOME, this.homePress.bind(this), true, true);
    this.keyEvents.down(KeyListener.END, this.endPress.bind(this), true, true);
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  arrowRightPress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      if (this.index < this.disclosures.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    }
  };

  /**
   * Selectionne l'element précédent de la liste si on est sur un bouton
   * Si on est au debut retourne a la fin
   */
  arrowLeftPress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.disclosures.length - 1;
      }
    }
  };

  /**
   * Selectionne le permier element de la liste si on est sur un bouton
   */
  homePress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      this.index = 0;
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  endPress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      this.index = this.disclosures.length - 1;
    }
  };

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

  /**
   * Adapte la hauteur du panel en ajoutant un margin-bottom sous la liste
   * Remonte sur le parent en cas de tabs dans tabs
   */
  setPanelHeight () {
    const offsetFocus = 4;
    const panelHeight = this.current.element.offsetHeight - offsetFocus;
    this.element.querySelector(TABS_LIST_SELECTOR).style.marginBottom = panelHeight + 'px';

    // const nestedParent = this.element.parentNode.closest(TABS_SELECTOR);
    // if (nestedParent && nestedParent !== this.element) {
    //   const currentParent = nestedParent.querySelector(PANEL_SELECTOR + '--' + Disclosure.SELECT);
    //   const parentHeight = currentParent.offsetHeight;
    //   console.log(parentHeight);
    //   nestedParent.querySelector(TABS_LIST_SELECTOR).style.marginBottom = parentHeight + 'px';

    // }
  }
}

export { TabsGroup };
