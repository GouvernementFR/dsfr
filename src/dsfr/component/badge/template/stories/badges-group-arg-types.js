import { badgeArgTypes, badgeArgs } from './badge-arg-types';

const badgesGroupArgTypes = {
  size: {
    ...badgeArgTypes.size
  },
  groupMarkup: {
    control: { type: 'select' },
    description: 'Type de balise HTML pour la liste du groupe de badges',
    options: ['div', 'ul']
  }
};

const badgesGroupArgs = {
  size: badgeArgs.size,
  groupMarkup: 'ul',
  badges: [
    {
      label: `${badgeArgs.label} 1`,
      accent: 'green-tilleul-verveine',
      type: undefined,
      status: undefined,
      hasIcon: false,
      hasNoIcon: false,
      ellipsis: false
    },
    {
      label: `${badgeArgs.label} 2`,
      accent: 'orange-terre-battue',
      type: undefined,
      status: undefined,
      hasIcon: false,
      hasNoIcon: false,
      ellipsis: false
    },
    {
      label: `${badgeArgs.label} 3`,
      accent: 'blue-ecume',
      type: undefined,
      status: undefined,
      hasIcon: false,
      hasNoIcon: false,
      ellipsis: false
    }
  ]
};

const badgesGroupProps = (args) => {
  const badgesGroup = {
    size: args.size,
    groupMarkup: args.groupMarkup || badgesGroupArgs.groupMarkup,
    badges: args.badges
  };

  return badgesGroup;
};

export { badgesGroupArgTypes, badgesGroupArgs, badgesGroupProps };
