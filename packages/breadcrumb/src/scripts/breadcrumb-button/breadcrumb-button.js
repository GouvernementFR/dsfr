class BreadcrumbButton {
  constructor () {
    this.init();
  }

  init () {
    this.isShown = false;
    this.button = document.querySelector('.${prefix}-breadcrumb__button');
    this.list = document.querySelector('.${prefix}-breadcrumb__list');

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('orientationchange', this.changing);
    this.change();

    this.clicking = this.click.bind(this);
    this.button.addEventListener('click', this.clicking);
  }

  change () {
    this.isMedium = window.matchMedia('(min-width: 48em)').matches;

    if (this.isShown || this.isMedium) {
      this.button.setAttribute('hidden', '');
      this.list.removeAttribute('hidden');
    } else {
      this.button.removeAttribute('hidden');
      this.list.setAttribute('hidden', '');
    }
  }

  click () {
    this.isShown = true;

    this.breadcrumb = document.querySelector('.${prefix}-breadcrumb');

    let height = this.button.offsetHeight;
    this.breadcrumb.style.maxHeight = 'calc(' + height + 'px + 1rem)';
    this.breadcrumb.style.padding = '0';
    this.breadcrumb.style.border = '.5rem transparent solid';
    this.breadcrumb.style.transition = 'max-height 250ms ease-out';

    this.change();
    window.removeEventListener('resize', this.changing);
    window.removeEventListener('orientationchange', this.changing);

    this.breadcrumb.removeEventListener('click', this.clicking);

    this.transitionning = this.transitionend.bind(this);
    this.breadcrumb.addEventListener('transitionend', this.transitionning);

    height = this.list.offsetHeight;
    this.breadcrumb.style.maxHeight = 'calc(' + height + 'px + 1rem)';
  }

  transitionend () {
    this.breadcrumb.style.maxHeight = null;
    this.breadcrumb.style.transition = null;
    this.breadcrumb.style.padding = null;
    this.breadcrumb.style.border = null;
    this.breadcrumb.removeAttribute('style');
    this.breadcrumb.removeEventListener('transitionend', this.transitionning);
  }
}

export { BreadcrumbButton };
