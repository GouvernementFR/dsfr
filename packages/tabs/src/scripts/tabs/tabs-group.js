import { Tab } from './tab';
import { DisclosuresGroup, KeyListener, Renderer } from '@gouvfr/core/src/scripts';
import { TAB_CLASSNAME, TABS_LIST_SELECTOR } from './tabs-constants';

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

    this._attachEvents();
    Renderer.add(this.render.bind(this));
  }

  static get MemberConstructor () { return Tab; }

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
      if (this.index < this.length - 1) {
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
        this.index = this.length - 1;
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
      this.index = this.length - 1;
    }
  };

  get current () { return super.current; }

  set current (tab) {
    this.index = this.members.indexOf(tab);
  }

  get index () { return this._index; }

  set index (value) {
    if (value < 0 || value >= this.length || this._index === value) return;
    this._index = value;
    this.members[this._index].element.style.transform = '';
    for (let i = 0; i < this._index; i++) this.members[i].element.style.transform = 'translateX(-100%)';
    for (let i = this._index + 1; i < this.length; i++) this.members[i].element.style.transform = 'translateX(100%)';
    super.current = this.members[value];
  }

  add (tab) {
    super.add(tab);
    const index = this.members.indexOf(tab);
    if (this._index > -1 && this._index !== index) tab.element.style.transform = `translateX(${index < this._index ? -100 : 100}%)`;
  }

  render () {
    if (this.current === null) return;
    const paneHeight = Math.round(this.current.element.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    this.wrapper.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
  }
}

export { TabsGroup };
