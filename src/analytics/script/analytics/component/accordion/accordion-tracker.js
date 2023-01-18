import api from '../../../../api.js';
import { ComponentTracker } from '../component-tracker';

class AccordionTracker extends ComponentTracker {
  static get instanceClassName () {
    return 'AccordionTracker';
  }

  init () {
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.track.bind(this));
  }
}

export { AccordionTracker };
