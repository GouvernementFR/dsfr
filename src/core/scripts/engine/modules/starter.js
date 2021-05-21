import inspector from '../../inspect/inspector.js';

class Starter {
  constructor (start) {
    this.isStarted = false;
    this.start = start;
  }

  setMode (mode) {
    if (this.startMode !== undefined) return;

    this.startMode = mode;
    inspector.debug(`start mode set on ${mode}`);

    switch (mode) {
      case 'manual':
        break;

      case 'immediate':
        this.start();
        break;

      case 'auto':
      case 'loaded':
        this.loaded();
        break;

      default:
        inspector.error('Illegal start mode in Engine');
    }
  }

  loaded () {
    if (document.readyState !== 'loading') window.requestAnimationFrame(this.start);
    else document.addEventListener('DOMContentLoaded', this.start);
  }
}

export { Starter };
