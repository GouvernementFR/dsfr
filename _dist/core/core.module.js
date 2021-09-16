/*! DSFR v1.1.0 | SPDX-License-Identifier: MIT | License-Filename: LICENCE.md | restricted use (see terms and conditions) */

class State {
  constructor () {
    this.modules = {};
  }

  create (ModuleClass) {
    const module = new ModuleClass();
    this.modules[module.type] = module;
  }

  getModule (type) {
    return this.modules[type];
  }

  add (type, item) {
    this.modules[type].add(item);
  }

  remove (type, item) {
    this.modules[type].remove(item);
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (value === this._isActive) return;
    this._isActive = value;
    if (value) {
      for (const module of Object.values(this.modules)) {
        module.activate();
      }
    } else {
      for (const module of Object.values(this.modules)) {
        module.deactivate();
      }
    }
  }
}

const state = new State();

const config = {
  prefix: 'fr',
  namespace: 'dsfr',
  organisation: '@gouvfr',
  version: '1.1.0'
};

class LogLevel {
  constructor (level, light, dark, logger) {
    this.level = level;
    this.light = light;
    this.dark = dark;

    switch (logger) {
      case 'warn':
        this.logger = console.warn;
        break;

      case 'error':
        this.logger = console.error;
        break;

      default:
        this.logger = console.log;
    }
  }

  log (...values) {
    const message = new Message(config.namespace);
    for (const value of values) message.add(value);
    this.print(message);
  }

  print (message) {
    message.setColor(this.color);
    this.logger.apply(console, message.getMessage());
  }

  get color () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? this.dark : this.light;
  }
}

class Message {
  constructor (domain) {
    this.inputs = ['%c'];
    this.styles = ['font-family:Marianne', 'line-height: 1.5'];
    this.objects = [];

    if (domain) this.add(`${domain} :`);
  }

  add (value) {
    switch (typeof value) {
      case 'object':
      case 'function':
        this.inputs.push('%o ');
        this.objects.push(value);
        break;

      default:
        this.inputs.push(`${value} `);
    }
  }

  setColor (color) {
    this.styles.push(`color:${color}`);
  }

  getMessage () {
    return [this.inputs.join(''), this.styles.join(';'), ...this.objects];
  }
}

const LEVELS = {
  trace: new LogLevel(0, '#616161', '#989898'),
  debug: new LogLevel(1, '#000091', '#8B8BFF'),
  info: new LogLevel(2, '#007c3b', '#00ed70'),
  warn: new LogLevel(3, '#ba4500', '#fa5c00', 'warn'),
  error: new LogLevel(4, '#D80600', '#FF4641', 'error')
};

class Inspector {
  constructor () {
    this.level = 2;

    for (const id in LEVELS) {
      const level = LEVELS[id];
      this[id] = (...msgs) => {
        if (this.level <= level.level) level.log.apply(level, msgs);
      };
      this[id].print = level.print.bind(level);
    }
  }

  state () {
    const message = new Message();
    message.add(state);
    this.trace.print(message);
  }

  tree () {
    const stage = state.getModule('stage');
    if (!stage) return;
    const message = new Message();
    this._branch(stage.root, 0, message);
    this.trace.print(message);
  }

  _branch (element, space, message) {
    let branch = '';
    if (space > 0) {
      let indent = '';
      for (let i = 0; i < space; i++) indent += '    ';
      // branch += indent + '|\n';
      branch += indent + '└─ ';
    }
    branch += `[${element.id}] ${element.html}`;
    message.add(branch);
    message.add({ '@': element });
    message.add('\n');
    for (const child of element.children) branch += this._branch(child, space + 1, message);
  }
}

const inspector = new Inspector();

const startAtDomContentLoaded = (callback) => {
  if (document.readyState !== 'loading') window.requestAnimationFrame(callback);
  else document.addEventListener('DOMContentLoaded', callback);
};

const startAuto = (callback) => {
  // detect
  startAtDomContentLoaded(callback);
};

const Modes = {
  AUTO: 'auto',
  MANUAL: 'manual',
  RUNTIME: 'runtime',
  LOADED: 'loaded',
  VUE: 'vue',
  ANGULAR: 'angular',
  REACT: 'react'
};

class Options {
  constructor () {
    this._mode = Modes.AUTO;
    this.isStarted = false;
    this.starting = this.start.bind(this);
    this.preventManipulation = false;
  }

  configure (settings, start) {
    this.startCallback = start;
    if (settings.verbose === true) inspector.level = 0;
    this.mode = settings.mode || Modes.AUTO;
  }

  set mode (value) {
    switch (value) {
      case Modes.AUTO:
        this.preventManipulation = false;
        startAuto(this.starting);
        break;

      case Modes.LOADED:
        this.preventManipulation = false;
        startAtDomContentLoaded(this.starting);
        break;

      case Modes.RUNTIME:
        this.preventManipulation = false;
        this.start();
        break;

      case Modes.MANUAL:
        this.preventManipulation = false;
        break;

      case Modes.VUE:
        this.preventManipulation = true;
        break;

      case Modes.ANGULAR:
        this.preventManipulation = true;
        break;

      case Modes.REACT:
        this.preventManipulation = true;
        break;

      default:
        inspector.error('Illegal mode');
        return;
    }

    this._mode = value;
    inspector.info(`mode set to ${value}`);
  }

