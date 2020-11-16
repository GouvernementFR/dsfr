/**
 * Utilitaire de gestion des évenements clavier
 * Utiliser KeyListener.add() pour ajouter un event listener
 */
class KeyListener {
  constructor (element) {
    this.element = element;
    this.types = {};
  }

  /**
   * key: la touche de clavier
   * closure: la function à appliquer
   * type: event type, optionnel, si c'est en down, up ou press
   * stopPropagation: Boolean, permet d'empêcher le comportement par default de l'evenement
   */
  _add (type, action) {
    if (this.types[type] === undefined) this.types[type] = new KeyActionType(type, this.element);
    this.types[type].add(action);
  }

  down (key, closure, stopPropagation) {
    this._add('down', new KeyAction(key, closure, stopPropagation));
  }

  up (key, closure, stopPropagation) {
    this._add('up', new KeyAction(key, closure, stopPropagation));
  }

  press (key, closure, stopPropagation) {
    this._add('press', new KeyAction(key, closure, stopPropagation));
  }

  dispose () {
    for (const type of this.types) type.dispose();
    this.types = null;
  }
}

class KeyActionType {
  constructor (type, element) {
    this.type = type;
    this.element = element;
    this.actions = [];
    this.binding = this.handle.bind(this);
    element.addEventListener('key' + type, this.binding);
  }

  add (action) {
    this.actions.push(action);
  }

  handle (e) {
    for (const action of this.actions) action.handle(e);
  }

  dispose () {
    this.element.removeEventListener('key' + this.type, this.binding);
    this.actions = null;
  }
}

class KeyAction {
  constructor (key, closure, stopPropagation) {
    this.key = key;
    this.closure = closure;
    this.stopPropagation = stopPropagation === true;
  }

  handle (e) {
    if (e.keyCode === this.key) {
      this.closure();
      if (this.stopPropagation) {
        e.preventDefault();
      }
    }
  }
}

KeyListener.ESCAPE = 27;
KeyListener.END = 35;
KeyListener.HOME = 36;
KeyListener.LEFT = 37;
KeyListener.RIGHT = 39;

export { KeyListener };
