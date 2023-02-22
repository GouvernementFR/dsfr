import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class BreadcrumbLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbLinkActionee';
  }

  init () {
    this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {
    const data = { component_value: this.getAttribute('href') };
    this.act(data);
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { BreadcrumbLinkActionee };
