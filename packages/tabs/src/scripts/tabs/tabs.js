import { TabsGroup } from './tabs-group';

class Tabs {
  constructor () {
    this.groups = [];
    this.init();
  }

  init () {
    const wrappers = document.querySelectorAll('.${prefix}-tabs');

    for (let i = 0; i < wrappers.length; i++) this.groups.push(new TabsGroup(wrappers[i]));

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    this.isMedium = window.matchMedia('(min-width: 48em)').matches;

    if (this.isMedium) {
    } else {
    }
  }
}

export { Tabs };
