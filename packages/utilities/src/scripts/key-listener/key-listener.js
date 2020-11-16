/**
 * Utilitaire de gestion des évenements clavier
 * Utiliser KeyListener.add() pour ajouter un event listener
 */
class KeyListener {
  constructor (element) {
    this.element = element;
  }

  /**
   * key: la touche de clavier
   * action: la function à appliquer
   * event: event type, optionnel, si c'est en down, up ou press
   */
  add (key, action, event, stopPropagation) {
    if (!this.element) this.element = document;
    this.element.addEventListener('key' + event, e => {
      if (e.keyCode === key) {
        action();
        if (stopPropagation) {
          e.preventDefault();
        }
      }
    });
  }
}

KeyListener.ESCAPE = 27;
KeyListener.END = 35;
KeyListener.HOME = 36;
KeyListener.LEFT = 37;
KeyListener.RIGHT = 39;

export { KeyListener };
