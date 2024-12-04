import { radioArgTypes, pictogramArgTypes } from './radio-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const messageArgTypes = {
  status: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        valid: 'Succès',
        error: 'Erreur'
      }
    },
    description: 'Statut du message',
    options: ['default', 'valid', 'error'],
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  errorMessage: {
    if: { arg: 'status', eq: 'error' },
    control: 'text',
    description: 'Texte du message d\'erreur',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  validMessage: {
    if: { arg: 'status', eq: 'valid' },
    control: 'text',
    description: 'Texte du message de succès',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  }
};

const radiosGroupArgTypes = {
  id: {
    ...formArgTypes.id,
    type: {
      value: 'string',
      required: true
    }
  },
  legend: {
    ...formArgTypes.legend,
    description: 'Légende de l’ensemble des radios'
  },
  hint: {
    ...radioArgTypes.hint,
    description: 'Texte additionnel sous la légende'
  },
  size: {
    if: { arg: 'rich', eq: false },
    ...radioArgTypes.size,
    description: 'Taille des radios'
  },
  rich: {
    ...radioArgTypes.rich
  },
  hasPictogram: {
    ...pictogramArgTypes.hasPictogram
  },
  inline: {
    ...formArgTypes.inline
  },
  disabled: {
    ...radioArgTypes.disabled,
    description: 'Désactive l’ensemble des radios'
  },
  ...messageArgTypes
};

const getRadiosGroupData = (count = 3) => {
  const radios = [];
  const radioName = uniqueId('radios-group-name');
  for (let i = 1; i <= count; i++) {
    radios.push(
      {
        label: `Checkbox ${i}`,
        id: uniqueId('radio'),
        name: radioName,
        hint: '',
        disabled: false,
        rich: false,
        pictogramName: 'city-hall',
        pictogramAccent: 'défaut'
      }
    );
  }
  return radios;
};

const radiosGroupArgs = {
  legend: 'Légende pour l’ensemble des éléments',
  hint: formArgs.hint,
  size: 'md',
  disabled: formArgs.disabled,
  rich: false,
  hasPictogram: true,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  elements: getRadiosGroupData(),
  id: formArgs.id
};

const radiosGroupProps = (args) => {
  const radiosGroup = {
    id: args.id || uniqueId('radios-form'),
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint,
    rich: args.rich || radiosGroupArgs.rich,
    inline: args.inline,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: args.elements.map((radio) => {
      const radioProps = {
        type: 'radio',
        inline: args.inline,
        data: {
          label: radio.label,
          size: args.size,
          id: radio.id,
          name: radio.name,
          hint: radio.hint,
          disabled: radio.disabled,
          rich: args.rich
        }
      };

      return radioProps;
    })
  };

  for (let i = 0; i < radiosGroup.elements.length; i++) {
    if (radiosGroup.rich && args.hasPictogram) {
      radiosGroup.elements[i].data.pictogram = {
        name: args.elements[i].pictogramName || 'city-hall',
        accent: args.elements[i].pictogramAccent || 'défaut'
      };
    } else {
      radiosGroup.elements[i].pictogram = undefined;
    }
  }

  return radiosGroup;
};

export { radiosGroupArgTypes, radiosGroupArgs, radiosGroupProps, getRadiosGroupData };
