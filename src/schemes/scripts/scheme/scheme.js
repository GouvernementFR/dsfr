import { SCHEME_ATTR, TRANSITION_ATTR } from './constants';

/**
 * TODO: implémenter la valeur system
 * window.matchMedia("(prefers-color-scheme: dark)").addListener(
 e => e.matches && activateDarkMode()) // listener
 );
 */

class Scheme {
  constructor () {
    this.init();
  }

  init () {
    this.root = document.documentElement;

    this.scheme = localStorage.getItem('scheme')
      ? localStorage.getItem('scheme')
      : null;

    if (this.scheme === null) {
      const scheme = this.root.getAttribute(SCHEME_ATTR);
      if (scheme === 'dark' || scheme === 'light') {
        this.scheme = scheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.scheme = 'dark';
        localStorage.setItem('scheme', 'dark');
      } else this.scheme = 'light';
    }

    if (this.scheme === 'dark') {
      if (!this.root.hasAttribute(TRANSITION_ATTR)) {
        this.root.setAttribute(SCHEME_ATTR, 'dark');
      } else {
        this.root.removeAttribute(TRANSITION_ATTR);
        this.root.setAttribute(SCHEME_ATTR, 'dark');

        setTimeout(() => {
          this.root.setAttribute(TRANSITION_ATTR, '');
        }, 300);
      }
    } else this.root.setAttribute(SCHEME_ATTR, 'light');

    this.observer = new MutationObserver(this.mutate.bind(this));
    this.observer.observe(this.root, { attributes: true });
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === SCHEME_ATTR) {
        const scheme = this.root.getAttribute(SCHEME_ATTR);
        if (scheme === 'dark') {
          localStorage.setItem('scheme', 'dark');
        } else if (scheme === 'light') {
          localStorage.setItem('scheme', 'light');
        }
      }
    });
  }
}

export { Scheme };
