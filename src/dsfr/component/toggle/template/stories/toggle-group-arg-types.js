import { toggleArgTypes, toggleArgs } from './toggle-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const toggleGroupArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du fieldset',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des interrupteurs'
  },
  left: {
    ...toggleArgTypes.left
  },
  border: {
    ...toggleArgTypes.border
  },
  state: {
    ...toggleArgTypes.state
  },
  status: {
    ...toggleArgTypes.status
  },
  errorMessage: {
    ...toggleArgTypes.errorMessage
  },
  validMessage: {
    ...toggleArgTypes.validMessage
  }
};

const getTogglesData = (count = 3) => {
  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push({
      id: uniqueId('toggle'),
      label: `${toggleArgs.label} ${i}`,
      checked: i === 1,
      disabled: false,
      hint: undefined
    });
  }
  return elements;
};

const toggleGroupArgs = {
  legend: 'Légende pour l\'ensemble des éléments',
  left: false,
  border: false,
  state: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  elements: getTogglesData(),
  id: 'toggle-group-id'
};

const toggleGroupProps = (args) => {
  const toggles = [{
    type: 'toggle',
    data: {
      toggles: args.elements || toggleGroupArgs.elements
    }
  }];

  const toggleGroup = {
    id: args.id || undefined,
    legend: args.legend || toggleGroupArgs.legend,
    status: args.status || toggleGroupArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: toggles
  };

  for (const element of toggleGroup.elements[0].data.toggles) {
    element.left = args.left;
    element.border = args.border;
    element.state = args.state;
  }

  return toggleGroup;
};

export { toggleGroupArgTypes, toggleGroupArgs, toggleGroupProps, getTogglesData };
