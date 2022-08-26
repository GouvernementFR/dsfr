import ref from '../../../ref.js';
import { TabButton } from './tab-button.js';
import { TabSelector } from './tab-selector.js';
import { TabPanelDirection } from './tab-panel-direction.js';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class TabPanel extends ref.core.Disclosure {
  constructor () {
    super(ref.core.DisclosureType.SELECT, TabSelector.PANEL, TabButton, 'TabsGroup');
    this._direction = TabPanelDirection.NONE;
  }

  static get instanceClassName () {
    return 'TabPanel';
  }

  get direction () {
    return this._direction;
  }

  set direction (value) {
    if (value === this._direction) return;
    switch (this._direction) {
      case TabPanelDirection.START:
        this.removeClass(TabSelector.PANEL_START);
        break;

      case TabPanelDirection.END:
        this.removeClass(TabSelector.PANEL_END);
        break;

      case TabPanelDirection.NONE:
        break;

      default:
        return;
    }

    this._direction = value;

    switch (this._direction) {
      case TabPanelDirection.START:
        this.addClass(TabSelector.PANEL_START);
        break;

      case TabPanelDirection.END:
        this.addClass(TabSelector.PANEL_END);
        break;
    }
  }

  translate (direction, initial) {
    this.isTransitioning = initial;
    this.direction = direction;
  }

  reset () {
    this.group.index = 0;
  }
}

export { TabPanel };
