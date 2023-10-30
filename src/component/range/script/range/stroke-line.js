import api from '../../api';

class StrokeLine {
  constructor () {
    this._strokeWidth = 4;
    this._x1 = 0;
    this._y1 = 0;
  }

  setToken (token) {
    this._token = token;
  }

  get strokeWidth () {
    return this._strokeWidth;
  }

  set strokeWidth (value) {
    this._strokeWidth = value;
  }

  get x1 () {
    return this._x1;
  }

  set x1 (value) {
    this._x1 = value;
  }

  get x2 () {
    return this._x2;
  }

  set x2 (value) {
    this._x2 = value;
  }

  get offset () {
    return this._offset;
  }

  set offset (value) {
    this._offset = value;
  }

  get stepWidth () {
    return this._stepWidth;
  }

  set stepWidth (value) {
    this._stepWidth = value;
  }

  get data () {
    const data = {
      'stroke-width': this._strokeWidth,
      stroke: api.colors.getColor.apply(api.colors, this._token),
      x1: this._x1,
      y1: 2,
      x2: this._x2,
      y2: 2
    };

    if (this._stepWidth) data['stroke-dasharray'] = `${this._stepWidth} ${this._strokeWidth}`;
    if (this._offset) data['stroke-dashoffset'] = this._offset;

    return data;
  }

  get line () {
    const data = this.data;
    const attributes = Object.keys(data).map(key => `${key}='${data[key]}'`).join(' ');

    return `<line ${attributes} />`;
  }
}

export { StrokeLine };
