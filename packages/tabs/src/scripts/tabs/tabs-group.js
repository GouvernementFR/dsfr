import { DisclosuresGroup, KeyListener, Renderer } from '@gouvfr/core/src/scripts';
import { TAB_CLASSNAME, TABS_LIST_SELECTOR, TABS_SELECTOR } from './tabs-constants';

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends DisclosuresGroup {
  constructor (id, element) {
    super(id, element);
    this.list = element.querySelector(`.${TABS_LIST_SELECTOR}`);

    element.addEventListener('transitionend', this.transitionend.bind(this));

    this.listen();
    Renderer.add(this.render.bind(this));
  }

  static get selector () { return TABS_SELECTOR; }

  transitionend (e) {
    this.element.style.transition = 'none';
  }

  listen () {
    this.keyListener = new KeyListener(this.element);
    this.keyListener.down(KeyListener.RIGHT, this.arrowRightPress.bind(this), true, true);
    this.keyListener.down(KeyListener.LEFT, this.arrowLeftPress.bind(this), true, true);
    this.keyListener.down(KeyListener.HOME, this.homePress.bind(this), true, true);
    this.keyListener.down(KeyListener.END, this.endPress.bind(this), true, true);
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

      this.focus();
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

      this.focus();
    }
  };

  /**
   * Selectionne le permier element de la liste si on est sur un bouton
   */
  homePress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      this.index = 0;
      this.focus();
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  endPress () {
    if (document.activeElement.classList.contains(TAB_CLASSNAME)) {
      this.index = this.length - 1;
      this.focus();
    }
  };

  focus () {
    if (this.current) this.current.focus();
  }

  apply (value, initial) {
    for (let i = 0; i < this._index; i++) this.members[i].translate(-1, initial);
    this.current.element.style.transform = '';
    for (let i = this._index + 1; i < this.length; i++) this.members[i].translate(1, initial);
    this.element.style.transition = '';
  }

  add (tab) {
    super.add(tab);
    if (this.length === 1 || tab.disclosed) this.current = tab;
    else {
      const index = this.members.indexOf(tab);
      if (this._index > -1 && this._index !== index) tab.element.style.transform = `translateX(${index < this._index ? -100 : 100}%)`;
    }
  }

  render () {
    if (this.current === null) return;
    const paneHeight = Math.round(this.current.element.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    this.element.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
  }
}

export { TabsGroup };
