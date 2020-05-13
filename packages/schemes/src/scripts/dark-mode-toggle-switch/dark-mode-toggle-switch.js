const DM = '${prefix}-dark-mode';
const DTA = 'data-theme';

class DarkModeToggleSwitch {
  constructor () {
    this.init();
  }

  init () {
    this.scheme = localStorage.getItem('scheme')
      ? localStorage.getItem('scheme')
      : null;

    if (this.scheme === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.scheme = 'dark';
        localStorage.setItem('scheme', 'dark');
      } else this.scheme = 'light';
    }

    this.root = document.documentElement;

    if (this.scheme === 'dark') {
      if (!this.root.hasAttribute('data-transition')) this.root.setAttribute(DTA, 'dark');
      else {
        this.root.removeAttribute('data-transition');
        this.root.setAttribute(DTA, 'dark');

        setTimeout(() => {
          this.root.setAttribute('data-transition', '');
        }, 300);
      }
    }

    this.checkbox = document.getElementById(DM + '-toggle-switch');

    if (this.scheme === 'dark') this.checkbox.checked = true;

    this.checkbox.addEventListener('change', this.change.bind(this));
  }

  change () {
    if (this.checkbox.checked) {
      this.scheme = 'dark';
      localStorage.setItem('scheme', 'dark');
      this.root.setAttribute(DTA, 'dark');
    } else {
      this.scheme = 'light';
      localStorage.setItem('scheme', 'light');
      this.root.removeAttribute(DTA);
    }
  }
}

export { DarkModeToggleSwitch };
