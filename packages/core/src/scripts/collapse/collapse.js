import { addClass, removeClass } from '../';

const COLLAPSE = '.${prefix}-collapse';
const MODIFIER = COLLAPSE + '--expanded';
const TOGGLE = 'toggle_event';
const REDUCE = 'reduce_event';
const EXPAND = 'expand_event';

class Collapse {
  constructor () {
    this.elements = [];
    this.groups = {};
    this.init();
  }

  init () {
    const elements = document.querySelectorAll(COLLAPSE);
    let collapse, groupId, group;

    for (let i = 0; i < elements.length; i++) {
      collapse = new CollapseElement(elements[i], MODIFIER);
      this.elements.push(collapse);
      groupId = collapse.element.getAttribute('data-group');

      if (groupId !== null) {
        group = this.groups[groupId];

        if (group === undefined) {
          group = new CollapseGroup();
          this.groups[groupId] = group;
        }

        group.add(collapse);
      }
    }
  }
}

class CollapseElement {
  constructor (element, modifier) {
    this.element = element;
    this.modifier = modifier;
    this.id = element.id;
    const buttons = document.querySelectorAll('[aria-controls="' + this.id + '"]');

    if (buttons.length > 0) {
      this.buttons = [];
      for (let i = 0; i < buttons.length; i++) this.buttons.push(new CollapseButton(buttons[i]));
      this.init();
    }
  }

  init () {
    // this.element.addEventListener('transitionend', this.transitionEnd.bind(this));

    const toggles = this.buttons.filter((button) => { return button.type === TOGGLE; });
    if (toggles.length > 0) this.expanded = toggles[0].expanded;

    this.buttons.forEach((button) => {
      button.element.addEventListener(TOGGLE, this.toggle.bind((this)));
      button.element.addEventListener(REDUCE, this.reduce.bind((this)));
    });
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  toggle (e) {
    this.expanded = !this.expanded;
  }

  reduce (e) {
    this.expanded = false;
    for (let i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].type === TOGGLE) {
        this.buttons[i].focus();
        break;
      }
    }
  }

  get expanded () { return this._expanded === true; }

  set expanded (value) {
    const bool = value === true;
    if (this._expanded === bool) return;
    this._expanded = bool;

    this.buttons.forEach((button) => {
      button.expanded = this._expanded;
    });

    if (this._expanded) {
      // this.element.removeAttribute('hidden');
      // requestAnimationFrame(() => addClass(this.element, EXPANDED));
      addClass(this.element, this.modifier);
      this.element.dispatchEvent(new Event(EXPAND));
    } else {
      removeClass(this.element, this.modifier);
      this.element.dispatchEvent(new Event(REDUCE));
    }
  }

  transitionEnd () {
    // if (!this._expanded) this.element.setAttribute('hidden', '');
  }
}

class CollapseButton {
  constructor (element) {
    this.element = element;
    this.type = element.hasAttribute('aria-expanded') ? TOGGLE : REDUCE;
    this.element.addEventListener('click', this.click.bind(this));
  }

  click (e) {
    this.element.dispatchEvent(new Event(this.type));
  }

  set expanded (value) {
    if (this.type === TOGGLE) this.element.setAttribute('aria-expanded', value);
  }

  get expanded () {
    if (this.type === TOGGLE) return this.element.getAttribute('aria-expanded') === 'true';
    return null;
  }

  get hasFocus () {
    return this.element === document.activeElement;
  }

  focus () {
    this.element.focus();
  }
}

class CollapseGroup {
  constructor () {
    this.collapses = [];
  }

  add (collapse) {
    this.collapses.push(collapse);
    collapse.element.addEventListener(EXPAND, this.onExpand.bind(this));
    collapse.element.addEventListener(REDUCE, this.onReduce.bind(this));
  }

  onExpand (e) {
    this.collapses.forEach((collapse) => {
      if (collapse.element === e.target) this.current = collapse;
      else collapse.expanded = false;
    });
  }

  onReduce (e) {
    if (this.collapses.every((collapse) => { return !collapse.expanded; })) this.current = undefined;
  }

  reduce () {
    if (this.current !== undefined) this.current.expanded = false;
  }

  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }
}

export { Collapse, CollapseElement, CollapseGroup };
