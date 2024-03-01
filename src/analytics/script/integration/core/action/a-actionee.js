import { Actionee } from '../actionee';

class AActionee extends Actionee {
  constructor () {
    super(0);
  }

  static get instanceClassName () {
    return 'AActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    return this.getInteractionLabel();
  }
}

export { AActionee };
