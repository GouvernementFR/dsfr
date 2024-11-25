import { inputArgTypes } from './input-arg-types';
import { formArgTypes, formArgs } from '../../../../form/template/stories/form-arg-types';
import { uniqueId } from '../../../../../core/template/stories/unique-id';

const inputsGroupArgTypes = {
  id: {
    ...formArgTypes.id,
    type: {
      value: 'string'
    }
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des inputs'
  },
  hint: {
    ...inputArgTypes.hint,
    description: 'Texte additionnel sous la légende'
  },
  inline: {
    ...formArgTypes.inline
  },
  disabled: {
    ...inputArgTypes.disabled,
    description: 'Désactive l’ensemble des inputs'
  },
  status: {
    ...inputArgTypes.status
  },
  errorMessage: {
    ...inputArgTypes.errorMessage
  },
  validMessage: {
    ...inputArgTypes.validMessage
  },
  inputs: {
    control: { type: 'object' },
    description: 'Liste des inputs',
    type: {
      value: 'array'
    }
  }
};

const inputsGroupArgs = {
  legend: 'Légende pour l’ensemble des éléments',
  hint: formArgs.hint,
  disabled: formArgs.disabled,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  inputs: [
    {
      id: uniqueId('input'),
      label: 'Label 1',
      name: 'input1',
      hint: 'Texte d’aide',
      disabled: false
    },
    {
      id: uniqueId('input'),
      label: 'Label 2',
      name: 'input2',
      hint: 'Texte d’aide',
      disabled: false
    },
    {
      id: uniqueId('input'),
      label: 'Label 3',
      name: 'input3',
      hint: 'Texte d’aide',
      disabled: false
    }
  ],
  id: formArgs.id
};

const inputsGroupProps = (args) => {
  const inputsGroup = {
    id: args.id || undefined,
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint !== '' ? args.hint || formArgs.hint : undefined,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: args.inputs.map((input, index) => {
      const inputProps = {
        type: 'input',
        inline: args.inline,
        data: {
          label: input.label,
          id: input.id,
          name: input.name,
          hint: input.hint,
          disabled: input.disabled
        }
      };
      return inputProps;
    })
  };

  return inputsGroup;
};

export { inputsGroupArgTypes, inputsGroupArgs, inputsGroupProps };
