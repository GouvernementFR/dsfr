import { ComponentActionee } from '../component-actionee';
import { TranscriptionSelector } from './transcription-selector';
import { TranscriptionButtonActionee } from './transcription-button-actionee';
import ID from './id';

class TranscriptionActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TranscriptionActionee';
  }

  init () {
    this.setDiscloseType();
    this.wrapper = this.node.closest(TranscriptionSelector.ACCORDION);
    this.detectLevel(this.wrapper);
    this.register(`[aria-controls="${this.id}"]`, TranscriptionButtonActionee);
    this.listenDisclose();
  }

  get label () {
    if (this.wrapper) {
      const title = this.wrapper.querySelector(TranscriptionSelector.TITLE);
      if (title) {
        const firstTextTitle = this.getFirstText(title);
        if (firstTextTitle) return firstTextTitle;
      }
    }
    const instance = this.element.getInstance('Collapse');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) {
        const firstTextBtn = this.getFirstText(button);
        if (firstTextBtn) return firstTextBtn;
      }
    }
    return 'transcription';
  }

  get component () {
    return ID;
  }
}

export { TranscriptionActionee };
