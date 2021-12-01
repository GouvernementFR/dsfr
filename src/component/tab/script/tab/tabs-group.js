import api from '../../api.js';
import { TabSelector } from './tab-selector.js';

const SCROLL_OFFSET = 16; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

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
    this.list = this.querySelector(TabSelector.LIST);
    this.listen('transitionend', this.transitionend.bind(this));
    this.listenKey(api.core.KeyCodes.RIGHT, this.pressRight.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.LEFT, this.pressLeft.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.HOME, this.pressHome.bind(this), true, true);
    this.listenKey(api.core.KeyCodes.END, this.pressEnd.bind(this), true, true);

    this.list.addEventListener('scroll', this.scroll.bind(this));
    this.isRendering = true;
    this.isResizing = true;
  }

  get isScrolling () {
    return this._isScrolling;
  }

  set isScrolling (value) {
    if (this._isScrolling === value) return;
    this._isScrolling = value;

    if (value) {
      this.addClass(TabSelector.SHADOW);
      this.scroll();
    } else {
      this.removeClass(TabSelector.SHADOW);
      this.removeClass(TabSelector.SHADOW_LEFT);
      this.removeClass(TabSelector.SHADOW_RIGHT);
    }
  }

  /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */
  scroll () {
    const isMin = this.list.scrollLeft <= SCROLL_OFFSET;
    const max = this.list.scrollWidth - this.list.clientWidth - SCROLL_OFFSET;

    const isMax = Math.abs(this.list.scrollLeft) >= max;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const minSelector = isRtl ? TabSelector.SHADOW_RIGHT : TabSelector.SHADOW_LEFT;
    const maxSelector = isRtl ? TabSelector.SHADOW_LEFT : TabSelector.SHADOW_RIGHT;

    if (isMin) {
      this.removeClass(minSelector);
    } else {
      this.addClass(minSelector);
    }

    if (isMax) {
      this.removeClass(maxSelector);
    } else {
      this.addClass(maxSelector);
    }
  }

  resize () {
    // this.isScrolling = this.list.offsetWidth >= this.node.offsetWidth;
    this.isScrolling = this.list.scrollWidth > this.list.clientWidth + SCROLL_OFFSET;
  }

  dispose () {
    this.isScrolling = false;
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
    if (this.current) this.current.focus();
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
    this.style.height = (this.panelHeight + this.list.offsetHeight) + 'px';
  }
}

export { TabsGroup };
