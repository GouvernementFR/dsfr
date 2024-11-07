import { inputArgTypes, inputArgs } from './input-arg-types';
import { formArgTypes, formArgs } from '../../../../form/template/stories/form-arg-types';

const getinputArgTypes = (id) => {
  const input = {};

  const table = {
    table: {
      category: `input${id}`
    }
  };

  input[`label${id}`] = { ...inputArgTypes.label, ...table };
  input[`id${id}`] = { ...inputArgTypes.id, ...table };
  input[`hint${id}`] = { ...inputArgTypes.hint, ...table };
  input[`disabled${id}`] = { ...inputArgTypes.disabled, ...table };

  if (id > 2) {
    input[`hasinput${id}`] = {
      control: 'boolean',
      table: {
        category: `input${id}`
      }
    };

    if (id > 3) {
      input[`hasinput${id}`].if = { arg: `hasinput${id - 1}` };
    }

    input[`label${id}`].if = { arg: `hasinput${id}` };
    input[`id${id}`].if = { arg: `hasinput${id}` };
    input[`disabled${id}`].if = { arg: `hasinput${id}` };
    input[`hint${id}`].if = { arg: `hasinput${id}` };
  }

  return input;
};

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
  ...getinputArgTypes(1),
  ...getinputArgTypes(2),
  ...getinputArgTypes(3),
  ...getinputArgTypes(4),
  ...getinputArgTypes(5)
};

const getinputArgs = (id) => {
  const input = {};

  input[`id${id}`] = `${inputArgs.id}-${id}`;
  input[`label${id}`] = `${inputArgs.label} ${id}`;
  input[`hint${id}`] = inputArgs.hint;
  input[`disabled${id}`] = inputArgs.disabled;

  if (id > 2) {
    input[`hasinput${id}`] = false;
  }

  return input;
};

const inputsGroupArgs = {
  id: formArgs.id,
  legend: 'Légende pour l’ensemble des éléments',
  hint: formArgs.hint,
  disabled: formArgs.disabled,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  ...getinputArgs(1),
  ...getinputArgs(2),
  ...getinputArgs(3),
  ...getinputArgs(4),
  ...getinputArgs(5)
};

const inputsGroupProps = (args) => {
  const inputs = [];

  for (let i = 1; i <= 5; i++) {
    if (i < 3 || args[`hasinput${i}`]) {
      const input = {
        type: 'input',
        inline: args.inline,
        data: {
          id: args[`id${i}`] || undefined,
          label: args[`label${i}`] || inputArgs.label,
          name: args[`name${i}`] || inputArgs.name,
          hint: args[`hint${i}`] !== '' ? args[`hint${i}`] || inputArgs.hint : undefined,
          disabled: args[`disabled${i}`]
        }
      };

      inputs.push(input);
    }
  }

  const inputsGroup = {
    id: args.id || undefined,
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint !== '' ? args.hint || formArgs.hint : undefined,
    inline: args.inline,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: inputs
  };

  return inputsGroup;
};

export { inputsGroupArgTypes, inputsGroupArgs, inputsGroupProps };
