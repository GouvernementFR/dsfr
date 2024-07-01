import { badgeArgTypes, badgeArgs } from './badge-arg-types';

const getBadgeArgTypes = (id) => {
  const badge = {};

  const table = {
    table: {
      category: `badge${id}`
    }
  };

  badge[`label${id}`] = {
    ...badgeArgTypes.label,
    ...table
  };

  badge[`type${id}`] = {
    ...badgeArgTypes.type,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`id${id}`] = { ...badgeArgTypes.id, ...table };

  badge[`accent${id}`] = {
    if: { arg: 'type', eq: 'accent' },
    ...badgeArgTypes.accent,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`status${id}`] = {
    if: { arg: 'type', eq: 'status' },
    ...badgeArgTypes.status,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`icon${id}`] = {
    if: { arg: 'hasIcon', eq: true },
    ...badgeArgTypes.icon,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`hasIcon${id}`] = {
    if: { arg: 'type', eq: 'accent' },
    ...badgeArgTypes.hasIcon,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`hasNoIcon${id}`] = {
    if: { arg: 'type', eq: 'status' },
    ...badgeArgTypes.hasNoIcon,
    table: { ...table.table, subcategory: 'type' }
  };

  badge[`ellipsis${id}`] = {
    ...badgeArgTypes.ellipsis,
    ...table
  };

  return badge;
};

const badgesGroupArgTypes = {
  size: {
    ...badgeArgTypes.size
  },
  groupMarkup: {
    control: { type: 'select' },
    description: 'Type de balise HTML pour la liste du groupe de boutons',
    options: ['div', 'ul']
  },
  ...getBadgeArgTypes(1),
  ...getBadgeArgTypes(2),
  ...getBadgeArgTypes(3)
};

const getBadgeArgs = (id) => {
  const badge = {};

  badge[`label${id}`] = `${badgeArgs.label} ${id}`;
  badge[`type${id}`] = 'default';
  badge[`id${id}`] = '';
  badge[`accent${id}`] = 'green-tilleul-verveine';
  badge[`status${id}`] = 'success';
  badge[`hasIcon${id}`] = false;
  badge[`hasNoIcon${id}`] = false;
  badge[`ellipsis${id}`] = false;

  return badge;
};

const badgesGroupArgs = {
  size: badgeArgs.size,
  groupMarkup: 'div',
  ...getBadgeArgs(1),
  ...getBadgeArgs(2),
  ...getBadgeArgs(3)
};

const badgesGroupProps = (args) => {
  const badges = [];

  for (let i = 1; i <= 3; i++) {
    const badge = {
      label: args[`label${i}`] || badgeArgs.label,
      ellipsis: args[`ellipsis${i}`] || badgeArgs.ellipsis,
      id: args[`id${i}`] || undefined
    };

    switch (args[`type${i}`]) {
      case 'status':
        badge.type = args[`status${i}`] || badgeArgs.status;
        break;
      case 'accent':
        if (args[`accent${i}`] !== 'default') badge.accent = args[`accent${i}`] || badgeArgs.accent;
        break;
    }

    if (args[`hasIcon${i}`]) {
      badge.icon = args[`icon${i}`];
    }

    if (args[`hasNoIcon${i}`]) {
      badge.icon = false;
    }

    badges.push(badge);
  }

  const badgesGroup = {
    size: args.size,
    groupMarkup: args.groupMarkup || badgesGroupArgs.groupMarkup,
    badges: badges
  };

  console.log('badgesGroup', badgesGroup);

  return badgesGroup;
};

export { badgesGroupArgTypes, badgesGroupArgs, badgesGroupProps };
