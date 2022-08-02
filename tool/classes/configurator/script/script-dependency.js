const log = require('../../../utilities/log');

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

  }

  analyse () {
    for (const child of this.part.children) {
      if (child.detached || !child.script.has) continue;
      this._contains.push(child);
      if (child.script.contains) this._contains.push(...child.script.contains);
    }

    for (const child of this.part.children) {
      if (child.detached || !child.script.has) continue;
      if (child.script.imports) this._imports.push(...child.script.imports);
    }
    if (this.part.script._has) this._imports.push(this.part);

    this._provided = [];
    if (this._config) {
      this._config.forEach(id => {
        const part = this.part.getPart(id);
        switch (true) {
          case !part:
            log.error(`${this.part.id} : provided script dependency '${id}' doesn't exist`);
            break;

          case !part.script.has:
            log.error(`${this.part.id} : provided script dependency '${id}' doesn't have script - thus, it will be removed`);
            break;

          default:
            this._provided.push(part);
        }
      });
    }
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
      if (part === this.part) continue;
      if (!part.script.hinged) return;
      dependencies.push(...part.script.dependencies);
    }

    const carriers = [];
    for (const part of dependencies) {
      for (const ascendant of part.ascendants) {
        if (this.part === ascendant || ascendant.script.contains.includes(this.part)) continue;
        if (carriers.includes(ascendant)) continue;
        if (!ascendant.script.hinged) return;
        carriers.push(ascendant);
      }
    }

    this._dependencies = dependencies.filter((part, index, array) => this._contains.indexOf(part) === -1 && array.indexOf(part) === index).sort((a, b) => a.script.level - b.script.level);

    const levels = [
      ...this._dependencies.map(part => part.script.level),
      ...this._contains.map(part => part.script.level),
      ...carriers.map(part => part.script.level)
    ];

    this._level = levels.length ? Math.max(...levels) + 1 : 0;

    this._hinged = true;
  }

  order () {
    if (this._imports) this._imports = this._imports.sort((a, b) => a.script.level - b.script.level);
  }
}

module.exports = { ScriptDependency };
