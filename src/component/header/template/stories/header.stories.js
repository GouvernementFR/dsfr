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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const MinStory = {
  tags: ['!dev'],
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
  tags: ['!dev'],
  args: {
    navigationItems: []
  }
};

export const ToolLinksStory = {
  tags: ['!dev'],
  args: {
    hasToolLinks: true,
    navigationItems: []
  }
};

export const SearchStory = {
  tags: ['!dev'],
  args: {
    hasSearch: true,
    navigationItems: []
  }
};

export const ToolLinksSearchStory = {
  tags: ['!dev'],
  args: {
    hasToolLinks: true,
    hasSearch: true,
    navigationItems: []
  }
};

export const TranslateStory = {
  tags: ['!dev'],
  args: {
    hasTranslate: true,
    translateButtonKind: 3,
    navigationItems: []
  }
};

export const ToolLinksTranslateStory = {
  tags: ['!dev'],
  args: {
    hasToolLinks: true,
    hasTranslate: true,
    navigationItems: []
  }
};

export const VerticalOperatorStory = {
  tags: ['!dev'],
  args: {
    hasBrandOperator: true,
    navigationItems: []
  }
};

export const HorizontalOperatorStory = {
  tags: ['!dev'],
  args: {
    hasBrandOperator: true,
    brandOperatorSrc: 'img/placeholder.16x9.png',
    brandOperatorStyle: 'max-width: 9.0625rem;',
    navigationItems: []
  }
};
