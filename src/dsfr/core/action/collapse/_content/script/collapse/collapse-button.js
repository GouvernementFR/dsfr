import ref from '../../../ref.js';

class CollapseButton extends ref.disclosure.DisclosureButton {
  constructor () {
    super(ref.disclosure.DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

export { CollapseButton };
