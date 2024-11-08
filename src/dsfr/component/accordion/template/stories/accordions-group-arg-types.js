import { accordionArgs } from './accordion-arg-types';

const accordionsGroupArgTypes = {
  group: {
    control: 'boolean',
    description: 'Accordéons groupés (ferme le précédent à l’ouverture d\'un autre)'
  }
};

const getAccordionArgs = (id) => {
  const accordion = {
    id: `${accordionArgs.id}-${id}`,
    label: `${accordionArgs.label} ${id}`,
    content: `${accordionArgs.content}`
  };

  return accordion;
};

const accordionsGroupArgs = {
  group: true,
  accordions: [
    getAccordionArgs(1),
    getAccordionArgs(2),
    getAccordionArgs(3),
    getAccordionArgs(4)
  ]
};

const accordionsGroupProps = (args) => {
  const accordionsGroup = {
    group: args.group === true,
    accordions: accordionsGroupArgs.accordions
  };

  return accordionsGroup;
};

export { accordionsGroupArgTypes, accordionsGroupArgs, accordionsGroupProps };
