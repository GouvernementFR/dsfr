import { Tab } from './tab';
import { addClass, DisclosuresGroup, KeyListener, removeClass } from '@gouvfr/core/src/scripts';
import { PANEL_FOLLOWING, TAB_CLASSNAME, TABS_LIST_SELECTOR } from './tabs-constants';

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends DisclosuresGroup {
  constructor (wrapper) {
    super();
    this._index = -1;
    this.element = wrapper;
    this.list = wrapper.querySelector(TABS_LIST_SELECTOR);

    this.build(wrapper);

    this.wrapper.addEventListener('transitionend', this.dispatchUpdate.bind(this));

    if (this.index === -1) this.index = 0;

    window.requestAnimationFrame(this.place.bind(this));

    this._attachEvents();
  }

  get DisclosureConstructor () { return Tab; }

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

  get current () { return super.current; }

  set current (disclosure) {
    this.index = this.disclosures.indexOf(disclosure);
  }

  get index () { return this._index; }

  set index (value) {
    if (value < 0 || value >= this.disclosures.length || this._index === value) return;
    const previous = this._index;
    this._index = value;
    super.current = this.disclosures[value];
    this.place(previous);
  }

  place (previous) {
    for (let i = 0; i < this.disclosures.length; i++) {
      const element = this.disclosures[i].element;
      if (i <= this._index) removeClass(element, PANEL_FOLLOWING);
      else addClass(element, PANEL_FOLLOWING);
    }
  }

  /**
   * Adapte la hauteur du panel en ajoutant un margin-bottom sous la liste
   * Remonte sur le parent en cas de tabs dans tabs
   */
  update () {
    if (this.current === null) return;
    const panelHeight = this.current.element.offsetHeight;
    const listHeight = this.list.offsetHeight;
    this.wrapper.style.height = (panelHeight + listHeight) + 'px';
  }

  dispatchUpdate (e) {
    this.wrapper.dispatchEvent(new Event('update', { bubbles: true }));
  }
}

export { TabsGroup };
