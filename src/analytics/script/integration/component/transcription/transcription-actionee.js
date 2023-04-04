import { ComponentActionee } from '../component-actionee';
import { TranscriptionSelector } from './transcription-selector';
import { TranscriptionButtonActionee } from './transcription-button-actionee';
import ID from './id';

class TranscriptionActionee extends ComponentActionee {
  constructor () {
    super(2, true);
  }

  static get instanceClassName () {
    return 'TranscriptionActionee';
  }

  init () {
    this.setDiscloseType();
    this.wrapper = this.node.closest(TranscriptionSelector.ACCORDION);
    this.detectLevel(this.wrapper);
    this.register(`[aria-controls="${this.id}"]`, TranscriptionButtonActionee);
    this._instance = this.element.getInstance('Collapse');
    this.listenDisclose();
  }

  get label () {
    if (this.wrapper) {
      const title = this.wrapper.querySelector(TranscriptionSelector.TITLE);
      if (title) return title.textContent.trim();
    }
    const button = this._instance;
    if (button) return button.node.textContent.trim();
    return null;
  }

  get component () {
    return ID;
  }
}

export { TranscriptionActionee };
