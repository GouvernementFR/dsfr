class Collection {
  constructor () {
    this._collection = [];
    this.forEach = this._collection.forEach.bind(this._collection);
    this.map = this._collection.map.bind(this._collection);
  }

  add (collectable) {
    if (this._collection.indexOf(collectable) > -1) return false;
    this._collection.push(collectable);
    if (this.onAdd) this.onAdd();
    if (this.onPopulate && this._collection.length === 1) this.onPopulate();
    return true;
  }

  remove (collectable) {
    const index = this._collection.indexOf(collectable);
    if (index === -1) return false;
    this._collection.splice(index, 1);
    if (this.onRemove) this.onRemove();
    if (this.onEmpty && this._collection.length === 0) this.onEmpty();
  }

  execute (...args) {
    for (const collectable of this._collection) if (collectable) collectable.apply(null, args);
  }

  get collection () {
    return this._collection;
  }
}

export { Collection };
