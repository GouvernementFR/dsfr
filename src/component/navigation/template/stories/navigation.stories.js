import { uniqueId } from '../../../../core/template/stories/unique-id';
import { renderNavigation } from './navigation';
import { navigationArgs, navigationArgTypes, navigationProps, getItemArgs } from './navigation-arg-types';

const render = (args) => renderNavigation({ navigation: navigationProps(args) });

export default {
  id: 'navigation',
  title: 'DSFR/Component/Navigation',
  render: render,
  argTypes: navigationArgTypes,
  args: navigationArgs
};

export const NavigationStory = {
  args: {}
};

export const WithLinkStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [
      getItemArgs(uniqueId('nav')),
      getItemArgs(uniqueId('nav')),
      getItemArgs(uniqueId('nav'), 'link', true),
      getItemArgs(uniqueId('nav'))
    ]
  }
};

export const MenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [
      {
        ...getItemArgs(uniqueId('nav'), 'menu', true),
        items: [
          getItemArgs(uniqueId('nav')),
          getItemArgs(uniqueId('nav'), 'link', true),
          getItemArgs(uniqueId('nav'))
        ]
      },
      {
        ...getItemArgs(uniqueId('nav'), 'menu'),
        items: [
          getItemArgs(uniqueId('nav')),
          getItemArgs(uniqueId('nav')),
          getItemArgs(uniqueId('nav'))
        ]
      },
      {
        ...getItemArgs(uniqueId('nav'), 'menu'),
        items: [
          getItemArgs(uniqueId('nav')),
          {
            ...getItemArgs(uniqueId('nav'), 'menu'),
            items: [
              getItemArgs(uniqueId('nav')),
              getItemArgs(uniqueId('nav')),
              getItemArgs(uniqueId('nav'))
            ]
          },
          getItemArgs(uniqueId('nav'))
        ]
      }
    ]
  }
};

export const MegaMenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation'),
    items: [
      {
        ...getItemArgs(uniqueId('nav'), 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(uniqueId('nav'), 'mega-menu', true),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link', true),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(uniqueId('nav'), 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link'),
              getItemArgs(uniqueId('nav'), 'link')
            ]
          }
        ]
      }
    ]
  }
};
