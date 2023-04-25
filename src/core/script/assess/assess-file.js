import ns from '../api/utilities/namespace.js';
import { Instance } from '../api/modules/register/instance.js';
import { AssessEmission } from './assess-emission';
import inspector from '../api/inspect/inspector.js';

class AssessFile extends Instance {
  static get instanceClassName () {
    return 'AssessFile';
  }

  init () {
    this.lang = this.getLang(this.node);
    this.href = this.getAttribute('href');
    this.hreflang = this.getAttribute('hreflang');
    this.file = {};
    this.gather();
    this.addAscent(AssessEmission.ADDED, this.update.bind(this));
    this.addDescent(AssessEmission.ADDED, this.update.bind(this));
  }

  getFileLength () {
    if (this.href === undefined) {
      this.length = -1;
      return;
    }

    fetch(this.href, { method: 'HEAD', mode: 'cors' }).then(response => {
      this.length = response.headers.get('content-length') || -1;
      if (this.length === -1) {
        inspector.warn('File size unknown: ' + this.href + '\nUnable to get HTTP header: "content-length"');
      }
      this.gather();
    });
  }

  mutate (attributeNames) {
    if (attributeNames.indexOf('href') !== -1) {
      this.href = this.getAttribute('href');
      this.getFileLength();
    }

    if (attributeNames.indexOf('hreflang') !== -1) {
      this.hreflang = this.getAttribute('hreflang');
      this.gather();
    }
  }

  gather () {
    // TODO V2: implémenter async
    if (this.isLegacy) this.length = -1;

    if (!this.length) {
      this.getFileLength();
      return;
    }

    this.details = [];

    if (this.href) {
      const extension = this.parseExtension(this.href);
      if (extension) this.details.push(extension.toUpperCase());
    }

    if (this.length !== -1) {
      this.details.push(this.bytesToSize(this.length));
    }

    if (this.hreflang) {
      this.details.push(this.getLangDisplayName(this.hreflang));
    }

    this.update();
  }

  update () {
    if (!this.details) return;
    this.descend(AssessEmission.UPDATE, this.details);
    this.ascend(AssessEmission.UPDATE, this.details);
  }

  getLang (elem) {
    // todo: ajouter un listener global de changement de langue
    if (elem.lang) return elem.lang;
    if (document.documentElement === elem) return window.navigator.language;
    return this.getLang(elem.parentElement);
  }

  parseExtension (url) {
    const regexExtension = /\.(\w{1,9})(?:$|[?#])/;
    return url.match(regexExtension)[0].replace('.', '');
  }

  getLangDisplayName (locale) {
    if (this.isLegacy) return locale;
    const displayNames = new Intl.DisplayNames([this.lang], { type: 'language' });
    const name = displayNames.of(locale);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  bytesToSize (bytes) {
    if (bytes === -1) return null;

    let sizeUnits = ['octets', 'ko', 'Mo', 'Go', 'To'];
    if (this.getAttribute(ns.attr('assess-file')) === 'bytes') {
      sizeUnits = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);
    if (i === 0) return `${bytes} ${sizeUnits[i]}`;

    const size = bytes / (1000 ** i);
    const roundedSize = Math.round((size + Number.EPSILON) * 100) / 100; // arrondi a 2 décimal
    const stringSize = String(roundedSize).replace('.', ',');

    return `${stringSize} ${sizeUnits[i]}`;
  }
}

export { AssessFile };
