import { radioArgTypes, radioArgs } from './radio-arg-types';
import { formArgTypes, formArgs } from '../../../form/template/stories/form-arg-types';

const getradioArgTypes = (id) => {
  const radio = {};

  const table = {
    table: {
      category: `radio${id}`
    }
  };

  radio[`label${id}`] = { ...radioArgTypes.label, ...table };
  radio[`size${id}`] = { ...radioArgTypes.size, ...table };
  radio[`id${id}`] = { ...radioArgTypes.id, ...table };
  radio[`name${id}`] = { ...radioArgTypes.name, ...table };
  radio[`hint${id}`] = { ...radioArgTypes.hint, ...table };
  radio[`pictogramName${id}`] = { ...radioArgTypes.pictogramName, ...table };
  radio[`pictogramAccent${id}`] = { ...radioArgTypes.pictogramAccent, ...table };
  radio[`disabled${id}`] = { ...radioArgTypes.disabled, ...table };

  if (id > 2) {
    radio[`hasradio${id}`] = {
      control: 'boolean',
      table: {
        category: `radio${id}`
      }
    };

    if (id > 3) {
      radio[`hasradio${id}`].if = { arg: `hasradio${id - 1}` };
    }

    radio[`label${id}`].if = { arg: `hasradio${id}` };
    radio[`id${id}`].if = { arg: `hasradio${id}` };
    radio[`disabled${id}`].if = { arg: `hasradio${id}` };
    radio[`size${id}`].if = { arg: `hasradio${id}` };
    radio[`name${id}`].if = { arg: `hasradio${id}` };
    radio[`pictogramName${id}`].if = { arg: `hasradio${id}` };
    radio[`pictogramAccent${id}`].if = { arg: `hasradio${id}` };
    radio[`hint${id}`].if = { arg: `hasradio${id}` };
  }

  return radio;
};

const radiosGroupArgTypes = {
  id: {
    ...formArgTypes.id
  },
  legend: {
    ...formArgTypes.legend
  },
  hint: {
    ...radioArgTypes.hint
  },
  rich: {
    ...radioArgTypes.rich
  },
  inline: {
    ...radioArgTypes.inline
  },
  disabled: {
    ...radioArgTypes.disabled
  },
  status: {
    ...radioArgTypes.status
  },
  errorMessage: {
    ...radioArgTypes.errorMessage
  },
  validMessage: {
    ...radioArgTypes.validMessage
  },
  ...getradioArgTypes(1),
  ...getradioArgTypes(2),
  ...getradioArgTypes(3),
  ...getradioArgTypes(4),
  ...getradioArgTypes(5)
};

const getradioArgs = (id) => {
  const radio = {};

  radio[`id${id}`] = `${radioArgs.id}-${id}`;
  radio[`label${id}`] = `${radioArgs.label} ${id}`;
  radio[`size${id}`] = radioArgs.size;
  radio[`name${id}`] = radioArgs.name;
  radio[`hint${id}`] = radioArgs.hint;
  radio[`pictogramName${id}`] = radioArgs.pictogram.name;
  radio[`pictogramAccent${id}`] = radioArgs.pictogram.accent;
  radio[`disabled${id}`] = radioArgs.disabled;

  if (id > 2) {
    radio[`hasradio${id}`] = false;
  }

  return radio;
};

const radiosGroupArgs = {
  id: formArgs.id,
  legend: formArgs.legend,
  hint: formArgs.hint,
  disabled: formArgs.disabled,
  rich: false,
  inline: formArgs.inline,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  ...getradioArgs(1),
  ...getradioArgs(2),
  ...getradioArgs(3),
  ...getradioArgs(4),
  ...getradioArgs(5)
};

const radiosGroupProps = (args) => {
  const radios = [];

  for (let i = 1; i <= 5; i++) {
    if (i < 3 || args[`hasradio${i}`]) {
      const radio = {
        type: 'radio',
        inline: args.inline,
        data: {
          id: args[`id${i}`] || undefined,
          label: args[`label${i}`] || radioArgs.label,
          size: args[`size${i}`] || radioArgs.size,
          name: args[`name${i}`] || radioArgs.name,
          rich: args.rich || radiosGroupArgs.rich,
          hint: args[`hint${i}`] !== '' ? args[`hint${i}`] || radioArgs.hint : undefined,
          disabled: args[`disabled${i}`]
        }
      };

      if (radio.data.rich) {
        radio.data.pictogram = {
          name: args[`pictogramName${i}`] || radioArgs.pictogram.name,
          accent: args[`pictogramAccent${i}`] || radioArgs.pictogram.accent
        };
      }

      radios.push(radio);
    }
  }

  console.log('radios', radios);
  const radiosGroup = {
    id: args.id || undefined,
    legend: args.legend,
    disabled: args.disabled,
    hint: args.hint,
    inline: args.inline,
    choice: true,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: radios
  };

  return radiosGroup;
};

export { radiosGroupArgTypes, radiosGroupArgs, radiosGroupProps };
