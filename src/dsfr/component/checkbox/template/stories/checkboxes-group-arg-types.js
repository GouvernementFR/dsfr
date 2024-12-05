import { checkboxArgTypes } from './checkbox-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const checkboxesGroupArgTypes = {
  id: {
    ...formArgTypes.id,
    type: {
      value: 'string',
      required: true
    }
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
  }
};

const getCheckboxesData = (count = 3) => {
  const checkboxes = [];
  for (let i = 1; i <= count; i++) {
    checkboxes.push(
      {
        label: `Checkbox ${i}`,
        id: uniqueId('checkbox'),
        name: `checkbox${i}`,
        hint: '',
        disabled: false
      }
    );
  }
  return checkboxes;
};

const checkboxesGroupArgs = {
  legend: 'Légende pour l’ensemble des éléments',
  hint: formArgs.hint,
  size: 'md',
  disabled: formArgs.disabled,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  checkboxes: getCheckboxesData(),
  id: formArgs.id
};

const checkboxesGroupProps = (args) => {
  const checkboxesGroup = {
    id: args.id || uniqueId('checkbox-form'),
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint !== '' ? args.hint || formArgs.hint : undefined,
    inline: args.inline,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: args.checkboxes.map((checkbox, index) => {
      const checkboxProps = {
        type: 'checkbox',
        inline: args.inline,
        data: {
          label: checkbox.label,
          size: args.size,
          id: checkbox.id,
          name: checkbox.name,
          hint: checkbox.hint,
          disabled: checkbox.disabled
        }
      };

      return checkboxProps;
    })
  };

  return checkboxesGroup;
};

export { checkboxesGroupArgTypes, checkboxesGroupArgs, checkboxesGroupProps, getCheckboxesData };
