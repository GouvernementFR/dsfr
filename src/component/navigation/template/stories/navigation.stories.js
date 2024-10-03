import { renderNavigation } from './navigation';
import { navigationArgs, navigationArgTypes, navigationProps, getItemArgs } from './navigation-arg-types';

const render = (args) => renderNavigation({ navigation: { ...navigationProps(args), attributes: { style: 'margin-bottom: 400px' } } });

export default {
  id: 'navigation',
  title: 'DSFR/Component/Navigation',
  render: render,
  argTypes: navigationArgTypes,
  args: navigationArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const LinkStory = {
  tags: ['!dev'],
  args: {
    items: [
      getItemArgs(1),
      getItemArgs(2),
      getItemArgs(3, 'link', true),
      getItemArgs(4)
    ]
  }
};

export const MenuStory = {
  tags: ['!dev'],
  args: {
    items: [
      {
        ...getItemArgs(1, 'menu', true),
        items: [
          getItemArgs('1-1'),
          getItemArgs('1-2', 'link', true),
          getItemArgs('1-3')
        ]
      },
      {
        ...getItemArgs(2, 'menu'),
        items: [
          getItemArgs('2-1'),
          getItemArgs('2-2'),
          getItemArgs('2-3')
        ]
      },
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
  }
};

export const MegaMenuStory = {
  tags: ['!dev'],
  args: {
    items: [
      {
        ...getItemArgs(1, 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs('1-1-1', 'link'),
              getItemArgs('1-1-2', 'link'),
              getItemArgs('1-1-3', 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs('1-2-1', 'link'),
              getItemArgs('1-2-2', 'link'),
              getItemArgs('1-2-3', 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs('1-3-1', 'link'),
              getItemArgs('1-3-2', 'link'),
              getItemArgs('1-3-3', 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs('1-4-2', 'link'),
              getItemArgs('1-4-1', 'link'),
              getItemArgs('1-4-3', 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(2, 'mega-menu', true),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs('2-1-1', 'link'),
              getItemArgs('2-1-2', 'link'),
              getItemArgs('2-1-3', 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs('2-2-1', 'link'),
              getItemArgs('2-2-2', 'link', true),
              getItemArgs('2-2-3', 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs('2-3-1', 'link'),
              getItemArgs('2-3-2', 'link'),
              getItemArgs('2-3-3', 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs('2-4-1', 'link'),
              getItemArgs('2-4-2', 'link'),
              getItemArgs('2-4-3', 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(3, 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs('3-1-1', 'link'),
              getItemArgs('3-1-2', 'link'),
              getItemArgs('3-1-3', 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs('3-2-1', 'link'),
              getItemArgs('3-2-2', 'link'),
              getItemArgs('3-2-3', 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs('3-3-1', 'link'),
              getItemArgs('3-3-2', 'link'),
              getItemArgs('3-3-3', 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs('3-4-1', 'link'),
              getItemArgs('3-4-2', 'link'),
              getItemArgs('3-4-3', 'link')
            ]
          }
        ]
      }
    ]
  }
};
