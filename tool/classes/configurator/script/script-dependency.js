class ScriptDependency {
  constructor (part, config) {
    this.part = part;
    this._config = config;
    this._contains = [];
    this._imports = [];
    this._dependencies = [];
    this._hinged = false;
    this.init();
  }

  get dependencies () {
    return this._dependencies;
  }

  get contains () {
    return this._contains;
  }

  get imports () {
    return this._imports;
  }

  get hinged () {
    return this._hinged;
  }

  get level () {
    return this._level;
  }

  init () {
    for (const child of this.part.children) {
      if (child.detached || !child.script.has) continue;
      this._contains.push(child);
      if (child.script._contains) this._contains.push(...child.script._contains);
    }

    for (const child of this.part.children) {
      if (child.detached) continue;
      if (child.script._imports) this._imports.push(...child.script._imports);
    }
    if (this.part.script._has) this._imports.push(this.part);
  }

  analyse () {
    this._provided = this._config ? this._config.dependencies.map(id => this.part.getPart(id)) : [];
  }

  hinge () {
    if (this._hinged) return;
    if (this._contains.some(part => !part.script.hinged)) return;

    const dependencies = [];
    for (const part of this._provided) {
      if (!part.script.hinged) return;
      dependencies.push(part, ...part.script.dependencies);
    }

    for (const part of this._imports) {
      if (!part.script.has || part === this.part) continue;
      if (!part.script._hinged) return;
      dependencies.push(...part.script.dependencies);
    }

    this._dependencies = dependencies.filter((part, index, array) => this._contains.indexOf(part) === -1 && array.indexOf(part) === index).sort((a, b) => a.script.level - b.script.level);

    this._level = this._dependencies.length ? Math.max(...this._dependencies.map(part => part.script.level), ...this._contains.map(part => part.level)) + 1 : 0;

    this._hinged = true;
  }

  order () {
    if (this._imports) this._imports = this._imports.sort((a, b) => a.script.level - b.script.level);
  }
}

module.exports = { ScriptDependency };
