import { accordionArgTypes, accordionArgs } from './accordion-arg-types';

const getAccordionArgTypes = (id) => {
  const accordion = {};

  const table = {
    table: {
      category: `accordion${id}`
    }
  };

  accordion[`id${id}`] = { ...accordionArgTypes.id, ...table };

  accordion[`label${id}`] = {
    ...accordionArgTypes.label,
    ...table
  };

  accordion[`content${id}`] = {
    ...accordionArgTypes.content,
    ...table
  };

  return accordion;
};

const accordionsGroupArgTypes = {
  group: {
    control: 'boolean',
    description: 'Accordéons groupés (ferme le précédent à l’ouverture d\'un autre)'
  },
  ...getAccordionArgTypes(1),
  ...getAccordionArgTypes(2),
  ...getAccordionArgTypes(3),
  ...getAccordionArgTypes(4)
};

const getAccordionArgs = (id) => {
  const accordion = {};

  accordion[`id${id}`] = `${accordionArgs.id}-${id}`;
  accordion[`label${id}`] = `${accordionArgs.label} ${id}`;
  accordion[`content${id}`] = `${accordionArgs.content}`;

  return accordion;
};

const accordionsGroupArgs = {
  group: true,
  ...getAccordionArgs(1),
  ...getAccordionArgs(2),
  ...getAccordionArgs(3),
  ...getAccordionArgs(4)
};

const accordionsGroupProps = (args) => {
  const accordions = [];

  for (let i = 1; i <= 4; i++) {
    const accordion = {
      label: args[`label${i}`] || accordionArgs.label,
      content: args[`content${i}`] || accordionArgs.content,
      id: args[`id${i}`] || undefined
    };

    accordions.push(accordion);
  }

  const accordionsGroup = {
    group: args.group === true,
    accordions: accordions
  };

  return accordionsGroup;
};

export { accordionsGroupArgTypes, accordionsGroupArgs, accordionsGroupProps };
