import api from '../../api.js';

/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */
class TabButton extends api.core.DisclosureButton {
  constructor () {
    super(api.core.DisclosureType.SELECT);
  }

  static get instanceClassName () {
    return 'TabButton';
  }

  apply (value) {
    super.apply(value);
    if (this.isPrimary) {
      this.setAttribute('tabindex', value ? '0' : '-1');
      if (value) {
        if (this.list) this.list.focalize(this);
      }
    }
  }

  get list () {
    return this.element.getAscendantInstance('TabsList', 'TabsGroup');
  }
}

export { TabButton };