  get mode () {
    return this._mode;
  }

  start () {
    inspector.info('start');
    this.startCallback();
  }
}

const options = new Options();

class Collection {
  constructor () {
    this._collection = [];
  }

  forEach (callback) {
    this._collection.forEach(callback);
  }

  map (callback) {
    return this._collection.map(callback);
  }

  get length () {
    return this._collection.length;
  }

  add (collectable) {
    if (this._collection.indexOf(collectable) > -1) return false;
    this._collection.push(collectable);
    if (this.onAdd) this.onAdd();
    if (this.onPopulate && this._collection.length === 1) this.onPopulate();
    return true;
  }

  remove (collectable) {
    const index = this._collection.indexOf(collectable);
    if (index === -1) return false;
    this._collection.splice(index, 1);
    if (this.onRemove) this.onRemove();
    if (this.onEmpty && this._collection.length === 0) this.onEmpty();
  }

  execute (...args) {
    for (const collectable of this._collection) if (collectable) collectable.apply(null, args);
  }

  clear () {
    this._collection.length = 0;
  }

  clone () {
    const clone = new Collection();
    clone._collection = this._collection.slice();
    return clone;
  }

  get collection () {
    return this._collection;
  }
}

class Module extends Collection {
  constructor (type) {
    super();
    this.type = type;
    this.isActive = false;
  }

  activate () {}
  deactivate () {}
}

const ns = name => `${config.prefix}-${name}`;

ns.selector = (name, notation) => {
  if (notation === undefined) notation = '.';
  return `${notation}${ns(name)}`;
};

ns.attr = (name) => `data-${ns(name)}`;

ns.attr.selector = (name, value) => {
  let result = ns.attr(name);
  if (value !== undefined) result += `="${value}"`;
  return `[${result}]`;
};

ns.event = (type) => `${config.namespace}.${type}`;

ns.emission = (domain, type) => `emission:${domain}.${type}`;

class Registration {
  constructor (selector, InstanceClass, creator) {
    this.selector = selector;
    this.InstanceClass = InstanceClass;
    this.creator = creator;
    this.instances = new Collection();
    this.isIntroduced = false;
    this._instanceClassName = this.InstanceClass.instanceClassName;
    this._instanceClassNames = this.getInstanceClassNames(this.InstanceClass);
    this._property = this._instanceClassName.substring(0, 1).toLowerCase() + this._instanceClassName.substring(1);
    const dashed = this._instanceClassName
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([0-9])([^0-9])/g, '$1-$2')
      .replace(/([^0-9])([0-9])/g, '$1-$2')
      .toLowerCase();
    this._attribute = ns.attr(`js-${dashed}`);
  }

  getInstanceClassNames (InstanceClass) {
    const prototype = Object.getPrototypeOf(InstanceClass);
    if (!prototype || prototype.instanceClassName === 'Instance') return [InstanceClass.instanceClassName];
    return [...this.getInstanceClassNames(prototype), InstanceClass.instanceClassName];
  }

  hasInstanceClassName (instanceClassName) {
    return this._instanceClassNames.indexOf(instanceClassName) > -1;
  }

  introduce () {
    if (this.isIntroduced) return;
    this.isIntroduced = true;
    state.getModule('stage').parse(document.documentElement, this);
  }

  parse (node, nonRecursive) {
    const nodes = [];
    if (node.matches && node.matches(this.selector)) nodes.push(node);
    // eslint-disable-next-line no-useless-call
    if (!nonRecursive && node.querySelectorAll && node.querySelector(this.selector)) nodes.push.apply(nodes, [...node.querySelectorAll(this.selector)]);
    return nodes;
  }

  create (element) {
    if (!element.node.matches(this.selector)) return;
    const instance = new this.InstanceClass();
    this.instances.add(instance);
    return instance;
  }

  remove (instance) {
    this.instances.remove(instance);
  }

  dispose () {
    const instances = this.instances.collection;
    for (let i = instances.length - 1; i > -1; i--) instances[i]._dispose();
    this.creator = null;
  }

  get instanceClassName () {
    return this._instanceClassName;
  }

  get instanceClassNames () {
    return this._instanceClassNames;
  }

  get property () {
    return this._property;
  }

  get attribute () {
    return this._attribute;
  }
}

class Register extends Module {
  constructor () {
    super('register');
  }

  register (selector, InstanceClass, creator) {
    const registration = new Registration(selector, InstanceClass, creator);
    this.add(registration);
    if (state.isActive) registration.introduce();
    return registration;
  }

  activate () {
    for (const registration of this.collection) registration.introduce();
  }

  remove (registration) {
    registration.dispose();
    super.remove(registration);
  }
}

let count = 0;

class Element {
  constructor (node, id) {
    if (!id) {
      count++;
      this.id = count;
    } else this.id = id;
    this.node = node;
    this.attributeNames = [];
    this.instances = [];
    this._children = [];
    this._parent = null;
    this._projects = [];
  }

  get proxy () {
    const scope = this;
    if (!this._proxy) {
      this._proxy = {
        id: this.id,
        get parent () {
          return scope.parent ? scope.parent.proxy : null;
        },
        get children () {
          return scope.children.map((child) => child.proxy);
        }
      };

      for (const instance of this.instances) this._proxy[instance.registration.property] = instance.proxy;
    }
    return this._proxy;
  }

