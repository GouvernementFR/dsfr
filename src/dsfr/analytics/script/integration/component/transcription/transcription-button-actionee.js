import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TranscriptionButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TranscriptionButtonActionee';
  }

  init () {
    this.isMuted = true;
  }

  get button () {
    return this.element.getInstance('CollapseButton');
  }

  get label () {
    const text = this.getFirstText();
    if (text) return text;
    return 'bouton transcription';
  }

  get component () {
    return ID;
  }
}

export { TranscriptionButtonActionee };
