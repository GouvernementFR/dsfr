class Readme {
  constructor (id, i18n) {
    this.id = id;
    this.i18n = i18n;
    this.head = `# ${id}`;
  }

  describe (description) {
    this.description = `\n\n${description}`;
  }

  depends (id) {
    if (this.dependencies === undefined) {
      this.dependencies = `\n\n## ${this.i18n.getText('readme.dependencies.title')}\n\`\`\`shell\n`;
      this.dependencies += `${this.id}\n`;
    }
    this.dependencies += `└─ ${id}\n`;
  }

  _initUse () {
    this.usage = `\n\n## ${this.i18n.getText('readme.use.title')}\n`;
    this.usage += `${this.i18n.getText('readme.use.description').replace('${id}', this.id)}\n`;
    this.usage += '```html\n<html>\n  <head>\n';
    this.styles = '';
    this.scripts = '';
  }

  useStyle (id) {
    if (this.usage === undefined) this._initUse();
    this.styles += `    <link href="css/${id}/${id}.min.css" rel="stylesheet">\n`;
  }

  useScript (id, packages) {
    if (this.usage === undefined) this._initUse();
    const p = packages.filter(i => i.id === id)[0];
    if (p.module) this.scripts += `    <script type="module" href="js/${id}/${id}.module.min.js" ></script>\n`;
    if (p.nomodule) this.scripts += `    <script type="text/javascript" nomodule href="js/${id}/${id}.nomodule.min.js" ></script>\n`;
  }

  document (title, url) {
    if (this.documentation === undefined) {
      this.documentation = `\n\n## ${this.i18n.getText('readme.doc.title')}`;
    }
    this.documentation += `\n\n${this.i18n.getText('readme.doc.item').replace('${url}', url).replace('${title}', title)}`;
  }

  publish () {
    let content = this.head;
    content += this.description || '';
    if (this.dependencies) content += this.dependencies + '```';
    if (this.usage) {
      content += this.usage;
      content += this.styles;
      content += '  </head>\n  <body>\n';
      content += this.scripts;
      content += '  </body>\n</html>\n```';
    }
    content += this.documentation || '';
    return content;
  }
}

module.exports = { Readme };
