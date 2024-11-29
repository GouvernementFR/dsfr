import { uniqueId } from '../../../../core/template/stories/unique-id';
import { accordionArgs } from './accordion-arg-types';

const accordionsGroupArgTypes = {
  group: {
    control: 'boolean',
    description: 'Accordéons groupés (ferme le précédent à l’ouverture d\'un autre)'
  },
  accordions: {
    control: 'object',
    description: 'Tableau des accordéons',
    content: {
      value: 'array'
    }
  }
};

const getAccordionArgs = (id) => {
  const accordion = {
    label: `${accordionArgs.label} ${id}`,
    content: `${accordionArgs.content}`
  };

  return accordion;
};

const accordionsGroupArgs = (accordions) => {
  accordions = accordions || [
    getAccordionArgs(1),
    getAccordionArgs(2),
    getAccordionArgs(3),
    getAccordionArgs(4)
  ];
  accordions = accordions.map(accordion => ({ ...accordion, id: uniqueId('accordion-group') }));
  return {
    group: true,
    accordions: accordions
  };
};

const accordionsGroupProps = (args) => {
  const accordionsGroup = {
    group: args.group === true,
    accordions: accordionsGroupArgs(args.accordions).accordions
  };

  return accordionsGroup;
};

export { accordionsGroupArgTypes, accordionsGroupArgs, accordionsGroupProps };
