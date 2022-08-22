class Breakpoint {
  constructor (id) {
    this.id = id;
    this._sources = [];
  }

  get data () {
    return {
      id: this.id,
      modules: this._sources.map(source => source.module)
    };
  }

  get has () {
    return this._sources.length > 0;
  }

  addSource (source) {
    if (source.breakpoints.includes(this.id)) this._sources.push(source);
  }
}

module.exports = { Breakpoint };