  get html () {
    const end = this.node.outerHTML.indexOf('>');
    return this.node.outerHTML.substring(0, end + 1);
  }

  project (registration) {
    if (this._projects.indexOf(registration) === -1) this._projects.push(registration);
  }

  populate () {
    const projects = this._projects.slice();
    this._projects.length = 0;
    for (const registration of projects) this.create(registration);
  }

  create (registration) {
    if (this.hasInstance(registration.instanceClassName)) {
      // inspector.debug(`failed creation, instance of ${registration.instanceClassName} already exists on element [${this.id}]`);
      return;
    }
    inspector.debug(`create instance of ${registration.instanceClassName} on element [${this.id}]`);
    const instance = registration.create(this);
    this.instances.push(instance);
    instance._config(this, registration);
    if (this._proxy) this._proxy[registration.property] = instance.proxy;
  }

  remove (instance) {
    const index = this.instances.indexOf(instance);
    if (index > -1) this.instances.splice(index, 1);
    if (this._proxy) delete this._proxy[instance.registration.property];
  }

  get parent () {
    return this._parent;
  }

  get ascendants () {
    return [this.parent, ...this.parent.ascendants];
  }

  get children () {
    return this._children;
  }

  get descendants () {
    const descendants = [...this._children];
    this._children.forEach(child => descendants.push(...child.descendants));
    return descendants;
  }

  // TODO : emit ascendant et descendant de changement ?

  addChild (child, index) {
    if (this._children.indexOf(child) > -1) return null;
    child._parent = this;
    if (!isNaN(index) && index > -1 && index < this._children.length) this._children.splice(index, 0, child);
    else this._children.push(child);
    return child;
  }

  removeChild (child) {
    const index = this._children.indexOf(child);
    if (index === -1) return null;
    child._parent = null;
    this._children.splice(index, 1);
  }

  emit (type, data) {
    const elements = state.getModule('stage').collection;
    const response = [];
    for (const element of elements) response.push(...element._emit(type, data));
    return response;
  }

  _emit (type, data) {
    const response = [];
    for (const instance of this.instances) response.push(...instance._emitter.emit(type, data));
    return response;
  }

  ascend (type, data) {
    if (this._parent) return this._parent._ascend(type, data);
    return [];
  }

  _ascend (type, data) {
    const response = [];
    for (const instance of this.instances) response.push(...instance._ascent.emit(type, data));
    if (this._parent) response.push(...this._parent._ascend(type, data));
    return response;
  }

  descend (type, data) {
    const response = [];
    for (const child of this._children) response.push(...child._descend(type, data));
    return response;
  }

  _descend (type, data) {
    const response = [];
    for (const instance of this.instances) response.push(...instance._descent.emit(type, data));
    for (const child of this._children) response.push(...child._descend(type, data));
    return response;
  }

  getInstance (instanceClassName) {
    for (const instance of this.instances) if (instance.registration.hasInstanceClassName(instanceClassName)) return instance;
    return null;
  }

  hasInstance (instanceClassName) {
    return this.getInstance(instanceClassName) !== null;
  }

  getDescendantInstances (instanceClassName, stopAtInstanceClassName, stopAtFirstInstance) {
    if (!instanceClassName) return [];
    const instances = [];
    for (const child of this._children) {
      const instance = child.getInstance(instanceClassName);
      if (instance) {
        instances.push(instance);
        if (stopAtFirstInstance) continue;
      }
      if ((!stopAtInstanceClassName || !child.hasInstance(stopAtInstanceClassName)) && child.children.length) instances.push.apply(instances, child.getDescendantInstances(instanceClassName, stopAtInstanceClassName, stopAtFirstInstance));
    }
    return instances;
  }

  getAscendantInstance (instanceClassName, stopAtInstanceClassName) {
    if (!instanceClassName || !this._parent) return null;
    const instance = this._parent.getInstance(instanceClassName);
    if (instance) return instance;
    if (stopAtInstanceClassName && this._parent.hasInstance(stopAtInstanceClassName)) return null;
    return this._parent.getAscendantInstance(instanceClassName, stopAtInstanceClassName);
  }

  dispose () {
    for (const instance of this.instances) instance._dispose();
    this.instances.length = 0;
    state.remove('stage', this);
    this.parent.removeChild(this);
    this._children.length = 0;
    inspector.debug(`remove element [${this.id}] ${this.html}`);
  }

  prepare (attributeName) {
    if (this.attributeNames.indexOf(attributeName) === -1) this.attributeNames.push(attributeName);
  }

  examine () {
    const attributeNames = this.attributeNames.slice();
    this.attributeNames.length = 0;
    for (let i = this.instances.length - 1; i > -1; i--) this.instances[i].examine(attributeNames);
  }
}

class Root extends Element {
  constructor () {
    super(document.documentElement, 'root');
    this.node.setAttribute(ns.attr('js'), true);
  }
}

const RootSelector = {
  ROOT: ':root'
};

class Stage extends Module {
  constructor () {
    super('stage');
    this.root = new Root();
    super.add(this.root);
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.modifications = [];
    this.willModify = false;
    this.modifying = this.modify.bind(this);
  }

