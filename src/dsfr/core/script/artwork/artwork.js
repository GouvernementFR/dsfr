import { Instance } from '../api/modules/register/instance.js';
import { sanitizeSvg, isSameOrigin } from '../api/utilities/sanitize-svg';

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

    if (!isSameOrigin(this.svgUrl)) return;

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
      this.realSvgContent = xmlDoc.getElementById(this.svgName);
      if (this.realSvgContent) {
        sanitizeSvg(this.realSvgContent);
        if (this.realSvgContent.tagName === 'symbol') {
          const expectedHref = `#${this.svgName}`;
          const uses = xmlDoc.getElementsByTagName('use');
          this.use = null;
          for (let i = 0; i < uses.length; i++) {
            const use = uses[i];
            const href = use.getAttribute('href') || use.getAttribute('xlink:href');
            if (href === expectedHref) {
              this.use = use;
              break;
            }
          }
          if (this.use) {
            sanitizeSvg(this.use);
            this.node.parentNode.insertBefore(this.use, this.node);
          }
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
