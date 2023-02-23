import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
// import { ModalButtonActionee } from './modal-button-actionee';
import { ModalSelector } from './modal-selector.js';
import ID from './id';

class ModalActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'ModalActionee';
  }

  init () {
    // this.register(`[aria-controls="${this.id}"]`, ModalButtonActionee);
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    const modalTitle = this.node.querySelector(ModalSelector.TITLE);

    if (modalTitle) return modalTitle.textContent.trim();

    const selector = Array.from({ length: 2 }, (v, i) => `h${i + 1}`).join(',');
    const headings = this.node.querySelector(selector) ? [...this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) : [];

    if (headings.length) return headings[0].textContent.trim();

    const button = this.element.getInstance('Modal').buttons.filter(button => button.isPrimary)[0];
    return button.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ModalActionee };