  hasElement (node) {
    for (const element of this.collection) if (element.node === node) return true;
    return false;
  }

  getElement (node) {
    for (const element of this.collection) if (element.node === node) return element;
    const element = new Element(node);
    this.add(element);
    inspector.debug(`add element [${element.id}] ${element.html}`);
    return element;
  }

  getProxy (node) {
    if (!this.hasElement(node)) return null;
    const element = this.getElement(node);
    return element.proxy;
  }

  add (element) {
    super.add(element);
    this.put(element, this.root);
  }

  put (element, branch) {
    let index = 0;
    for (let i = branch.children.length - 1; i > -1; i--) {
      const child = branch.children[i];
      const position = element.node.compareDocumentPosition(child.node);
      if (position & Node.DOCUMENT_POSITION_CONTAINS) {
        this.put(element, child);
        return;
      } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        branch.removeChild(child);
        element.addChild(child, 0);
      } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        index = i + 1;
        break;
      }
    }

    branch.addChild(element, index);
  }

  activate () {
    this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
  }

  deactivate () {
    this.observer.disconnect();
  }

  mutate (mutations) {
    const examinations = [];
    mutations.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          mutation.removedNodes.forEach((node) => this.dispose(node));
          mutation.addedNodes.forEach((node) => this.parse(node));
          break;

        case 'attributes':
          if (this.hasElement(mutation.target)) {
            const element = this.getElement(mutation.target);
            element.prepare(mutation.attributeName);
            if (examinations.indexOf(element) === -1) examinations.push(element);
            for (const descendant of element.descendants) if (examinations.indexOf(descendant) === -1) examinations.push(descendant);
          }
          if (this.modifications.indexOf(mutation.target) === -1) this.modifications.push(mutation.target);
          break;
      }
    });

    examinations.forEach(element => element.examine());
    if (this.modifications.length && !this.willModify) {
      this.willModify = true;
      window.requestAnimationFrame(this.modifying);
    }
  }

  modify () {
    this.willModify = false;
    const targets = this.modifications.slice();
    this.modifications.length = 0;
    for (const target of targets) if (document.documentElement.contains(target)) this.parse(target);
  }

  dispose (node) {
    const disposables = [];
    this.forEach((element) => {
      if (node.contains(element.node)) disposables.push(element);
    });

    for (const disposable of disposables) {
      disposable.dispose();
      this.remove(disposable);
    }
  }

  parse (node, registration, nonRecursive) {
    const registrations = registration ? [registration] : state.getModule('register').collection;
    const creations = [];

    for (const registration of registrations) {
      const nodes = registration.parse(node, nonRecursive);

      for (const n of nodes) {
        const element = this.getElement(n);
        element.project(registration);
        if (creations.indexOf(element) === -1) creations.push(element);
      }
    }

    for (const element of creations) element.populate();
  }
}

class Renderer extends Module {
  constructor () {
    super('render');
    this.rendering = this.render.bind(this);
    this.nexts = new Collection();
  }

  activate () {
    window.requestAnimationFrame(this.rendering);
  }

  request (instance) {
    this.nexts.add(instance);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((instance) => instance.render());
    if (!this.nexts.length) return;
    const nexts = this.nexts.clone();
    this.nexts.clear();
    nexts.forEach((instance) => instance.next());
  }
}

class Resizer extends Module {
  constructor () {
    super('resize');
    this.requireResize = false;
    this.resizing = this.resize.bind(this);
    const requesting = this.request.bind(this);
    if (document.fonts) {
      document.fonts.ready.then(requesting);
    }
    window.addEventListener('resize', requesting);
    window.addEventListener('orientationchange', requesting);
  }

  activate () {
    this.request();
  }

  request () {
    if (this.requireResize) return;
    this.requireResize = true;
    window.requestAnimationFrame(this.resizing);
  }

  resize () {
    if (!this.requireResize) return;
    this.forEach((instance) => instance.resize());
    this.requireResize = false;
  }
}

class ScrollLocker extends Module {
  constructor () {
    super('lock');
    this._isLocked = false;
    this._scrollY = 0;
    this.onPopulate = this.lock.bind(this);
    this.onEmpty = this.unlock.bind(this);
  }

  get isLocked () {
    return this._isLocked;
  }

  lock () {
    if (!this._isLocked) {
      this._isLocked = true;
      this._scrollY = window.scrollY;
      document.body.style.top = this._scrollY * -1 + 'px';
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
    }
  }

  unlock () {
    if (this._isLocked) {
      this._isLocked = false;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      document.body.style.top = '';
      window.scroll(0, this._scrollY);
    }
  }
}

class Load extends Module {
  constructor () {
    super('load');
    this.loading = this.load.bind(this);
  }

  activate () {
    window.addEventListener('load', this.loading);
  }

  load () {
    this.forEach((instance) => instance.load());
  }
}

class Engine {
  constructor () {
    state.create(Register);
    state.create(Stage);
    state.create(Renderer);
    state.create(Resizer);
    state.create(ScrollLocker);
    state.create(Load);

    const registerModule = state.getModule('register');
    this.register = registerModule.register.bind(registerModule);
  }

  get isActive () {
    return state.isActive;
  }

  start () {
    inspector.debug('START');
    state.isActive = true;
  }

  stop () {
    inspector.debug('STOP');
    state.isActive = false;
  }
}

