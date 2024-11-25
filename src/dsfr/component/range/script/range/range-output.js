import api from '../../../api';
import { RangeEmission } from './range-emission.js';

class RangeOutput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeOutput';
  }

  init () {
    this.addDescent(RangeEmission.OUTPUT, this.change.bind(this));
  }

  change (data) {
    this.node.innerText = data.text;
    this.node.style.transform = data.transform;
  }
}

export { RangeOutput };
