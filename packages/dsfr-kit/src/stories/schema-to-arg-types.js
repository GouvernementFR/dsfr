export const schemaToArgTypes = (schema) => {
  const argTypes = {};
  Object.entries(schema.props).forEach(([key, fragment]) => {
    const argType = {
      description: fragment.description,
      type: {
        value: fragment.type,
        required: fragment.required
      },
      table: {
        category: fragment.category,
        type: {
          summary: fragment.type
        }
      }
    };

    switch (true) {
      case fragment.enum !== undefined:
        argType.control = { type: 'select' };
        argType.options = fragment.enum;
        break;
      case fragment.type === 'string':
        argType.control = 'text';
        break;
      case fragment.type === 'number':
        argType.control = 'number';
        break;
      case fragment.type === 'boolean':
        argType.control = 'boolean';
        break;
      case fragment.type === 'array':
      case fragment.type === 'object':
        argType.control = 'object';
        break;
    }

    if (fragment.default !== undefined) {
      argType.table.defaultValue = {
        summary: fragment.default
      };
    }

    argTypes[key] = argType;
  });
  return argTypes;
}
