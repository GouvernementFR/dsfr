import api from '../../api.js';
import { DownloadSelector } from './download-selector';

class AssessFile extends api.core.Instance {
  static get instanceClassName () {
    return 'AssessFile';
  }

  async init () {
    this.lang = this.getLang(this.node).substring(0, 2).toLowerCase();
    this.href = this.getAttribute('href');

    this.hreflang = this.getAttribute('hreflang');
    this.file = {};
    this.detail = this.querySelector(DownloadSelector.DOWNLOAD_DETAIL);
    this.update();
  }

  async getFileLength () {
    if (this.href === undefined) return null;
    const response = await fetch(this.href, { method: 'HEAD', mode: 'cors' });
    const length = response.headers.get('content-length');
    if (!length) {
      console.warn('Impossible de détecter le poids du fichier ' + this.href + '\nErreur de récupération de l\'en-tête HTTP : "content-length"');
      return null;
    }

    return this.bytesToSize(length);
  }

  async update () {
    const length = await this.getFileLength();

    if (this.href) {
      const extension = this.parseExtension(this.href);
      if (extension) this.detail.innerHTML = extension.toUpperCase();
    }

    this.detail.innerHTML += ' – ' + length;

    if (this.hreflang) {
      const displayNameLang = new Intl.DisplayNames([this.lang], { type: 'language' });
      const langName = displayNameLang.of(this.hreflang);
      const capitalizeLangName = langName.charAt(0).toUpperCase() + langName.slice(1);
      this.detail.innerHTML += ' – ' + capitalizeLangName;
    }
  }

  getLang (elem) {
    if (elem.lang) return elem.lang;
    if (document.documentElement === elem) return window.navigator.browserLanguage;
    return this.getLang(elem.parentElement);
  }

  parseExtension (url) {
    const regexExtension = /\.\w{3,4}($|\?)/;
    return url.match(regexExtension)[0].replace('.', '');
  }

  bytesToSize (bytes) {
    if (bytes === 0) return 'n/a';

    let sizeUnits = ['octets', 'ko', 'Mo', 'Go', 'To'];
    if (this.lang !== 'fr') {
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
