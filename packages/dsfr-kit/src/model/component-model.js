import { Model } from './model.js';
import componentSchema from './component-schema.json';

class ComponentModel extends Model {
  assign (props, getters = {}) {
    getters.id = props.id;
    super.assign(props, getters);
  }
  parse (classes = [], attributes = {}, properties = {}, ...elements) {
    if (this.id) attributes.id = this.id;
    super.parse(classes, attributes, properties, ...elements);
  }
}

ComponentModel.registerSchema(componentSchema);

export { ComponentModel };
