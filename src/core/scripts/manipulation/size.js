class EquisizedGroup {
  constructor (selector, groups) {
    this.selector = selector;
    this.groups = typeof groups === 'string' ? document.querySelectorAll(groups) : groups;

    for (let i = 0; i < this.groups.length; i++) {
      this.equisizedGroups.push(new Equisized(this.selector, this.groups[i]));
    }

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    this.change();
  }

  change () {
    for (let i = 0; i < this.equisizedGroups.length; i++) {
      this.equisizedGroups[i].change();
    }
  }
}

class Equisized {
  constructor (selector, group) {
    this.selector = selector;
    this.group = group;
    this.elements = this.group.querySelectorAll(this.selector);
    this.maxWidth = 0;

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('load', this.changing); // fix change before css load
    // this.change();
  }

  change () {
    this.reset();
    for (let i = 0; i < this.elements.length; i++) {
      const tmpWWidth = this._getWidth(this.elements[i]);
      if (tmpWWidth > this.maxWidth) {
        this.maxWidth = tmpWWidth;
      }
    }
    this.apply();
  }

  apply () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = this.maxWidth + 1 + 'px';
    }
  }

  reset () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = 'auto';
    }
    this.maxWidth = 0;
  }

  _getWidth (el) {
    let width = el.offsetWidth;
    const style = getComputedStyle(el);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    return width;
  }
}

export { Equisized, EquisizedGroup };
