import ref from '../../../ref.js';
import { TagEvent } from './tag-event';

class TagDismissible extends ref.core.Instance {
  static get instanceClassName () {
    return 'TagDismissible';
  }

  init () {
    this.listen('click', this.click.bind(this));
  }

  click () {
    this.focusClosest();

    switch (ref.mode) {
      case ref.Modes.ANGULAR:
      case ref.Modes.REACT:
      case ref.Modes.VUE:
        this.request(this.verify.bind(this));
        break;

      default:
        this.remove();
    }

    this.dispatch(TagEvent.DISMISS);
  }

  verify () {
    if (document.body.contains(this.node)) ref.inspector.warn(`a TagDismissible has just been dismissed and should be removed from the dom. In ${ref.mode} mode, the api doesn't handle dom modification. An event ${TagEvent.DISMISS} is dispatched by the element to trigger the removal`);
  }
}

export { TagDismissible };
