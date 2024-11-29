import { renderAccordion } from './accordion';
import { accordionArgs, accordionArgTypes, accordionProps } from './accordion-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderAccordion({ accordion: accordionProps({ ...args, id: uniqueId('accordion') }) });

export default {
  id: 'accordion',
  title: 'DSFR/Component/Accordion',
  render: render,
  argTypes: accordionArgTypes,
  args: accordionArgs
};

export const AccordionStory = {
  tags: ['autodocs'],
  args: {}
};
