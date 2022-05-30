import { Instance } from '../api/modules/register/instance.js';
import { setAttributes } from '../api/utilities/attribute';

class InjectSvg extends Instance {
  static get instanceClassName () {
    return 'InjectSvg';
  }

  init () {
    if (this.node) {
      this.img = this.node.querySelector('img');
    }

    if (!this.isLegacy) {
      this.replace();
    }
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      replace: scope.replace.bind(scope),
      restore: scope.restore.bind(scope)
    });
  }

  fetch () {
    if (this.img) {
      this.imgID = this.img.getAttribute('id');
      this.imgClass = this.img.getAttribute('class');
      this.imgURL = this.img.getAttribute('src');

      fetch(this.imgURL)
        .then(data => data.text())
        .then(response => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/html');
          this.svg = xmlDoc.querySelector('svg');

          if (this.svg) {
            this.replace();
          }
        });
    }
  }

  replace () {
    if (!this.svg) {
      this.fetch();
      return;
    }

    if (this.imgID && typeof this.imgID !== 'undefined') {
      this.svg.setAttribute('id', this.imgID);
    }

    // gestion de la dépréciation
    let name = this.imgURL.match(/[ \w-]+\./)[0];
    if (name) {
      name = name.slice(0, -1);

      if (['dark', 'light', 'system'].includes(name)) {
        this.svg.innerHTML = this.svg.innerHTML.replaceAll('id="artwork-', `id="${name}-artwork-`);
        this.svg.innerHTML = this.svg.innerHTML.replaceAll('"#artwork-', `"#${name}-artwork-`);
      }
    }

    if (this.imgClass && typeof this.imgClass !== 'undefined') {
      this.svg.setAttribute('class', this.imgClass);
    }

    if (this.svg.hasAttribute('xmlns:a')) {
      this.svg.removeAttribute('xmlns:a');
    }

    this.node.setAttribute('data-fr-inject-svg', true);
    const svgAttributes = {
      'aria-hidden': true,
      focusable: false
    };
    setAttributes(this.svg, svgAttributes);
    this.node.replaceChild(this.svg, this.img);
  }

  restore () {
    if (this.img && this.svg) {
      this.node.setAttribute('data-fr-inject-svg', false);
      this.node.replaceChild(this.img, this.svg);
    }
  }
}

export { InjectSvg };
