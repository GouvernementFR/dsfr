import label from '../ejs/label.ejs?raw';
import hint from '../ejs/hint.ejs?raw';
import fieldset from '../ejs/fieldset/fieldset.ejs?raw';
import fieldsetElement from '../ejs/fieldset/fieldset-element.ejs?raw';
import legend from '../ejs/fieldset/legend.ejs?raw';
import form from '../ejs/form.ejs?raw';
import messagesGroup from '../ejs/message/messages-group.ejs?raw';
import message from '../ejs/message/message.ejs?raw';

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
    names: ['fieldset-element'],
    partial: fieldsetElement
  },
  {
    names: ['legend'],
    partial: legend
  },
  {
    names: ['messages-group'],
    partial: messagesGroup
  },
  {
    names: ['message'],
    partial: message
  },
  {
    names: ['form'],
    partial: form
  }
];
