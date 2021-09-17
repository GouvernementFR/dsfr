import { Instance } from '../api/register/instance.js';

class InjectSvg extends Instance {
  static get instanceClassName () {
    return 'InjectSvg';
  }

  init () {
    if (this.node) {
      this.img = this.node.querySelector('img');
    }

    this.fetch();
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

          this.replace();
        });
    }
  }

  replace () {
    if (typeof this.imgID !== 'undefined') {
      this.svg.setAttribute('id', this.imgID);
    }

    if (typeof this.imgClass !== 'undefined') {
      this.svg.setAttribute('class', this.imgClass + ' fr-replaced-svg');
    }

    if (this.svg.hasAttribute('xmlns:a')) {
      this.svg.removeAttribute('xmlns:a');
    }

    this.node.replaceChild(this.svg, this.img);
  }

  restore () {
    if (this.img && this.svg) {
      this.node.replaceChild(this.img, this.svg);
    }
  }
}

export { InjectSvg };
