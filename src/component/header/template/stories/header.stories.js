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
    navigationItems: []
  }
};

export const ToolLinksStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasToolLinks: true,
    menuId: uniqueId('menu'),
    menuModalId: uniqueId('menu-modal'),
    navigationItems: []
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
    navigationItems: []
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
    navigationItems: []
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
    navigationItems: []
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
    navigationItems: []
  }
};

export const VerticalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    navigationItems: []
  }
};

export const HorizontalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('header'),
    hasBrandOperator: true,
    brandOperatorSrc: 'img/placeholder.16x9.png',
    brandOperatorStyle: 'max-width: 9.0625rem;',
    navigationItems: []
  }
};
