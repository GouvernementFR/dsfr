import { renderTabs } from './tab';
import { tabsArgs, tabsArgTypes, tabsProps } from './tabs-arg-types';

const render = (args) => renderTabs({ tabs: tabsProps(args) });

export default {
  id: 'tabs',
  title: 'DSFR/Component/Tab',
  render: render,
  argTypes: tabsArgTypes,
  args: tabsArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
