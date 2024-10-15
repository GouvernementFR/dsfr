import { checkboxArgTypes, checkboxArgs } from './checkbox-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';

const getcheckboxArgTypes = (id) => {
  const checkbox = {};

  const table = {
    table: {
      category: `checkbox${id}`
    }
  };

  checkbox[`label${id}`] = { ...checkboxArgTypes.label, ...table };
  checkbox[`id${id}`] = { ...checkboxArgTypes.id, ...table };
  checkbox[`name${id}`] = { ...checkboxArgTypes.name, ...table };
  checkbox[`hint${id}`] = { ...checkboxArgTypes.hint, ...table };
  checkbox[`disabled${id}`] = { ...checkboxArgTypes.disabled, ...table };

  if (id > 2) {
    checkbox[`hascheckbox${id}`] = {
      control: 'boolean',
      table: {
        category: `checkbox${id}`
      }
    };

    if (id > 3) {
      checkbox[`hascheckbox${id}`].if = { arg: `hascheckbox${id - 1}` };
    }

    checkbox[`label${id}`].if = { arg: `hascheckbox${id}` };
    checkbox[`id${id}`].if = { arg: `hascheckbox${id}` };
    checkbox[`disabled${id}`].if = { arg: `hascheckbox${id}` };
    checkbox[`name${id}`].if = { arg: `hascheckbox${id}` };
    checkbox[`hint${id}`].if = { arg: `hascheckbox${id}` };
  }

  return checkbox;
};

const checkboxesGroupArgTypes = {
  id: {
    ...formArgTypes.id
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des checkboxes'
  },
  hint: {
    ...checkboxArgTypes.hint,
    description: 'Texte additionnel sous la légende'
  },
  size: {
    ...checkboxArgTypes.size,
    description: 'Taille des checkboxes'
  },
  inline: {
    ...formArgTypes.inline
  },
  disabled: {
    ...checkboxArgTypes.disabled,
    description: 'Désactive l’ensemble des checkboxes'
  },
  status: {
    ...checkboxArgTypes.status
  },
  errorMessage: {
    ...checkboxArgTypes.errorMessage
  },
  validMessage: {
    ...checkboxArgTypes.validMessage
  },
  ...getcheckboxArgTypes(1),
  ...getcheckboxArgTypes(2),
  ...getcheckboxArgTypes(3),
  ...getcheckboxArgTypes(4),
  ...getcheckboxArgTypes(5)
};

const getcheckboxArgs = (id) => {
  const checkbox = {};

  checkbox[`id${id}`] = `${checkboxArgs.id}-${id}`;
  checkbox[`label${id}`] = `${checkboxArgs.label} ${id}`;
  checkbox[`name${id}`] = `${checkboxArgs.name}${id}`;
  checkbox[`hint${id}`] = checkboxArgs.hint;
  checkbox[`disabled${id}`] = checkboxArgs.disabled;

  if (id > 2) {
    checkbox[`hascheckbox${id}`] = false;
  }

  return checkbox;
};

const checkboxesGroupArgs = {
  id: formArgs.id,
  legend: 'Légende pour l’ensemble des éléments',
  hint: formArgs.hint,
  size: 'md',
  disabled: formArgs.disabled,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  ...getcheckboxArgs(1),
  ...getcheckboxArgs(2),
  ...getcheckboxArgs(3),
  ...getcheckboxArgs(4),
  ...getcheckboxArgs(5)
};

const checkboxesGroupProps = (args) => {
  const checkboxes = [];

  for (let i = 1; i <= 5; i++) {
    if (i < 3 || args[`hascheckbox${i}`]) {
      const checkbox = {
        type: 'checkbox',
        inline: args.inline,
        data: {
          id: args[`id${i}`] || undefined,
          label: args[`label${i}`] || checkboxArgs.label,
          size: args.size || checkboxesGroupArgs.size,
          name: args[`name${i}`] || checkboxArgs.name,
          hint: args[`hint${i}`] !== '' ? args[`hint${i}`] || checkboxArgs.hint : undefined,
          disabled: args[`disabled${i}`]
        }
      };

      checkboxes.push(checkbox);
    }
  }

  const checkboxesGroup = {
    id: args.id || undefined,
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint !== '' ? args.hint || formArgs.hint : undefined,
    inline: args.inline,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: checkboxes
  };

  return checkboxesGroup;
};

export { checkboxesGroupArgTypes, checkboxesGroupArgs, checkboxesGroupProps };
