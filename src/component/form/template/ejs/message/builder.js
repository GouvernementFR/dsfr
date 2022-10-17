class MessageBuilder {
  constructor (id, includeEmpty) {
    this.id = id;
    this.groupId = `${this.id}-messages`;
    this.messages = [];
    this._ids = [this.groupId];
    this.appends = {
      error: -1,
      valid: -1,
      info: -1
    };
    this._group = {
      id: this.groupId,
      includeEmpty: includeEmpty !== false
    };
  }

  get messagesGroup () {
    return {
      ...this._group,
      messages: this.messages
    };
  }

  get ids () {
    return this._ids;
  }

  get describedby () {
    return this._ids;
  }

  add (type, data) {
    this.appends[type]++;
    const append = this.appends[type] > 0 ? '-' + this.appends[type] : '';
    const typedId = type ? `-${type}` : '';
    const id = `${this.id}-message${typedId}${append}`;
    switch (typeof data) {
      case 'string':
        // this._ids.push(id);
        this.messages.push({ type: type, id: id, text: data });
        break;

      case 'object':
        if (Array.isArray(data)) {
          data.forEach(msg => this.add(type, msg));
        } else {
          // this._ids.push(data.id);
          this.messages.push(data);
        }
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
