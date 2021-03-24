import api from '../../api';

/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */
class TabButton extends api.core.DisclosureButton {
  apply (value) {
    super.apply(value);
    if (this.hasAttribute) {
      this.element.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

export { TabButton };
