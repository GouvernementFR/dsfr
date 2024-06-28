import { Instance } from '../api/modules/register/instance.js';

class Artwork extends Instance {
  static get instanceClassName () {
    return 'Artwork';
  }

  init () {
    if (this.isLegacy) {
      this.replace();
    }
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      replace: scope.replace.bind(scope)
    });
  }

  fetch () {
    this.xlink = this.node.getAttribute('href');
    const splitUrl = this.xlink.split('#');
    this.svgUrl = splitUrl[0];
    this.svgName = splitUrl[1];

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
      this.realSvgContent = xmlDoc.getElementById(this.svgName);
      if (this.realSvgContent) {
        if (this.realSvgContent.tagName === 'symbol') {
          this.use = xmlDoc.querySelector('use[href="#' + this.svgName + '"]');
          if (this.use) this.node.parentNode.insertBefore(this.use, this.node);
        } else {
          // deprecated svg structure
          this.realSvgContent.classList.add(this.node.classList);
        }

        this.replace();
      }
    };
    xhr.open('GET', this.svgUrl);
    xhr.send();
  }

  replace () {
    if (!this.realSvgContent) {
      this.fetch();
      return;
    }

    this.node.parentNode.replaceChild(this.realSvgContent, this.node);
  }
}

export { Artwork };
