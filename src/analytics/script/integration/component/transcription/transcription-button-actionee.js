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
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this.listenClick();
  }

  get button () {
    return this.element.getInstance('CollapseButton');
  }

  handleClick () {
    const button = this.button;
    if (button && !button.disclosed) this.act();
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
