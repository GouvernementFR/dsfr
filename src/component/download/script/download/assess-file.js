import api from '../../api.js';
import { DownloadSelector } from './download-selector';

class AssessFile extends api.core.Instance {
  static get instanceClassName () {
    return 'AssessFile';
  }

  init () {
    this.lang = this.getLang(this.node);
    this.href = this.getAttribute('href');

    this.hreflang = this.getAttribute('hreflang');
    this.file = {};
    this.detail = this.querySelector(DownloadSelector.DOWNLOAD_DETAIL);
    this.update();
  }

  getFileLength () {
    if (this.href === undefined) {
      this.length = -1;
      return;
    }

    fetch(this.href, { method: 'HEAD', mode: 'cors' }).then(response => {
      this.length = response.headers.get('content-length') || -1;
      if (this.length === -1) {
        console.warn('Impossible de détecter le poids du fichier ' + this.href + '\nErreur de récupération de l\'en-tête HTTP : "content-length"');
      }
      this.update();
    });
  }

  update () {
    // TODO V2: implémenter async
    if (this.islLegacy) this.length = -1;

    if (!this.length) {
      this.getFileLength();
      return;
    }

    const details = [];
    if (this.detail) {
      if (this.href) {
        const extension = this.parseExtension(this.href);
        if (extension) details.push(extension.toUpperCase());
      }

      if (this.length !== -1) {
        details.push(this.bytesToSize(this.length));
      }

      if (this.hreflang) {
        const displayNameLang = new Intl.DisplayNames([this.lang], { type: 'language' });
        const langName = displayNameLang.of(this.hreflang);
        const capitalizeLangName = langName.charAt(0).toUpperCase() + langName.slice(1);
        details.push(capitalizeLangName);
      }

      this.detail.innerHTML = details.join(' - ');
    }
  }

  getLang (elem) {
    if (elem.lang) return elem.lang;
    if (document.documentElement === elem) return window.navigator.language;
    return this.getLang(elem.parentElement);
  }

  parseExtension (url) {
    const regexExtension = /\.(\w{1,9})(?:$|[?#])/;
    return url.match(regexExtension)[0].replace('.', '');
  }

  bytesToSize (bytes) {
    if (bytes === -1) return null;

    let sizeUnits = ['octets', 'ko', 'Mo', 'Go', 'To'];
    if (this.getAttribute(api.internals.ns.attr('assess-file')) === 'bytes') {
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
