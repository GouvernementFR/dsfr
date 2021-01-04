import { DisclosureButton } from '../disclosure/disclosure-button';

/**
 * CollapseButton correspond au bouton cliquable qui change le panel
 * CollapseButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-expanded
 */
class CollapseButton extends DisclosureButton {
  get hasFocus () {
    return this.element === document.activeElement;
  }
}

export { CollapseButton };
