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
  tags: ['!autodocs'],
  args: {}
};

export const LinkStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation-links'),
    items: [
      getItemArgs(uniqueId('nav-links')),
      getItemArgs(uniqueId('nav-links')),
      getItemArgs(uniqueId('nav-links'), 'link', true),
      getItemArgs(uniqueId('nav-links'))
    ]
  }
};

export const MenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation-menus'),
    items: [
      {
        ...getItemArgs(uniqueId('nav-menus'), 'menu', true),
        items: [
          getItemArgs(uniqueId('nav-menus')),
          getItemArgs(uniqueId('nav-menus'), 'link', true),
          getItemArgs(uniqueId('nav-menus'))
        ]
      },
      {
        ...getItemArgs(uniqueId('nav-menus'), 'menu'),
        items: [
          getItemArgs(uniqueId('nav-menus')),
          getItemArgs(uniqueId('nav-menus')),
          getItemArgs(uniqueId('nav-menus'))
        ]
      },
      {
        ...getItemArgs(uniqueId('nav-menus'), 'menu'),
        items: [
          getItemArgs(uniqueId('nav-menus')),
          {
            ...getItemArgs(uniqueId('nav-menus'), 'menu'),
            items: [
              getItemArgs(uniqueId('nav-menus')),
              getItemArgs(uniqueId('nav-menus')),
              getItemArgs(uniqueId('nav-menus'))
            ]
          },
          getItemArgs(uniqueId('nav-menus'))
        ]
      }
    ]
  }
};

export const MegaMenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('navigation-mega-menus'),
    items: [
      {
        ...getItemArgs(uniqueId('nav-mega-menus'), 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(uniqueId('nav-mega-menus'), 'mega-menu', true),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link', true),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          }
        ]
      },
      {
        ...getItemArgs(uniqueId('nav-mega-menus'), 'mega-menu'),
        categories: [
          {
            label: 'Catégorie 1',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 2',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 3',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          },
          {
            label: 'Catégorie 4',
            href: '#',
            items: [
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link'),
              getItemArgs(uniqueId('nav-mega-menus'), 'link')
            ]
          }
        ]
      }
    ]
  }
};
