import ref from '../../../ref.js';

class CollapsesGroup extends ref.disclosure.DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }
}

export { CollapsesGroup };
