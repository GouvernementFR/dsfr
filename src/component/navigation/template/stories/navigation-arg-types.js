const navigationArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id de la navigation principale',
    type: {
      value: 'string',
      required: true
    }
  },
  ariaLabel: {
    control: 'text',
    description: 'Attribut aria-label de la navigation principale',
    type: {
      value: 'string',
      required: true
    }
  }
};

const getItemArgs = (id, type = 'link', isActive = false) => {
  const item = {};

  item.id = type === 'link' ? `navigation-item-${id}` : `navigation-${id}`;
  item.type = type;
  item.active = isActive;
  item.collapsable = type === 'menu' || type === 'mega-menu';
  item.collapseId = type === 'menu' || type === 'mega-menu' ? `navigation-${id}` : undefined;

  switch (type) {
    case 'link':
      item.label = `Titre du lien ${id}`;
      item.href = '#';
      break;
    case 'menu':
      item.label = `Menu ${id}`;
      break;
    case 'mega-menu':
      item.label = `Mega menu ${id}`;
      item.close = 'Fermer le menu';
      item.leader = {
        title: 'Titre éditorialisé',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        link: {
          id: 'link-leader-' + id,
          label: 'Voir toute la rubrique',
          iconPlace: 'right',
          icon: 'arrow-right-line'
        }
      };
      break;
    default:
      break;
  }

  return item;
};

const navigationArgs = {
  id: 'header-navigation',
  ariaLabel: 'Menu principal',
  items: [
    {
      ...getItemArgs(1, 'menu', true),
      items: [
        getItemArgs('1-1'),
        getItemArgs('1-2', 'link', true),
        getItemArgs('1-3')
      ]
    },
    getItemArgs(2),
    {
      ...getItemArgs(3, 'menu'),
      items: [
        getItemArgs('3-1'),
        {
          ...getItemArgs('3-2', 'menu'),
          items: [
            getItemArgs('3-2-1'),
            getItemArgs('3-2-2'),
            getItemArgs('3-2-3')
          ]
        },
        getItemArgs('3-3')
      ]
    },
    {
      ...getItemArgs(4, 'mega-menu'),
      categories: [
        {
          label: 'Catégorie 1',
          href: '#',
          items: [
            getItemArgs('4-1-1', 'link'),
            getItemArgs('4-1-2', 'link'),
            getItemArgs('4-1-3', 'link')
          ]
        },
        {
          label: 'Catégorie 2',
          href: '#',
          items: [
            getItemArgs('4-2-1', 'link'),
            getItemArgs('4-2-2', 'link'),
            getItemArgs('4-2-3', 'link')
          ]
        },
        {
          label: 'Catégorie 3',
          href: '#',
          items: [
            getItemArgs('4-3-1', 'link'),
            getItemArgs('4-3-2', 'link'),
            getItemArgs('4-3-3', 'link')
          ]
        },
        {
          label: 'Catégorie 4',
          href: '#',
          items: [
            getItemArgs('4-4-1', 'link'),
            getItemArgs('4-4-2', 'link'),
            getItemArgs('4-4-3', 'link')
          ]
        }
      ]
    }
  ]
};

const navigationProps = (args) => {
  const navigation = {
    id: args.id || navigationArgs.id,
    ariaLabel: args.ariaLabel || navigationArgs.ariaLabel,
    items: args.items || navigationArgs.items
  };

  return navigation;
};

export { navigationArgTypes, navigationArgs, navigationProps, getItemArgs };
