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

export const TabsStory = {
  tags: ['autodocs'],
  args: {}
};
