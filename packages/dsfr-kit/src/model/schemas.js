import { deepFreeze } from '../utility/index.js';

const mergeElement = (element, extension) => {
  const attributes = [ ...(extension?.attributes ?? []), ...(element?.attributes ?? [])].filter((attr, index, self) => self.indexOf(attr) === index);
  const properties = [...(extension?.properties ?? []), ...(element?.properties ?? [])].filter((prop, index, self) => self.indexOf(prop) === index);
  return { attributes, properties };
}

class Schemas {
  constructor() {
    this._schemas = {};
  }

  getSchema (schema) {
    const id = schema.$id;
    if (!this._schemas[id]) {
      const copy = { ...schema };
      if (schema.$ref) {
        const extension = this._schemas[schema.$ref];
        if (!extension) {
          throw new Error(`Schema not found: ${schema.$ref}`);
        }
        copy.props = { ...extension.props, ...copy.props};

        if (copy.element || extension.element) {
          copy.element = mergeElement(extension.element, copy.element);
        }

        if (copy.elements || extension.elements) {
          const keys = [...Object.keys(copy.elements ?? {}), Object.keys(extension.elements ?? {})].filter((key, index, self) => self.indexOf(key) === index);
          if (keys.length > 0) {
            const elements = {};
            keys.forEach(key => {
              elements[key] = mergeElement(extension.elements[key], copy.elements[key]);
            });
            copy.elements = elements;
          }
        }
      }
      this._schemas[id] = deepFreeze(copy);
    }

    return this._schemas[id];
  }
}

const schemas = new Schemas();

export { schemas };
