import { addClass, removeClass } from '@gouvfr/core/src/scripts';

const TABLE = '.${prefix}-table:not(.${prefix}-table--no-scroll)';
const LEFT = 'left';
const RIGHT = 'right';
const SHADOW_CLASS = '${prefix}-table--shadow';
const SHADOW_RIGHT_CLASS = '${prefix}-table--shadow-right';
const SHADOW_LEFT_CLASS = '${prefix}-table--shadow-left';
const WRAPPER_NAME = '${prefix}-table__wrapper';
const TABLE_CAPTION_BOTTOM = '${prefix}-table--caption-bottom';
const SCROLL_OFFSET = 1; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class ShadowOnScroll {
  constructor () {
    this.init();
  }

  init () {
    const tableNodes = document.querySelectorAll(TABLE);
    this.tables = [];
    for (var i = 0; i < tableNodes.length; i++) {
      this.tables.push(new Table(tableNodes[i]));
    }

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('orientationchange', this.changing);
    this.change();
  }

  change () {
    for (var i = 0; i < this.tables.length; i++) {
      this.tables[i].change();
    }
  }
}

class Table {
  constructor (table) {
    this.init(table);
  }

  init (table) {
    this.table = table;
    this.tableElem = this.table.querySelector('table');
    this.tableContent = this.tableElem.querySelector('tbody');
    this.isScrollable = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    this.caption = this.tableElem.querySelector('caption');
    this.captionHeight = 0;
    this.wrap();

    const scrolling = this.change.bind(this);
    this.tableElem.addEventListener('scroll', scrolling);
    this.change();
  }

  change () {
    const newScroll = this.tableContent.offsetWidth > this.tableElem.offsetWidth;
    let firstTimeScrollable = this.tableElem.offsetWidth > this.table.offsetWidth;
    if (newScroll || firstTimeScrollable) {
      this.scroll();
      this.handleCaption();
    } else {
      if (newScroll !== this.isScrollable) this.delete();
    }
    this.isScrollable = newScroll;
    firstTimeScrollable = false;
  }

  delete () {
    removeClass(this.table, SHADOW_RIGHT_CLASS);
    removeClass(this.table, SHADOW_LEFT_CLASS);
    removeClass(this.table, SHADOW_CLASS);
    if (this.caption) {
      this.tableElem.style.marginTop = '';
      this.caption.style.top = '';
      this.tableElem.style.marginBottom = '';
      this.caption.style.bottom = '';
    }
  }

  scroll () {
    addClass(this.table, SHADOW_CLASS);
    this.setShadowPosition();
  }

  /* ajoute un wrapper autour du tableau */
  wrap () {
    const wrapperHtml = document.createElement('div');
    wrapperHtml.className = WRAPPER_NAME;
    this.table.insertBefore(wrapperHtml, this.tableElem);
    wrapperHtml.appendChild(this.tableElem);
    this.tableInnerWrapper = wrapperHtml;
  }

  /* affiche les blocs shadow en fonction de la position du scroll, en ajoutant la classe visible */
  setShadowPosition () {
    const tableScrollLeft = this.getScrollPosition(LEFT);
    const tableScrollRight = this.getScrollPosition(RIGHT);

    // on inverse en cas de lecture droite - gauche
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      this.setShadowVisibility(RIGHT, tableScrollLeft);
      this.setShadowVisibility(LEFT, tableScrollRight);
    } else {
      this.setShadowVisibility(LEFT, tableScrollLeft);
      this.setShadowVisibility(RIGHT, tableScrollRight);
    }
  }

  /* Donne le nombre de pixels scrollés honrizontalement dans un element scrollable */
  getScrollPosition (side) {
    let inverter = 1;
    // on inverse en cas de lecture droite - gauche pour que la valeur de scroll soit toujours positive
    if (document.documentElement.getAttribute('dir') === 'rtl') {
      inverter = -1;
    }
    switch (side) {
      case LEFT:
        return this.tableElem.scrollLeft * inverter;
      case RIGHT:
        return this.tableContent.offsetWidth - this.tableElem.offsetWidth - this.tableElem.scrollLeft * inverter;
      default:
        return false;
    }
  }

  /* positionne la caption en top négatif et ajoute un margin-top au wrapper */
  handleCaption () {
    if (this.caption) {
      const style = getComputedStyle(this.caption);
      const newHeight = this.caption.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom);
      this.captionHeight = newHeight;
      if (this.table.classList.contains(TABLE_CAPTION_BOTTOM)) {
        this.tableElem.style.marginBottom = this.captionHeight + 'px';
        this.caption.style.bottom = -this.captionHeight + 'px';
      } else {
        this.tableElem.style.marginTop = this.captionHeight + 'px';
        this.caption.style.top = -this.captionHeight + 'px';
      }
    }
  }

  /* ajoute la classe rf-table--shadow-right ou rf-table--shadow-right sur rf-table
    en fonction d'une valeur de scroll et du sens (right, left) */
  setShadowVisibility (side, scrollPosition) {
    // si on a pas scroll, ou qu'on scroll jusqu'au bout
    if (scrollPosition <= SCROLL_OFFSET) {
      if (side === LEFT) removeClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) removeClass(this.table, SHADOW_RIGHT_CLASS);
    } else {
      if (side === LEFT) addClass(this.table, SHADOW_LEFT_CLASS);
      else if (side === RIGHT) addClass(this.table, SHADOW_RIGHT_CLASS);
    }
  }
}

export {
  ShadowOnScroll
};
