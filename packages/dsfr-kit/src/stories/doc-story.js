import { schemaToArgTypes } from './schema-to-arg-types.js';
import { schemaToArgs } from './schema-to-args.js';

export const docStory = (component, schema) => {
  return {
    component: component,
    parameters: {
      docs: {
        controls: { sort: 'requiredFirst' }
      }
    },
    argTypes: schemaToArgTypes(schema),
    args: schemaToArgs(schema)
  };
}