const engine = new Engine();

const sanitize = (className) => className.charAt(0) === '.' ? className.substr(1) : className;

const getClassNames = (element) => element.className ? element.className.split(' ') : [];

const modifyClass = (element, className, remove) => {
  className = sanitize(className);
  const classNames = getClassNames(element);
  const index = classNames.indexOf(className);
  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);
  element.className = classNames.join(' ');
};

const addClass = (element, className) => modifyClass(element, className);

const removeClass = (element, className) => modifyClass(element, className, true);

const hasClass = (element, className) => getClassNames(element).indexOf(sanitize(className)) > -1;

const querySelectorAllArray = (element, selectors) => Array.prototype.slice.call(element.querySelectorAll(selectors));

const queryParentSelector = (element, selectors) => {
  const parent = element.parentElement;
  if (parent.matches(selectors)) return parent;
  if (parent === document.documentElement) return null;
  return queryParentSelector(parent, selectors);
};

inspector.info(`version ${config.version}`);

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

api.Modes = Modes;

Object.defineProperty(api, 'mode', {
  set: (value) => { options.mode = value; },
  get: () => options.mode
});

Object.defineProperty(api, 'preventManipulation', {
  get: () => options.preventManipulation
});

api.ns = ns;
api.addClass = addClass;
api.hasClass = hasClass;
api.removeClass = removeClass;
api.queryParentSelector = queryParentSelector;
api.querySelectorAllArray = querySelectorAllArray;

api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;

api.inspector = inspector;

options.configure(config, api.start);

window[config.namespace] = api;

class Emitter {
  constructor () {
    this.emissions = {};
  }

  add (type, closure) {
    if (typeof closure !== 'function') throw new Error('closure must be a function');
    if (!this.emissions[type]) this.emissions[type] = [];
    this.emissions[type].push(closure);
  }

  remove (type, closure) {
    if (!this.emissions[type]) return;
    if (!closure) delete this.emissions[type];
    else {
      const index = this.emissions[type].indexOf(closure);
      if (index > -1) this.emissions[type].splice(index);
    }
  }

  emit (type, data) {
    if (!this.emissions[type]) return [];
    const response = [];
    for (const closure of this.emissions[type]) if (closure) response.push(closure(data));
    return response;
  }

  dispose () {
    this.emissions = null;
  }
}

class Breakpoint {
  constructor (id, minWidth) {
    this.id = id;
    this.minWidth = minWidth;
  }

  test () {
    return window.matchMedia(`(min-width: ${this.minWidth}em)`).matches;
  }
}

const Breakpoints = {
  XS: new Breakpoint('xs', 0),
  SM: new Breakpoint('sm', 36),
  MD: new Breakpoint('md', 48),
  LG: new Breakpoint('lg', 62),
  XL: new Breakpoint('xl', 78)
};

class Instance {
  constructor (jsAttribute = true) {
    this.jsAttribute = jsAttribute;
    this._isRendering = false;
    this._isResizing = false;
    this._isScrollLocked = false;
    this._isLoading = false;
    this._listeners = {};
    this._keyListenerTypes = [];
    this._keys = [];
    this.handlingKey = this.handleKey.bind(this);
    this._emitter = new Emitter();
    this._ascent = new Emitter();
    this._descent = new Emitter();
    this._registrations = [];
    this._nexts = [];
  }

  static get instanceClassName () {
    return 'Instance';
  }

  _config (element, registration) {
    this.element = element;
    this.registration = registration;
    this.node = element.node;
    this.id = element.node.id;
    if (this.jsAttribute) this.setAttribute(registration.attribute, true);
    this.init();
  }

  init () {}

  get proxy () {
    const scope = this;
    return {
      render: () => scope.render(),
      resize: () => scope.resize()
    };
  }

  register (selector, InstanceClass) {
    const registration = state.getModule('register').register(selector, InstanceClass, this);
    this._registrations.push(registration);
  }

  getRegisteredInstances (instanceClassName) {
    for (const registration of this._registrations) if (registration.hasInstanceClassName(instanceClassName)) return registration.instances.collection;
    return [];
  }

  dispatch (type, detail, bubbles, cancelable) {
    const event = new CustomEvent(type, { detail: detail, bubble: bubbles === true, cancelable: cancelable === true });
    this.node.dispatchEvent(event);
  }

  listen (type, closure, options) {
    if (!this._listeners[type]) this._listeners[type] = [];
    if (this._listeners[type].indexOf(closure) > -1) return;
    this._listeners[type].push(closure);
    this.node.addEventListener(type, closure, options);
  }

  unlisten (type, closure) {
    if (!type) {
      for (const type in this._listeners) this.unlisten(type);
    } else if (!closure) {
      if (!this._listeners[type]) return;
      for (const closure of this._listeners[type]) this.node.removeEventListener(type, closure);
      this._listeners[type].length = 0;
    } else {
      if (!this._listeners[type]) return;
      const index = this._listeners[type].indexOf(closure);
      if (index > -1) this._listeners[type].splice(index, 1);
      this.node.removeEventListener(type, closure);
    }
  }

