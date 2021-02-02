import { Modal } from './modal';

/**
 * Classe principale des Modals, initialise tout les éléments Modal dans la page
 */
class Modals {
  constructor () {
    this.init();
  }

  init () {
    Modal.build(document);
  }
}

export { Modals };
