import api from '../../api.js';

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
    this.listenKey(api.core.KeyCodes.RIGHT, this.pressRight.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.LEFT, this.pressLeft.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.HOME, this.pressHome.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.END, this.pressEnd.bind(this), true, true);
    this.isRendering = true;

    if (this.list) this.list.apply();
  }

  get list () {
    return this.element.getDescendantInstances('TabsList', 'TabsGroup', true)[0];
  }

  transitionend (e) {
    this.style.transition = 'none';
  }

  get buttonHasFocus () {
    return this.members.some(member => member.buttonHasFocus);
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
    for (let i = 0; i < this._index; i++) this.members[i].translate(-1);
    this.current.style.transition = '';
    this.current.style.transform = '';
    for (let i = this._index + 1; i < this.length; i++) this.members[i].translate(1);
    this.style.transition = '';
  }

  render () {
    if (this.current === null) return;
    const paneHeight = Math.round(this.current.node.offsetHeight);
    if (this.panelHeight === paneHeight) return;
    this.panelHeight = paneHeight;
    let listHeight = 0;
    if (this.list) listHeight = this.list.node.offsetHeight;
    this.style.height = (this.panelHeight + listHeight) + 'px';
  }
}

export { TabsGroup };
