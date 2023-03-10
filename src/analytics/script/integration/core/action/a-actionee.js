import { Actionee } from '../actionee';

class AActionee extends Actionee {
  constructor () {
    super(null, 0);
  }

  static get instanceClassName () {
    return 'AActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.getInteractionLabel();
  }
}

export { AActionee };
