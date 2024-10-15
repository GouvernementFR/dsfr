import { toggleArgTypes, toggleArgs } from './toggle-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';

const toggleGroupArgTypes = {
  id: {
    ...formArgTypes.id
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des interupteurs'
  },
  left: {
    ...toggleArgTypes.left
  },
  border: {
    ...toggleArgTypes.border
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

const toggleGroupArgs = {
  id: formArgs.id,
  legend: 'Légende pour l\'ensemble des éléments',
  left: false,
  border: true,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès'
};

const toggleGroupProps = (args) => {
  const toggles = [{
    type: 'toggle',
    data: {
      id: args.id || undefined,
      label: args.label || toggleArgs.label,
      hint: args.hint !== '' ? args.hint || toggleArgs.hint : undefined,
      left: args.left || toggleArgs.left,
      border: args.border || toggleArgs.border
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

  return toggleGroup;
};

export { toggleGroupArgTypes, toggleGroupArgs, toggleGroupProps };
