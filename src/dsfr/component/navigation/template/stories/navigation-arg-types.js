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
      item.label = 'Intitulé lien';
      item.href = '#';
      break;
    case 'menu':
      item.label = 'Intitulé menu';
      break;
    case 'mega-menu':
      item.label = 'Intitulé mega menu';
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
      ...getItemArgs('01', 'menu', true),
      items: [
        getItemArgs('01-1'),
        getItemArgs('01-2', 'link', true),
        getItemArgs('01-3')
      ]
    },
    getItemArgs('02'),
    {
      ...getItemArgs('03', 'menu'),
      items: [
        getItemArgs('03-1'),
        {
          ...getItemArgs('03-2', 'menu'),
          items: [
            getItemArgs('03-2-1'),
            getItemArgs('03-2-2'),
            getItemArgs('03-2-3')
          ]
        },
        getItemArgs('03-3')
      ]
    },
    {
      ...getItemArgs('04', 'mega-menu'),
      categories: [
        {
          label: 'Catégorie 1',
          href: '#',
          items: [
            getItemArgs('04-1-1', 'link'),
            getItemArgs('04-1-2', 'link'),
            getItemArgs('04-1-3', 'link')
          ]
        },
        {
          label: 'Catégorie 2',
          href: '#',
          items: [
            getItemArgs('04-2-1', 'link'),
            getItemArgs('04-2-2', 'link'),
            getItemArgs('04-2-3', 'link')
          ]
        },
        {
          label: 'Catégorie 3',
          href: '#',
          items: [
            getItemArgs('04-3-1', 'link'),
            getItemArgs('04-3-2', 'link'),
            getItemArgs('04-3-3', 'link')
          ]
        },
        {
          label: 'Catégorie 4',
          href: '#',
          items: [
            getItemArgs('04-4-1', 'link'),
            getItemArgs('04-4-2', 'link'),
            getItemArgs('04-4-3', 'link')
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
