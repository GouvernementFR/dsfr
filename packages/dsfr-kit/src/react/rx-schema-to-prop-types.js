import PropTypes from 'prop-types';

export const rxSchemaToPropTypes = (schema) => {
  const propTypes = {};
  Object.entries(schema.props).forEach(([key, fragment]) => {

    const isRequired = schema?.required?.includes(key);

    if (fragment.enum !== undefined) {
      propTypes[key] = PropTypes.oneOf(fragment.enum);
    }
    else if (fragment.type !== undefined) {
      if (isRequired) {
        switch (fragment.type) {
          case 'string':
            propTypes[key] = PropTypes.string.isRequired;
            break;
          case 'number':
            propTypes[key] = PropTypes.number.isRequired;
            break;
          case 'boolean':
            propTypes[key] = PropTypes.bool.isRequired;
            break;
          case 'array':
            propTypes[key] = PropTypes.array.isRequired;
            break;
          case 'object':
            propTypes[key] = PropTypes.object.isRequired;
            break;
        }
      }
      else {
        switch (fragment.type) {
          case String:
            propTypes[key] = PropTypes.string;
            break;
          case Number:
            propTypes[key] = PropTypes.number;
            break;
          case Boolean:
            propTypes[key] = PropTypes.bool;
            break;
          case Array:
            propTypes[key] = PropTypes.array;
            break;
          case Object:
            propTypes[key] = PropTypes.object;
            break;
        }
      }
    }
  });
  return propTypes;
};
