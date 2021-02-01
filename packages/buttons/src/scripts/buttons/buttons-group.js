import { Equisized } from '@gouvfr/core/src/scripts';

class ButtonsGroup {
  constructor () {
    const buttonsGroupSelectorEquisized = '.${prefix}-btns-group--equisized';
    const buttonSelector = '.${prefix}-btn';
    this.btnsGroup = document.querySelectorAll(buttonsGroupSelectorEquisized);
    const arrayEquisized = [];
    for (let i = 0; i < this.btnsGroup.length; i++) {
      arrayEquisized.push(new Equisized(buttonSelector, this.btnsGroup[i]));
    }
  }
}

export { ButtonsGroup };
