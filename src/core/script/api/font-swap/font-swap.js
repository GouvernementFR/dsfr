import { Module } from '../module.js';

const FONT_FAMILIES = ['Marianne', 'Spectral'];

class FontSwap extends Module {
  constructor () {
    super('font-swap');
    this.swapping = this.swap.bind(this);
  }

  activate () {
    document.fonts.addEventListener('loadingdone', this.swapping);
  }

  swap () {
    const families = FONT_FAMILIES.filter(family => document.fonts.check(`16px ${family}`));

    this.forEach((instance) => instance.swapFont(families));
  }
}

export { FontSwap };
