import api from '../../api.js';
import { TabPanelDirection } from './tab-panel-direction.js';
import { TabKeys } from './tab-keys';
import { TabEmission } from './tab-emission';

/**
* TabGroup est la classe étendue de DiscosuresGroup
* Correspond à un objet Tabs avec plusieurs tab-button & Tab (panel)
*/
class TabsGroup extends api.core.DisclosuresGroup {
  constructor () {
    super('TabPanel');
  }

  static get instanceClassName () {
    return 'TabsGroup';
  }

  init () {
    super.init();

    this.listen('transitionend', this.transitionend.bind(this));
    this.addAscent(TabEmission.PRESS_KEY, this.pressKey.bind(this));
    this.addAscent(TabEmission.LIST_HEIGHT, this.setListHeight.bind(this));
    this.isRendering = true;
  }

  getIndex (defaultIndex = 0) {
    super.getIndex(defaultIndex);
  }

  get list () {
    return this.element.getDescendantInstances('TabsList', 'TabsGroup', true)[0];
  }

  setListHeight (value) {
    this.listHeight = value;
  }

  transitionend (e) {
    this.isPreventingTransition = true;
  }

  get buttonHasFocus () {
    return this.members.some(member => member.buttonHasFocus);
  }

  pressKey (key) {
    switch (key) {
      case TabKeys.LEFT:
        this.pressLeft();
        break;

      case TabKeys.RIGHT:
        this.pressRight();
        break;

      case TabKeys.HOME:
        this.pressHome();
        break;

      case TabKeys.END:
        this.pressEnd();
        break;
    }
  }

  /**
   * Selectionne l'element suivant de la liste si on est sur un bouton
   * Si on est à la fin on retourne au début
   */
  pressRight () {
    if (this.buttonHasFocus) {
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
  pressLeft () {
    if (this.buttonHasFocus) {
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
  pressHome () {
    if (this.buttonHasFocus) {
      this.index = 0;
      this.focus();
    }
  };

  /**
   * Selectionne le dernier element de la liste si on est sur un bouton
   */
  pressEnd () {
    if (this.buttonHasFocus) {
      this.index = this.length - 1;
      this.focus();
    }
  };

  focus () {
    if (this.current) {
      this.current.focus();
    }
  }

  apply () {
    for (let i = 0; i < this._index; i++) this.members[i].translate(TabPanelDirection.START);
    if (this.current) this.current.translate(TabPanelDirection.NONE);
    for (let i = this._index + 1; i < this.length; i++) this.members[i].translate(TabPanelDirection.END);
    this.isPreventingTransition = false;
  }

  get isPreventingTransition () {
    return this._isPreventingTransition;
  }

  set isPreventingTransition (value) {
    if (this._isPreventingTransition === value) return;
    if (value) this.addClass(api.internals.motion.TransitionSelector.NONE);
    else this.removeClass(api.internals.motion.TransitionSelector.NONE);
    this._isPreventingTransition = value === true;
  }

  render () {
    if (this.current === null) return;
    this.node.scrollTop = 0;
    this.node.scrollLeft = 0;
    const paneHeight = Math.round(this.current.node.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    this.style.setProperty('--tabs-height', (this.panelHeight + this.listHeight) + 'px');
  }
}

export { TabsGroup };
