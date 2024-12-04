import { uniqueId } from '../../../../core/template/stories/unique-id';

const sidemenuArgTypes = {
  hasTitle: {
    control: 'boolean',
    description: 'Si true, ajoute un titre au menu latéral'
  },
  title: {
    if: {
      arg: 'hasTitle',
      eq: true
    },
    control: 'text',
    description: 'Titre du menu latéral',
    type: {
      value: 'string',
      required: true
    }
  },
  modifier: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        sticky: 'Sticky',
        right: 'Aligné à droite',
        'sticky-full-height': 'Sticky et sur toute la hauteur'
      }
    },
    description: 'Modifier de style de sidemenu',
    options: ['default', 'sticky', 'right', 'sticky-full-height']
  },
  buttonLabel: {
    control: 'text',
    description: 'Titre du bouton accordéon en mobile',
    type: {
      value: 'string',
      required: true
    }
  }
};

const getItemArgs = (id, kind = 'link', isActive = false) => {
  const item = {};

  item.id = kind === 'link' ? `sidemenu-item-${id}` : `sidemenu-${id}`;
  item.label = `Titre du lien ${id}`;
  item.href = kind === 'link' && '#';
  item.kind = kind;
  item.active = isActive;
  item.collapsable = kind === 'menu';
  item.collapseId = kind === 'menu' ? `sidemenu-${id}` : undefined;

  return item;
};

const sidemenuArgs = {
  hasTitle: true,
  title: 'Titre de rubrique',
  buttonLabel: 'Dans cette rubrique',
  modifier: 'default',
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
    }
  ]
};

const sidemenuProps = (args) => {
  const sidemenu = {
    title: args.hasTitle ? args.title : undefined,
    titleId: args.titleId || 'sidemenu-title',
    buttonLabel: args.buttonLabel || sidemenuArgs.buttonLabel,
    collapseId: args.collapseId || uniqueId('sidemenu-collapse'),
    items: args.items || sidemenuArgs.items
  };

  if (args.modifier !== 'default') {
    sidemenu.modifier = args.modifier;
  }

  return sidemenu;
};

export { sidemenuArgTypes, sidemenuArgs, sidemenuProps };
