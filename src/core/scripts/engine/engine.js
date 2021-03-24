import { Renderer } from './render/renderer';

// TODO: initializer et renderer en 1, avec muttation observer pour ajouter et retirer les instances des objets attendus en fonctions de selecteurs spécifiques
class Engine {
  constructor () {
    this.renderer = new Renderer();
    // this.instantier = new Instancier();
  }

  register (selector, factory) {

  }

  start () {
    // this.renderer.start();
  }

  stop () {
    // this.renderer.stop();
  }
}

const engine = new Engine();

export default engine;