  listenKey (code, closure, preventDefault = false, stopPropagation = false, type = 'down') {
    if (this._keyListenerTypes.indexOf(type) === -1) {
      this.listen(`key${type}`, this.handlingKey);
      this._keyListenerTypes.push(type);
    }

    this._keys.push(new KeyAction(type, code, closure, preventDefault, stopPropagation));
  }

  unlistenKey (code, closure) {
    this._keys = this._keys.filter((key) => key.code !== code || key.closure !== closure);

    this._keyListenerTypes.forEach(type => {
      if (!this._keys.some(key => key.type === type)) this.unlisten(`key${type}`, this.handlingKey);
    });
  }

  handleKey (e) {
    for (const key of this._keys) key.handle(e);
  }

  get isRendering () { return this._isRendering; }

  set isRendering (value) {
    if (this._isRendering === value) return;
    if (value) state.add('render', this);
    else state.remove('render', this);
    this._isRendering = value;
  }

  render () {}

  request (closure) {
    this._nexts.push(closure);
    state.getModule('render').request(this);
  }

  next () {
    const nexts = this._nexts.slice();
    this._nexts.length = 0;
    for (const closure of nexts) if (closure) closure();
  }

  get isResizing () { return this._isResizing; }

  set isResizing (value) {
    if (this._isResizing === value) return;
    if (value) {
      state.add('resize', this);
      this.resize();
    } else state.remove('resize', this);
    this._isResizing = value;
  }

  resize () {}

  isBreakpoint (breakpoint) {
    switch (true) {
      case typeof breakpoint === 'string':
        return Breakpoints[breakpoint.toUpperCase()].test();

      default:
        return breakpoint.test();
    }
  }

  get isScrollLocked () {
    return this._isScrollLocked;
  }

  set isScrollLocked (value) {
    if (this._isScrollLocked === value) return;
    if (value) state.add('lock', this);
    else state.remove('lock', this);
    this._isScrollLocked = value;
  }

  get isLoading () {
    return this._isLoading;
  }

  set isLoading (value) {
    if (this._isLoading === value) return;
    if (value) state.add('load', this);
    else state.remove('load', this);
    this._isLoading = value;
  }

  load () {}

  examine (attributeNames) {
    if (!this.node.matches(this.registration.selector)) {
      this._dispose();
      return;
    }

    this.mutate(attributeNames);
  }

  mutate (attributeNames) {}

  _dispose () {
    inspector.debug(`dispose instance of ${this.registration.instanceClassName} on element [${this.element.id}]`);
    this.removeAttribute(this.registration.attribute);
    this.unlisten();
    this._keys = null;
    this.isRendering = false;
    this.isResizing = false;
    this._nexts = null;
    state.getModule('render').nexts.remove(this);
    this.isScrollLocked = false;
    this.isLoading = false;
    this._emitter.dispose();
    this._emitter = null;
    this._ascent.dispose();
    this._ascent = null;
    this._descent.dispose();
    this._descent = null;
    this.element.remove(this);
    for (const registration of this._registrations) state.remove('register', registration);
    this._registrations = null;
    this.registration.remove(this);
    this.dispose();
  }

  dispose () {}

  emit (type, data) {
    return this.element.emit(type, data);
  }

  addEmission (type, closure) {
    this._emitter.add(type, closure);
  }

  removeEmission (type, closure) {
    this._emitter.remove(type, closure);
  }

  ascend (type, data) {
    return this.element.ascend(type, data);
  }

  addAscent (type, closure) {
    this._ascent.add(type, closure);
  }

  removeAscent (type, closure) {
    this._ascent.remove(type, closure);
  }

  descend (type, data) {
    return this.element.descend(type, data);
  }

  addDescent (type, closure) {
    this._descent.add(type, closure);
  }

  removeDescent (type, closure) {
    this._descent.remove(type, closure);
  }

  get style () {
    return this.node.style;
  }

  addClass (className) {
    addClass(this.node, className);
  }

  removeClass (className) {
    removeClass(this.node, className);
  }

  hasClass (className) {
    return hasClass(this.node, className);
  }

  setAttribute (attributeName, value) {
    this.node.setAttribute(attributeName, value);
  }

  getAttribute (attributeName) {
    return this.node.getAttribute(attributeName);
  }

  hasAttribute (attributeName) {
    return this.node.hasAttribute(attributeName);
  }

  removeAttribute (attributeName) {
    this.node.removeAttribute(attributeName);
  }

  setProperty (propertyName, value) {
    this.node.style.setProperty(propertyName, value);
  }

  removeProperty (propertyName) {
    this.node.style.removeProperty(propertyName);
  }

  focus () {
    this.node.focus();
  }

  get hasFocus () {
    return this.node === document.activeElement;
  }

  matches (selectors) {
    return this.node.matches(selectors);
  }

  querySelector (selectors) {
    return this.node.querySelector(selectors);
  }

  querySelectorAll (selectors) {
    return querySelectorAllArray(this.node, selectors);
  }

  queryParentSelector (selectors) {
    return queryParentSelector(this.node, selectors);
  }

  getRect () {
    return this.node.getBoundingClientRect();
  }
}

class KeyAction {
  constructor (type, code, closure, preventDefault, stopPropagation) {
    this.type = type;
    this.eventType = `key${type}`;
    this.code = code;
    this.closure = closure;
    this.preventDefault = preventDefault === true;
    this.stopPropagation = stopPropagation === true;
  }

