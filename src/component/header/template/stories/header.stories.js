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
  tags: ['!dev'],
  args: {}
};

export const MinStory = {
  tags: ['autodocs', '!dev'],
  args: {
    brandService: '',
    brandTagline: '',
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
    navigationItems: []
  }
};

export const ToolLinksStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasToolLinks: true,
    navigationItems: []
  }
};

export const SearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSearch: true,
    navigationItems: []
  }
};

export const ToolLinksSearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasToolLinks: true,
    hasSearch: true,
    navigationItems: []
  }
};

export const TranslateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasTranslate: true,
    translateButtonKind: 3,
    navigationItems: []
  }
};

export const ToolLinksTranslateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasToolLinks: true,
    hasTranslate: true,
    navigationItems: []
  }
};

export const VerticalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasBrandOperator: true,
    navigationItems: []
  }
};

export const HorizontalOperatorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasBrandOperator: true,
    brandOperatorSrc: 'img/placeholder.16x9.png',
    brandOperatorStyle: 'max-width: 9.0625rem;',
    navigationItems: []
  }
};
