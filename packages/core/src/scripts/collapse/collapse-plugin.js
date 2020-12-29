const plugins = [];

class CollapsePlugin {
  constructor (ascendant, GroupConstructor) {
    this.ascendant = ascendant;
    this.GroupConstructor = GroupConstructor;
  }

  static add (ascendant, GroupConstructor) {
    plugins.push(new CollapsePlugin(ascendant, GroupConstructor));
  }

  static get plugins () { return plugins; };
}

export { CollapsePlugin };
