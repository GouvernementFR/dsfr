import api from '../../api.js';
import { TagEvent } from './tag-event';

class TagDismissible extends api.core.Instance {
  static get instanceClassName () {
    return 'TagDismissible';
  }

  init () {
    this.listenClick();
  }

  handleClick () {
    this.focusClosest();

    switch (api.mode) {
      case api.Modes.ANGULAR:
      case api.Modes.REACT:
      case api.Modes.VUE:
        this.request(this.verify.bind(this));
        break;

      default:
        this.remove();
    }

    this.dispatch(TagEvent.DISMISS);
  }

  verify () {
    if (document.body.contains(this.node)) this.warn(`a TagDismissible has just been dismissed and should be removed from the dom. In ${api.mode} mode, the api doesn't handle dom modification. An event ${TagEvent.DISMISS} is dispatched by the element to trigger the removal`);
  }
}

export { TagDismissible };
