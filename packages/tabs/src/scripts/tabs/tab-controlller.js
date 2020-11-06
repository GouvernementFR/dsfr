import { AriaController } from '@frds/utilities/src/scripts/';
import { TabControllee } from './tab-controllee';
import { PANEL } from './tabs-constants';
import { TabControllerButton } from './tab-controller-button';

class TabController extends AriaController {
  constructor (element) {
    const factory = (element, controller) => new TabControllerButton(element, controller);
    const controllee = new TabControllee(element, PANEL + '--' + AriaController.SELECT);
    super(controllee, AriaController.SELECT, factory);
  }
}

export { TabController };
