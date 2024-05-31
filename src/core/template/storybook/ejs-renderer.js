import pck from '../../../../package.json';
import includes from './includes.js?raw';
import decorator from '../../../../tool/example/decorator.ejs?raw';
import i18n from '../../../../.config/i18n.json';
import ejs from 'ejs4b/ejs';

const core = `
locals.prefix = '${pck.config.prefix}';
locals.namespace = '${pck.config.namespace}';
locals.organisation = '${pck.config.organisation}';

${includes}

${decorator.replace("<% eval(include(root + 'src/core/index.ejs')); %>", '').replace('<%- include(entry); %>', '').replace('<%', '').replace('%>', '')}

locals.getText = getI18nText;
`;

console.log('core', core);

class Template {
  constructor (names, template) {
    this._names = names;
    this._template = template.replace(/eval\(include\('(..\/)*(core\/)?index.ejs'\)\);/, core);
  }

  get names () {
    return this._names;
  }

  retrieve (path) {
    return this._names.some(name => path.match(new RegExp(`${name}(.ejs)?$`)) !== null);
  }

  render (data) {
    console.log('render', data);
    return ejs.render(this._template, data);
  }
}

class EJSRenderer {
  constructor () {
    this._templates = [];
    this._count = 0;
  }

  uniqueId (element) {
    return `${element}-${this._count++}`;
  }

  add (names, template) {
    const tpl = new Template(names, template);
    this._templates.push(tpl);
  }

  render (path, data) {
    const template = this._templates.find(tpl => tpl.retrieve(path));
    if (!template) return '';
    data.include = (path, data) => this.render(path, data);
    data.uniqueId = this.uniqueId.bind(this);
    data.getI18nText = (key, id = 'global') => this.getI18nText(key, id);
    data.locale = 'fr';
    return template.render(data);
  }

  getI18nText (key, id = 'global') {
    const base = i18n[id].fr;
    const keys = key.split('.');
    const text = keys.reduce((acc, key) => acc[key], base);
    if (text) return text;
    return key;
  }
}

export { EJSRenderer };
