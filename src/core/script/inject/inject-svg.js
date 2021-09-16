import { Instance } from '../api/register/instance.js';

class InjectSvg extends Instance {
  static get instanceClassName () {
    return 'InjectSvg';
  }

  init () {
    this.isLoading = true;
    this.svg = this.node;
  }

  load () {
    this.injectSvg();
  }

  injectSvg () {
    const node = this.node;

    if (node) {
      const imgID = node.getAttribute('id');
      const imgClass = node.getAttribute('class');
      const imgURL = node.getAttribute('src');

      fetch(imgURL)
        .then(data => data.text())
        .then(response => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/html');
          const svg = xmlDoc.querySelector('svg');

          if (typeof imgID !== 'undefined') {
            svg.setAttribute('id', imgID);
          }

          if (typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass + ' fr-replaced-svg');
          }

          svg.removeAttribute('xmlns:a');

          if (node.parentNode) {
            node.parentNode.replaceChild(svg, node);
          }
        });
    }
  }
}

export { InjectSvg };
