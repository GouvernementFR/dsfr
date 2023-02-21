import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { ModalButtonActionee } from './modal-button-actionee';
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
    this.register(`[aria-controls="${this.id}"]`, ModalButtonActionee);
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    const modalTitle = this.node.querySelector(ModalSelector.TITLE);

    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const headings = [this.node.querySelector(selector)].filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0);

    const button = this.element.getInstance('Modal').buttons.filter(button => button.isPrimary)[0];
    if (!modalTitle || !headings.length || !button) return null;

    return modalTitle.textContent.trim() || headings[0].textContent.trim() || button.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ModalActionee };
