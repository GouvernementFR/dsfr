import { ComponentModel } from '@gouvfr/dsfr-kit';
import frIconSchema from './schema.json';

class FrIconModel extends ComponentModel {
  assign (props, getters = {}) {
    getters.name = props.name;
    getters.size = props.size;
    super.assign(props, getters);
  }

  parse (classes = [], attributes = {}) {
    classes.push(`fr-icon-${this.name}`);

    if (this.size !== undefined && this.size !== this.schema.props.size.default) classes.push(`fr-icon--${this.size}`);

    attributes['aria-hidden'] = 'true';
    super.parse(classes, attributes);
  }
}

FrIconModel.registerSchema(frIconSchema);

console.log(FrIconModel.schema);

export { FrIconModel };
