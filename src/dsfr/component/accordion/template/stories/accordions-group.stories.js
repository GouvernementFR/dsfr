import { renderAccordionsGroup } from './accordion';
import { accordionsGroupArgs, accordionsGroupArgTypes, accordionsGroupProps } from './accordions-group-arg-types';

const render = (args) => renderAccordionsGroup({ accordionsGroup: accordionsGroupProps(args) });

export default {
  id: 'accordions-group',
  title: 'DSFR/Component/Accordion/Accordions-Group',
  render: render,
  argTypes: accordionsGroupArgTypes,
  args: accordionsGroupArgs
};

export const AccordionsGroupStory = {
  tags: ['autodocs'],
  args: {}
};
