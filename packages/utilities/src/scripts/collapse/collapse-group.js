import { AriaControllerGroup } from '../aria-controller/aria-controller-group';

class CollapseGroup extends AriaControllerGroup {
  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }
}

export { CollapseGroup };
