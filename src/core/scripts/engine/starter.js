class Starter {
  constructor (start) {
    this.isStarted = false;
    this.start = start;
  }

  setStartMode (mode) {
    if (this.startMode !== undefined) return;

    this.startMode = mode;

    switch (mode) {
      case 'auto':
        this.start();
        break;

      default:
        throw new Error('Illegal start mode in Engine');
    }
  }
}

export { Starter };