  handle (e) {
    if (e.type !== this.eventType) return;
    if (e.keyCode === this.code) {
      this.closure(e);
      if (this.preventDefault) {
        e.preventDefault();
      }
      if (this.stopPropagation) {
        e.stopPropagation();
      }
    }
  }
}

const KeyCodes = {
  TAB: 9,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

const DisclosureEvent = {
  DISCLOSE: ns.event('disclose'),
  CONCEAL: ns.event('conceal')
};

const DisclosureEmission = {
  RESET: ns.emission('disclosure', 'reset'),
  ADDED: ns.emission('disclosure', 'added'),
  REMOVED: ns.emission('disclosure', 'removed'),
  GROUP: ns.emission('disclosure', 'group'),
  UNGROUP: ns.emission('disclosure', 'ungroup')
};

class Disclosure extends Instance {
  constructor (type, selector, DisclosureButtonInstanceClass, disclosuresGroupInstanceClassName) {
    super();
    this.type = type;
    this._selector = selector;
    this.DisclosureButtonInstanceClass = DisclosureButtonInstanceClass;
    this.disclosuresGroupInstanceClassName = disclosuresGroupInstanceClassName;
    this.modifier = this._selector + '--' + this.type.id;
    this.pristine = true;
  }

  static get instanceClassName () {
    return 'Disclosure';
  }

  init () {
    this.addDescent(DisclosureEmission.RESET, this.reset.bind(this));
    this.addDescent(DisclosureEmission.GROUP, this.update.bind(this));
    this.addDescent(DisclosureEmission.UNGROUP, this.update.bind(this));
    this.register(`[aria-controls="${this.id}"]`, this.DisclosureButtonInstanceClass);
    this.ascend(DisclosureEmission.ADDED);
    this.update();
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      disclose: scope.disclose.bind(scope),
      conceal: scope.conceal.bind(scope),
      focus: scope.focus.bind(scope),
      get buttons () {
        return scope.buttons.map((button) => button.proxy);
      },
      get group () {
        const group = scope.group;
        return group ? group.proxy : null;
      }
    });
  }

  get buttons () {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.instanceClassName);
  }

  update () {
    this.getGroup();
  }

  getGroup () {
    if (!this.disclosuresGroupInstanceClassName) {
      this._group = null;
      return;
    }

    const group = this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.instanceClassName);
    if (!group || !group.validate(this)) {
      this._group = null;
      return;
    }

    this._group = group;
  }

  get group () {
    return this._group;
  }

  disclose (withhold) {
    if (this.disclosed) return false;
    this.pristine = false;
    this.disclosed = true;
    if (!withhold && this.group) this.group.current = this;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return false;
    this.pristine = false;
    this.disclosed = false;
    if (!preventFocus) this.focus();
    if (!withhold && this.group && this.group.current === this) this.group.current = null;
    this.descend(DisclosureEmission.RESET);
    return true;
  }

  get disclosed () {
    return this._disclosed;
  }

  set disclosed (value) {
    if (this._disclosed === value) return;
    this.dispatch(value ? DisclosureEvent.DISCLOSE : DisclosureEvent.CONCEAL, this.type);
    this._disclosed = value;
    if (value) this.addClass(this.modifier);
    else this.removeClass(this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  reset () {}

  toggle (isPrimary) {
    if (!this.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !isPrimary:
        case this.disclosed:
          this.conceal();
          break;

        default:
          this.disclose();
      }
    }
  }

  get buttonHasFocus () {
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  get hasFocus () {
    if (super.hasFocus) return true;
    if (this.buttonHasFocus) return true;
    return this.querySelectorAll(':focus').length > 0;
  }

  focus () {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (button.isPrimary) {
        button.focus();
        return;
      }
    }
  }

  dispose () {
    this._group = null;
    super.dispose();
    this.ascend(DisclosureEmission.REMOVED);
  }
}

class DisclosureButton extends Instance {
  constructor (type) {
    super();
    this.type = type;
    this.attributeName = type.ariaState ? 'aria-' + type.id : ns.attr(type.id);
  }

  static get instanceClassName () {
    return 'DisclosureButton';
  }

  init () {
    this.controlsId = this.getAttribute('aria-controls');
    this.isPrimary = this.hasAttribute(this.attributeName);
    if (this.isPrimary && this.disclosed && this.registration.creator.pristine) this.registration.creator.disclose();
    this.listen('click', this.click.bind(this));
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      focus: scope.focus.bind(scope)
    });
  }

  click (e) {
    if (this.registration.creator) this.registration.creator.toggle(this.isPrimary);
  }

  mutate (attributeNames) {
    if (this.isPrimary && attributeNames.indexOf(this.attributeName) > -1 && this.registration.creator) {
      if (this.disclosed) this.registration.creator.disclose();
      else if (this.type.canConceal) this.registration.creator.conceal();
    }
  }

  apply (value) {
    if (!this.isPrimary) return;
    this.setAttribute(this.attributeName, value);
  }

  get disclosed () {
    return this.getAttribute(this.attributeName) === 'true';
  }
}

class DisclosuresGroup extends Instance {
  constructor (disclosureInstanceClassName, jsAttribute) {
    super(jsAttribute);
    this.disclosureInstanceClassName = disclosureInstanceClassName;
    this._index = -1;
  }

