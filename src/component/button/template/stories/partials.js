import button from '../ejs/button.ejs?raw';
import buttonsGroup from '../ejs/buttons-group.ejs?raw';
import buttonClose from '../ejs/button-close.ejs?raw';
import buttonDisplay from '../ejs/button-display.ejs?raw';

export const buttonPartials = [
  {
    names: ['button'],
    partial: button
  },
  {
    names: ['buttons-group'],
    partial: buttonsGroup
  },
  {
    names: ['button-close'],
    partial: buttonClose
  },
  {
    names: ['button-display'],
    partial: buttonDisplay
  }
];
