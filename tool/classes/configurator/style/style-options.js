const fs = require('fs');
const { createFile } = require('../../../utilities/file');
const { SRC } = require('../src');
const exporter = require('sass-export').exporter;

const formatMap = (structure, level = 0) => {
  const space = '  '.repeat(level);
  if (!structure.name) {
    return null;
  } else if (structure.mapValue !== undefined) {
    return `${space}${structure.name}: (\n${structure.mapValue.map(struct => formatMap(struct, level + 1)).join(',\n')}\n${space})`;
  } else if (structure.value !== undefined) {
    return `${space}${structure.name}: ${structure.value}`;
  }
  return null;
};

const parse = (object) => {
  const data = [];
  for (const prop in object) {
    const props = { name: prop };
    const value = object[prop];
    switch (true) {
      case value === null:
        break;

      case Array.isArray(value):
        props.value = value.join(' ');
        data.push(props);
        break;

      case typeof value === 'object':
        props.mapValue = parse(value);
        data.push(props);
        break;

      case typeof value === 'boolean':
      case typeof value === 'string':
      case typeof value === 'number':
        props.value = value;
        data.push(props);
        break;
    }
  }

  return data;
};

class StyleOptions {
  constructor (part, config) {
    this.part = part;
    this._config = config;
  }

  get has () {
    return this.mapValue.length > 0;
  }

  gather (excludes = [], data = []) {
    if (this.part.style.collector.has) {
      const mapValue = [...parse({ include: !excludes.includes(this.part.id) }), ...this.mapValue];

      data.push({
        name: this.part.id,
        mapValue: mapValue
      });
    }

    for (const part of this.part.children) {
      if (!part.detached && part.style && part.style.has) {
        part.style.gather(excludes, data);
      }
    }
    return data;
  }

  analyse () {
    this.mapValue = [];

    this.load();

    if (this._config) {
      this.asset();
      this.insert();
    }
  }

  load () {
    const path = this._config && this._config.id ? this.part.getPart(this._config.id).path : this.part.path;
    const file = `${SRC}${path}_content/style/_options.scss`;

    if (fs.existsSync(file)) {
      const options = {
        inputFiles: [file]
      };

      const content = exporter(options).getStructured();
      this.mapValue.push(...content.variables[0].mapValue);
    }
  }

  insert () {
    if (this._config.insert) {
      const insert = parse(this._config.insert);
      this.mapValue.push(...insert);
    }
  }

  asset () {
    if (this._config.asset && this.part.asset.has) {
      const data = {};
      const asset = this._config.asset;
      data.name = asset.property;
      const items = this.part.asset.items.filter(item => asset.type === undefined || item.type === asset.type).map(item => item.name);

      data.value = items.join(' ');
      this.mapValue.push(data);
    }
  }

  generate () {
    const excludes = this._config && this._config.excludes ? this._config.excludes : [];
    const data = this.gather(excludes);
    data.unshift({ name: 'depth', value: this.part.depth });

    const content = `${formatMap({ name: '$options', mapValue: data })};\n`;

    const path = `${SRC}${this.part.path}options.scss`;

    createFile(path, content);
  }
}

module.exports = { StyleOptions };
