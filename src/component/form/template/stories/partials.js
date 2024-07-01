import label from '../ejs/label.ejs?raw';
import message from '../ejs/message/message.ejs?raw';
import messagesGroup from '../ejs/message/messages-group.ejs?raw';
import messageBuilder from '../ejs/message/builder.js.ejs?raw';

export const formPartials = [
  {
    names: ['label'],
    partial: label
  },
  {
    names: ['message'],
    partial: message
  },
  {
    names: ['messages-group'],
    partial: messagesGroup
  },
  {
    names: ['message-builder'],
    partial: messageBuilder
  }
];
