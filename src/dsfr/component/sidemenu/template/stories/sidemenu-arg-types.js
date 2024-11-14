import { uniqueId } from '../../../../core/template/stories/unique-id';

const sidemenuArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du menu latéral',
    kind: {
      value: 'string',
      required: true
    }
  },
  modifier: {
    control: { type: 'select' },
    description: 'Modifier de style de sidemenu',
    options: ['sticky', 'right', 'sticky-full-height']
  },
  buttonLabel: {
    control: 'text',
    description: 'Titre du bouton accordéon en mobile',
    kind: {
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
  modifier: undefined,
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
    title: args.title || sidemenuArgs.title,
    titleId: 'sidemenu-title',
    buttonLabel: args.buttonLabel || sidemenuArgs.buttonLabel,
    modifier: args.modifier || sidemenuArgs.modifier,
    collapseId: uniqueId('sidemenu'),
    items: args.items || sidemenuArgs.items
  };

  return sidemenu;
};

export { sidemenuArgTypes, sidemenuArgs, sidemenuProps };
