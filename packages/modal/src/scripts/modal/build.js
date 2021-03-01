import { Modal } from './modal';

/**
 * initialise tout les éléments Modal dans la page
 */
const build = () => {
  console.log('build');
  Modal.build(document);
};

export { build };
