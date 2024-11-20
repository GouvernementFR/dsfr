import { deepFreeze } from '../utility';
import { ModelContext } from './model-context.js';
import { schemas } from './schemas.js';
import ctxAttributes from './attributes.json';

const STATE = {
  CONSTRUCTION: 0,
  INITIALIZATION: 1,
  NORMALIZATION: 2,
  ASSIGNMENT: 3,
  PARSING: 4
};

class Element {
  constructor (classes, attributes, properties, context) {
    this._classes = classes;
    this._attributes = deepFreeze({...attributes});
    this._properties = properties;

    this._classes = deepFreeze(classes);
    this._className = classes.join(' ');

    attributes.class = this._className;

    this._props = {
      ...properties,
      attributes: {}
    };

    Object.entries(attributes).forEach(([key, value]) => {
      const ctxKey = ctxAttributes[key]?.[context] ? ctxAttributes[key][context] : key;
      this._props.attributes[ctxKey] = value;
    });
  }

  get classes () {
    return this._classes;
  }

  get className () {
    return this._className;
  }

  get attributes () {
    return this._attributes;
  }

  get properties () {
    return this._properties;
  }

  get props () {
    return this._props;
  }
}

class Model {
  constructor (props, context = null) {
    this._internals = {
      state: STATE.CONSTRUCTION,
      context: context,
      props: {}
    };
    this.init(props);
    if (this._internals.state < STATE.INITIALIZATION) throw new Error('Model initialization failed. did you forget to call super.init(props)?');
    props = this.normalize(props);
    if (this._internals.state < STATE.NORMALIZATION) throw new Error('Model normalization failed. did you forget to call super.normalize(props)?');
    this.assign(props);
    if (this._internals.state < STATE.ASSIGNMENT) throw new Error('Model assignment failed. did you forget to call super.assign(props)?');
    this.parse();
    if (this._internals.state < STATE.PARSING) throw new Error('Model parsing failed. did you forget to call super.parse(classes, attributes)?');
  }

  get schema () {
    return this.constructor.schema;
  }

  init (props) {
    this._internals.state = STATE.INITIALIZATION;
  }

  normalize (props)  {
    this._internals.state = STATE.NORMALIZATION;
    const normalisedProps = {};
    let warning = '';
    const schemaProps = this.schema.props;
    const required = this.schema.required || [];
    Object.entries(schemaProps).forEach(([key, spec]) => {
      const value = props[key];
      let isDefined = true;
      const isRequired = required.includes(key);

      if (value === undefined) {
        isDefined = false;
        if (isRequired) warning += `- property ${key} is required while not defined\n`;
      }

      if (isDefined) {
        const type = typeof value;
        switch (spec.type) {
          case 'string':
            switch (type) {
              case 'string':
                normalisedProps[key] = value;
                break;
              case 'number':
                normalisedProps[key] = String(value);
                break;
              case 'boolean':
                normalisedProps[key] = value ? 'true' : 'false';
                break;
              default:
                isDefined = false;
            }
            break;

          case 'number':
            switch (type) {
              case 'string':
                normalisedProps[key] = value.indexOf('.') ? parseFloat(value) : parseInt(value);
                break;
              case 'number':
                normalisedProps[key] = value;
                break;
              default:
                isDefined = false;
            }
            break;

          case 'array':
            switch (true) {
              case type === 'string':
                normalisedProps[key] = value.split(',');
                break;
              case type === 'number':
                normalisedProps[key] = [value];
                break;
              case type === 'boolean':
                normalisedProps[key] = value ? [true] : [false];
                break;
              case type === 'object' && Array.isArray(value):
                normalisedProps[key] = value;
                break;
              case type === 'object':
                normalisedProps[key] = value.reduce((acc, [k, v]) => {  acc[parseInt(k)] = v; return acc; }, {});
                break;
              default:
                isDefined = false;
            }
            break;
          case 'object':
            switch (type) {
              case 'string':
                try {
                  normalisedProps[key] = JSON.parse(value);
                } catch (e) {
                  isDefined = false;
                }
                break;
              case 'object':
                normalisedProps[key] = value;
                break;
              default:
                isDefined = false;
            }
            break;
          case 'boolean':
            switch (type) {
              case 'string':
                normalisedProps[key] = value === 'true';
                break;
              case 'number':
                normalisedProps[key] = value !== 0;
                break;
              case 'boolean':
                normalisedProps[key] = value;
                break;
              default:

                isDefined = false;
            }
            break;
        }
        if (!isDefined) {
          warning += `- Property '${key}' is not of type '${spec.type}'\n`;
          if (isRequired) warning += `- Property '${key}' is required\n`;
        }
      }

      if (value !== undefined && spec.enum) {
        if (spec.enum.includes(value)) normalisedProps[key] = value;
        else {
          warning += `- Property ${key} is not in enum\n`;
          isDefined = false;
        }
      }

      if (spec.default !== undefined && !isDefined) {
        normalisedProps[key] = spec.default;
        warning += `- set property '${key}' to default value\n`;
      }
    });
    if (warning !== '') console.warn(`model '${this.constructor.name}' normalization:\n${warning}`);
    Object.freeze(normalisedProps);
    return normalisedProps;
  }

  assign (props, getters = {}) {
    const properties = {}
    Object.entries(getters).forEach(([key, value]) => {
      properties[key] = {
        value: value,
        writable: false
      };
    });
    Object.defineProperties(this, properties);
    this._internals.state = STATE.ASSIGNMENT;
  }

  parse (classes = [], attributes = {}, properties = {}, ...elementsArgs) {
    const element = new Element(classes, attributes, properties, this._internals.context, this.schema.element);
    this._internals.element = element;

    const length = ((elementsArgs.length + 2) / 3) | 0;
    const elementsProps = {};
    if (length > 0) {
      const elements = {};
      Object.entries(this.schema.elements).forEach(([key, elementSchema], index) => {
        const args = elementsArgs.slice(index * 3, index * 3 + 3).push(this._internals.context, elementSchema);
        const el = new Element(...args);
        elements[key] = el;
        elementsProps[key] = el.props;
      });
    }

    this._internals.props = deepFreeze({
      ...element.props,
      ...elementsProps
    });

    this._internals.state = STATE.PARSING;
  }

  get classes () {
    return this._internals.element.classes;
  }

  get className () {
    return this._internals.element.className;
  }

  get attributes () {
    return this._internals.element.attributes;
  }

  get elements () {
    return this._internals.elements;
  }

  get props () {
    return this._internals.props;
  }

  static get schema () {
    return Model._schema;
  }

  static registerSchema (schema) {
    Model._schema = schemas.getSchema(schema);
  }
}

Model.Context = ModelContext;

export { Model };
