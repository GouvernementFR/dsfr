import { uniqueId } from '../../../../core/template/stories/unique-id';
import { renderHeader } from './header';
import { headerArgs, headerArgTypes, headerProps, getItemArgs } from './header-arg-types';

const render = (args) => renderHeader({ header: headerProps(args) });

export default {
  id: 'header',
  title: 'DSFR/Component/Header',
  render: render,
  argTypes: headerArgTypes,
  args: headerArgs
};

export const HeaderStory = {
  args: {}
};

export const MinStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    brandService: '',
    brandTagline: '',
    menuModalId: uniqueId('menu-modal'),
    navigationItems: [
      getItemArgs(1),
      getItemArgs(2),
      getItemArgs(3)
    ]
  }
};

export const ServiceStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasNavigation: false
  }
};

export const ToolLinksStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasNavigation: false,
    toolLinks: {
      buttons: [
        {
          classes: ['fr-btn--team'],
          url: '#',
          label: 'Contact',
          markup: 'a'
        },
        {
          classes: ['fr-btn--briefcase'],
          url: '#',
          label: 'Espace recruteur',
          markup: 'a'
        },
        {
          classes: ['fr-btn--account'],
          url: '#',
          label: 'Espace particulier',
          markup: 'a'
        }
      ]
    }
  }
};

export const SearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasSearch: true,
    searchId: uniqueId('search'),
    searchModalId: uniqueId('search-modal'),
    searchBtnId: uniqueId('search-btn'),
    searchInputId: uniqueId('search-input'),
    hasNavigation: false
  }
};

export const ToolLinksSearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasSearch: true,
    searchId: uniqueId('search'),
    searchModalId: uniqueId('search-modal'),
    searchBtnId: uniqueId('search-btn'),
    searchInputId: uniqueId('search-input'),
    hasNavigation: false,
    toolLinks: {
      buttons: [
        {
          classes: ['fr-btn--team'],
          url: '#',
          label: 'Contact',
          markup: 'a'
        },
        {
          classes: ['fr-btn--briefcase'],
          url: '#',
          label: 'Espace recruteur',
          markup: 'a'
        },
        {
          classes: ['fr-btn--account'],
          url: '#',
          label: 'Espace particulier',
          markup: 'a'
        }
      ]
    }
  }
};

export const TranslateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasTranslate: true,
    translateId: uniqueId('translate'),
    translateCollapseId: uniqueId('translate-collapse'),
    translateButtonKind: 3,
    hasNavigation: false
  }
};

export const ToolLinksTranslateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    hasTranslate: true,
    translateId: uniqueId('translate'),
    translateCollapseId: uniqueId('translate-collapse'),
    translateButtonKind: 3,
    hasNavigation: false
  }
};

export const VerticalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    hasNavigation: false
  }
};

export const HorizontalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    brandOperatorSrc: 'img/placeholder.16x9.png',
    brandOperatorStyle: 'max-width: 9.0625rem;',
    hasNavigation: false
  }
};
