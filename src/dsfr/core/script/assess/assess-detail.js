import { Instance } from '../api/modules/register/instance.js';
import { AssessEmission } from './assess-emission';

class AssessDetail extends Instance {
  static get instanceClassName () {
    return 'AssessDetail';
  }

  init () {
    this.addDescent(AssessEmission.UPDATE, this.update.bind(this));
    this.ascend(AssessEmission.ADDED);
  }

  update (details) {
    this.node.innerHTML = details.join(' - ');
  }
}

export { AssessDetail };
