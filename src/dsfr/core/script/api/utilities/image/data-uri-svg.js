class DataURISVG {
  constructor (width = 0, height = 0) {
    this._width = width;
    this._height = height;
    this._content = '';
  }

  get width () {
    return this._width;
  }

  set width (value) {
    this._width = value;
  }

  get height () {
    return this._height;
  }

  set height (value) {
    this._height = value;
  }

  get content () {
    return this._content;
  }

  set content (value) {
    this._content = value;
  }

  getDataURI (isLegacy = false) {
    let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 ${this._width} ${this._height}' width='${this._width}px' height='${this._height}px'>${this._content}</svg>`;

    svg = svg.replace(/#/gi, '%23');
    if (isLegacy) {
      svg = svg.replace(/</gi, '%3C');
      svg = svg.replace(/>/gi, '%3E');
      svg = svg.replace(/"/gi, '\'');
      svg = svg.replace(/{/gi, '%7B');
      svg = svg.replace(/}/gi, '%7D');
    }
    return `data:image/svg+xml;charset=utf8,${svg}`;
  }
}

export { DataURISVG };
