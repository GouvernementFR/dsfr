class MessageBuilder {
  constructor (id) {
    this.id = id;
    this.messages = [];
    this.describedby = [];
    this.appends = {
      error: -1,
      valid: -1,
      info: -1
    };
  }

  get messagesGroup () {
    return {
      id: `${this.id}-messages`,
      messages: this.messages
    };
  }

  add (type, data) {
    this.appends[type]++;
    const append = this.appends[type] > 0 ? '-' + this.appends[type] : '';
    const id = `${this.id}-message-${type}${append}`;
    switch (typeof data) {
      case 'string':
        this.describedby.push(id);
        this.messages.push({ type: type, id: id, text: data });
        break;

      case 'object':
        this.describedby.push(data.id);
        this.messages.push(data);
        break;
    }
  }

  addError (data) {
    this.add('error', data);
  }

  addValid (data) {
    this.add('valid', data);
  }

  addInfo (data) {
    this.add('info', data);
  }
}

(function (locals) {
  locals.MessageBuilder = MessageBuilder;
}(locals));