  static get instanceClassName () {
    return 'DisclosuresGroup';
  }

  init () {
    this.addAscent(DisclosureEmission.ADDED, this.update.bind(this));
    this.addAscent(DisclosureEmission.REMOVED, this.update.bind(this));
    this.descend(DisclosureEmission.GROUP);
    this.update();
  }

  get proxy () {
    const scope = this;
    return Object.assign(super.proxy, {
      set index (value) {
        scope.index = value;
      },
      get index () {
        return scope.index;
      },
      get length () {
        return scope.length;
      },
      get current () {
        const current = scope.current;
        return current ? current.proxy : null;
      },
      get members () {
        return scope.members.map((member) => member.proxy);
      },
      get hasFocus () {
        return scope.hasFocus;
      }
    });
  }

  validate (member) {
    return true;
  }

  getMembers () {
    const members = this.element.getDescendantInstances(this.disclosureInstanceClassName, this.constructor.instanceClassName, true);
    this._members = members.filter(this.validate.bind(this));
  }

  update () {
    this.getMembers();
    this.getIndex();
  }

  get members () {
    return this._members;
  }

  get length () { return this.members.length; }

  getIndex () {
    this._index = -1;
    for (let i = 0; i < this.length; i++) {
      if (this.index > -1) this.members[i].conceal(true, true);
      else if (this.members[i].disclosed) {
        this.index = i;
      }
    }
  }

  get index () {
    return this._index;
  }

  set index (value) {
    if (value < -1 || value >= this.length || value === this._index) return;
    this._index = value;
    for (let i = 0; i < this.length; i++) {
      const member = this.members[i];
      if (value === i) {
        member.disclose(true);
      } else {
        member.conceal(true, true);
      }
    }
    this.apply();
  }

  get current () {
    return this._index === -1 ? null : this.members[this._index];
  }

  set current (member) {
    this.index = this.members.indexOf(member);
  }

  get hasFocus () {
    const current = this.current;
    if (current) return current.hasFocus;
    return false;
  }

  apply () {}

  dispose () {
    super.dispose();
    this.descend(DisclosureEmission.UNGROUP);
    this._members = null;
  }
}

const DisclosureType = {
  EXPAND: {
    id: 'expanded',
    ariaState: true,
    ariaControls: true,
    canConceal: true
  },
  SELECT: {
    id: 'selected',
    ariaState: true,
    ariaControls: true,
    canConceal: false
  },
  OPENED: {
    id: 'opened',
    ariaState: false,
    ariaControls: true,
    canConceal: true
  }
};

class CollapseButton extends DisclosureButton {
  constructor () {
    super(DisclosureType.EXPAND);
  }

  static get instanceClassName () {
    return 'CollapseButton';
  }
}

const CollapseSelector = {
  COLLAPSE: ns.selector('collapse')
};

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor () {
    super(DisclosureType.EXPAND, CollapseSelector.COLLAPSE, CollapseButton, 'CollapsesGroup');
  }

  static get instanceClassName () {
    return 'Collapse';
  }

  init () {
    super.init();
    this.listen('transitionend', this.transitionend.bind(this));
  }

  transitionend (e) {
    if (!this.disclosed) this.style.maxHeight = '';
  }

  unbound () {
    this.style.maxHeight = 'none';
  }

  disclose (withhold) {
    if (this.disclosed) return;
    this.unbound();
    this.adjust();
    this.request(() => { super.disclose(withhold); });
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return;
    this.adjust();
    this.request(() => { super.conceal(withhold, preventFocus); });
  }

  adjust () {
    this.setProperty('--collapser', 'none');
    const height = this.node.offsetHeight;
    this.setProperty('--collapse', -height + 'px');
    this.setProperty('--collapser', '');
  }

  reset () {
    if (!this.pristine) this.disclosed = false;
  }
}

class CollapsesGroup extends DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }
}

const EquisizedEmission = {
  CHANGE: ns('equisized')
};

class Equisized extends Instance {
  static get instanceClassName () {
    return 'Equisized';
  }

  init () {
    this.ascend(EquisizedEmission.CHANGE);
  }

  measure () {
    this.style.width = 'auto';
    return this.getRect().width;
  }

  adjust (width) {
    this.style.width = `${width}px`;
  }

  dispose () {
    this.ascend(EquisizedEmission.CHANGE);
  }
}

class EquisizedsGroup extends Instance {
  static get instanceClassName () {
    return 'EquisizedsGroup';
  }

  init () {
    this.isResizing = true;
    this.isLoading = true;
    this.addAscent(EquisizedEmission.CHANGE, this.resize.bind(this));
  }

  load () {
    this.resize();
  }

  resize () {
    const equisizeds = this.element.getDescendantInstances('Equisized');

    const width = Math.max(...equisizeds.map(equisized => equisized.measure()));
    equisizeds.forEach(equisized => equisized.adjust(width));
  }
}

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureType: DisclosureType,
  DisclosureEvent: DisclosureEvent,
  DisclosureEmission: DisclosureEmission,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector,
  RootSelector: RootSelector,
  Equisized: Equisized,
  EquisizedEmission: EquisizedEmission,
  EquisizedsGroup: EquisizedsGroup
};

api.register(api.core.CollapseSelector.COLLAPSE, api.core.Collapse);
