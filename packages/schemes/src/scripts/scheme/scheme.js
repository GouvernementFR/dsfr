class Scheme {
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
      if (!this.root.hasAttribute(Scheme.TRANSITION_ATTRIBUTE)) {
        this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'dark');
      } else {
        this.root.removeAttribute(Scheme.TRANSITION_ATTRIBUTE);
        this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'dark');

        setTimeout(() => {
          this.root.setAttribute(Scheme.TRANSITION_ATTRIBUTE, '');
        }, 300);
      }
    } else this.root.setAttribute(Scheme.SCHEME_ATTRIBUTE, 'light');

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(this.root, { attributes: true });
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === Scheme.SCHEME_ATTRIBUTE) {
        const scheme = this.root.getAttribute(Scheme.SCHEME_ATTRIBUTE);
        if (scheme === 'dark') {
          localStorage.setItem('scheme', 'dark');
        } else if (scheme === 'light') {
          localStorage.setItem('scheme', 'light');
        }
      }
    });
  }
}

Scheme.SCHEME_ATTRIBUTE = 'data-${prefix}-theme';
Scheme.TRANSITION_ATTRIBUTE = 'data-${prefix}-transition';

export { Scheme };
