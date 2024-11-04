import api from '../../api.js';
import { SegmentedEmission } from './segmented-emission.js';

class SegmentedElement extends api.core.Instance {
  static get instanceClassName () {
    return 'SegmentedElement';
  }

  init () {
    this.ascend(SegmentedEmission.ADDED);
  }

  dispose () {
    this.ascend(SegmentedEmission.REMOVED);
  }
}

export { SegmentedElement };
