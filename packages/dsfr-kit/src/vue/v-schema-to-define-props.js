
const Types = {
  string: String,
  number: Number,
  boolean: Boolean,
  array: Array,
  object: Object
}

export const vSchemaToDefineProps = (schema) => {
  const props = {};
  const required = schema.required || [];
  Object.entries(schema.props).forEach(([key, fragment]) => {
    const prop = {
      type: Types[fragment.type]
    };

    if (required.includes(key)) {
      prop.required = true;
    }
    if (fragment.default !== undefined) {
      prop.default = fragment.default;
    }
    if (fragment.enum) {
      prop.validator = (value) => [...fragment.enum].includes(value);
    }
    props[key] = prop;
  });
  return props;
};
