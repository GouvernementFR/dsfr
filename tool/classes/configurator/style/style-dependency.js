const log = require('../../../utilities/log');

class StyleDependency {
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

  }

  analyse () {
    for (const child of this.part.children) {
      if (child.detached || !child.style.has) continue;
      this._contains.push(child);
      if (child.style.contains) this._contains.push(...child.style.contains);
    }

    for (const child of this.part.children) {
      if (!child.detached && child.style.has) this._imports.push(child);
    }

    this._provided = [];
    if (this._config) {
      this._config.forEach(id => {
        const part = this.part.getPart(id);
        switch (true) {
          case !part:
            log.error(`${this.part.id} : provided style dependency '${id}' doesn't exist`);
            break;

          case !part.style.has:
            log.error(`${this.part.id} : provided style dependency '${id}' doesn't have style - thus, it will be removed`);
            break;

          default:
            this._provided.push(part);
        }
      });
    }
  }

  hinge () {
    if (this._hinged) return;
    if (this._contains.some(part => !part.style.hinged)) return;

    const dependencies = [];
    for (const part of this._provided) {
      if (!part.style.hinged) return;
      dependencies.push(part, ...part.style.dependencies);
    }

    for (const part of this._imports) {
      if (part === this.part) continue;
      if (!part.style.hinged) return;
      dependencies.push(...part.style.dependencies);
    }

    const carriers = [];
    for (const part of dependencies) {
      for (const ascendant of part.ascendants) {
        if (this.part === ascendant || ascendant.style.contains.includes(this.part)) continue;
        if (carriers.includes(ascendant)) continue;
        if (!ascendant.style.hinged) return;
        carriers.push(ascendant);
      }
    }

    this._dependencies = dependencies.filter((part, index, array) => this._contains.indexOf(part) === -1 && array.indexOf(part) === index).sort((a, b) => a.style.level - b.style.level);

    const levels = [
      ...this._dependencies.map(part => part.style.level),
      ...this._contains.map(part => part.style.level),
      ...carriers.map(part => part.style.level)
    ];

    this._level = levels.length ? Math.max(...levels) + 1 : 0;

    this._hinged = true;
  }

  order () {
    if (this._imports) this._imports = this._imports.sort((a, b) => a.style.level - b.style.level);
  }
}

module.exports = { StyleDependency };
