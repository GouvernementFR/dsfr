import label from '../ejs/label.ejs?raw';
import hint from '../ejs/hint.ejs?raw';
import fieldset from '../ejs/fieldset/fieldset.ejs?raw';
import element from '../ejs/fieldset/element.ejs?raw';
import legend from '../ejs/fieldset/legend.ejs?raw';
import form from '../ejs/form.ejs?raw';

export const formPartials = [
  {
    names: ['label'],
    partial: label
  },
  {
    names: ['hint'],
    partial: hint
  },
  {
    names: ['fieldset'],
    partial: fieldset
  },
  {
    names: ['element'],
    partial: element
  },
  {
    names: ['legend'],
    partial: legend
  },
  {
    names: ['form'],
    partial: form
  }
];
