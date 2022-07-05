class ObjectUtility {
  static merge (target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object) Object.assign(source[key], this.merge(target[key], source[key]));
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
  }
};

module.exports = { ObjectUtility };
