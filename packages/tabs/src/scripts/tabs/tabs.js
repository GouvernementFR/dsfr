import { TabsGroup } from './tabs-group';

const WRAPPER = '.${prefix}-tabs';

class Tabs {
  constructor () {
    this.groups = [];
    this.init();
  }

  init () {
    console.log('init');
    const wrappers = document.querySelectorAll(WRAPPER);

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
