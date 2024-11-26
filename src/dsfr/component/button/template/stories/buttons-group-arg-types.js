import { buttonArgTypes, buttonArgs } from './button-arg-types';

const buttonsGroupArgTypes = {
  size: {
    ...buttonArgTypes.size,
    description: 'Taille des boutons'
  },
  hasIcon: {
    ...buttonArgTypes.hasIcon,
    description: 'Les boutons ont une icône',
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
  }
};

const buttonsGroupArgs = {
  size: buttonArgs.size,
  hasIcon: buttonArgs.hasIcon,
  iconPlace: buttonArgs.iconPlace,
  groupMarkup: 'ul',
  inline: false,
  equisized: false,
  align: '',
  reverse: false,
  buttons: [
    {
      label: 'libellé du bouton 1',
      kind: 1,
      icon: 'checkbox-circle-line',
      disabled: false,
      id: '',
      title: ''
    },
    {
      label: 'libellé du bouton 2',
      kind: 2,
      icon: 'checkbox-circle-line',
      disabled: false,
      id: '',
      title: ''
    },
    {
      label: 'libellé du bouton 3',
      kind: 2,
      icon: 'checkbox-circle-line',
      disabled: false,
      id: '',
      title: ''
    }
  ]
};

const buttonsGroupProps = (args) => {
  const buttonsGroup = {
    size: args.size,
    id: args.id || undefined,
    title: args.title || undefined,
    buttons: args.buttons,
    groupMarkup: args.groupMarkup || buttonsGroupArgs.groupMarkup,
    inline: args.inline,
    align: args.align,
    equisized: args.equisized,
    reverse: args.reverse
  };

  if (args.hasIcon) {
    buttonsGroup.iconPlace = args.iconPlace;
    for (let i = 0; i < buttonsGroup.buttons.length; i++) {
      buttonsGroup.buttons[i].icon = buttonsGroup.buttons[i].icon || 'checkbox-circle-line';
    }
  } else {
    for (let i = 0; i < buttonsGroup.buttons.length; i++) {
      buttonsGroup.buttons[i].icon = undefined;
    }
  }

  return buttonsGroup;
};

export { buttonsGroupArgTypes, buttonsGroupArgs, buttonsGroupProps };
