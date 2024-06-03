import { buttonArgTypes, buttonArgs } from './button-arg-types';

const getButtonArgTypes = (id) => {
  const button = {};

  const table = {
    table: {
      category: `button${id}`
    }
  };

  button[`label${id}`] = {
    ...buttonArgTypes.label,
    ...table
  };

  button[`kind${id}`] = {
    ...buttonArgTypes.kind,
    options: id === 1 ? [1, 2, 3, 4] : [2, 3, 4],
    ...table
  };

  button[`id${id}`] = { ...buttonArgTypes.id, ...table };
  button[`title${id}`] = { ...buttonArgTypes.title, ...table };
  button[`disabled${id}`] = { ...buttonArgTypes.disabled, ...table };
  button[`icon${id}`] = {
    if: { arg: 'hasIcon', eq: true },
    ...buttonArgTypes.icon,
    ...table
  };

  if (id > 2) {
    button[`hasButton${id}`] = {
      control: 'boolean',
      table: {
        category: `button${id}`
      }
    };

    if (id > 3) {
      button[`hasButton${id}`].if = { arg: `hasButton${id - 1}` };
    }

    button[`label${id}`].if = { arg: `hasButton${id}` };
    button[`kind${id}`].if = { arg: `hasButton${id}` };
    button[`id${id}`].if = { arg: `hasButton${id}` };
    button[`title${id}`].if = { arg: `hasButton${id}` };
    button[`disabled${id}`].if = { arg: `hasButton${id}` };
    button[`icon${id}`].if = { arg: `hasButton${id}` };
  }

  return button;
};

const buttonsGroupArgTypes = {
  size: {
    ...buttonArgTypes.size
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du groupe de boutons'
  },
  title: {
    control: 'text',
    description: 'Attribut \'title\' du groupe de boutons'
  },
  hasIcon: {
    ...buttonArgTypes.hasIcon,
    table: undefined
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    ...buttonArgTypes.iconPlace,
    table: undefined
  },
  groupMarkup: {
    control: { type: 'select' },
    description: 'Type de balise HTML pour la liste du groupe de boutons',
    options: ['ul', 'div']
  },
  inline: {
    control: {
      type: 'select',
      labels: {
        false: 'Vertical',
        true: 'En ligne',
        sm: 'En ligne à partir du breakpoint sm',
        md: 'En ligne à partir du breakpoint md',
        lg: 'En ligne à partir du breakpoint lg'
      }
    },
    description: 'Disposition des boutons<br>Valeurs:<br>- Vertical : les boutons sont disposés les uns en dessous des autres<br>- en ligne : les boutons sont disposés les uns à côté des autres<br>- En ligne à partir du breakpoint sm : les boutons sont disposés les uns à côté des autres à partir du breakpoint sm<br>- En ligne à partir du breakpoint md : les boutons sont disposés les uns à côté des autres à partir du breakpoint md<br>- En ligne à partir du breakpoint lg : les boutons sont disposés les uns à côté des autres à partir du breakpoint lg',
    options: [false, true, 'sm', 'md', 'lg']
  },
  equisized: {
    control: 'boolean',
    description: 'Les boutons ont la même largeur. Fixe la largeur des boutons à celle du plus grand bouton du groupe.'
  },
  align: {
    control: { type: 'select' },
    description: 'Alignement horizontal des boutons dans le groupe',
    options: ['left', 'center', 'right']
  },
  reverse: {
    if: { arg: 'align', eq: 'right' },
    description: 'Inverse l\'ordre des boutons en ligne lorsqu\'ils sont spécifiquement alignés à droite',
    control: 'boolean'
  },
  ...getButtonArgTypes(1),
  ...getButtonArgTypes(2),
  ...getButtonArgTypes(3),
  ...getButtonArgTypes(4),
  ...getButtonArgTypes(5)
};

const getButtonArgs = (id) => {
  const button = {};

  button[`label${id}`] = `${buttonArgs.label} ${id}`;
  button[`kind${id}`] = id === 1 ? 1 : 2;
  button[`id${id}`] = buttonArgs.id;
  button[`title${id}`] = buttonArgs.title;
  button[`disabled${id}`] = buttonArgs.disabled;
  button[`icon${id}`] = buttonArgs.icon;

  if (id > 2) {
    button[`hasButton${id}`] = false;
  }

  return button;
};

const buttonsGroupArgs = {
  size: buttonArgs.size,
  id: '',
  title: '',
  hasIcon: buttonArgs.hasIcon,
  iconPlace: buttonArgs.iconPlace,
  groupMarkup: 'ul',
  inline: false,
  equisized: false,
  align: 'left',
  reverse: false,
  ...getButtonArgs(1),
  ...getButtonArgs(2),
  ...getButtonArgs(3),
  ...getButtonArgs(4),
  ...getButtonArgs(5)
};

console.log('buttonsGroupArgTypes', buttonsGroupArgTypes);

export { buttonsGroupArgTypes, buttonsGroupArgs };
