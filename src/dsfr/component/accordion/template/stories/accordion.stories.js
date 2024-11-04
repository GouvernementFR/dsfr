import { renderAccordion } from './accordion';
import { accordionArgs, accordionArgTypes, accordionProps } from './accordion-arg-types';

const render = (args) => renderAccordion({ accordion: accordionProps(args) });

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
