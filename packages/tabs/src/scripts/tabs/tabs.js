import { CollapseElement, CollapseGroup } from '@frds/utilities/src/scripts/';

const TABS_PANELS = '.${prefix}-tabs > .${prefix}-tabs__panels > .${prefix}-tabs__panel';
const TAB = '${prefix}-tabs__panel';
const EXPANDED = '--selected';
const TABS_WRAPPER = '${prefix}-tabs';

class Tabs {
  constructor () {
    this.init();
  }

  init () {
    this.tabs = [];
    this.group = new CollapseGroup();

    const elements = document.querySelectorAll(TABS_PANELS);
    const tabsWrappers = document.querySelectorAll('.${prefix}-tabs');
    this.buttons = document.querySelectorAll('.${prefix}-tabs__tab');

    let element, tabsWrapper, collapseElement;

    for (let i = 0; i < elements.length; i++) {
      element = elements[i];
      collapseElement = new CollapseElement(element, TAB + EXPANDED);
      console.log(collapseElement);
      this.tabs.push(new Tab(collapseElement));
      this.group.add(collapseElement);
    }

    for (let i = 0; i < tabsWrappers.length; i++) {
      tabsWrapper = tabsWrappers[i];
      this.collapseSideNav = new CollapseElement(tabsWrapper, TABS_WRAPPER + EXPANDED);
    }

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

class Tab {
  constructor (collapseElement) {
    this.element = collapseElement.element;
    this.btn = collapseElement.buttons[0].element;
  }
}

export { Tabs };
