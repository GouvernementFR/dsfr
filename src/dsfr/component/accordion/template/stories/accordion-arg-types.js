const accordionArgTypes = {
  isExpanded: {
    control: 'boolean',
    description: 'L\'accordéon est-il ouvert au départ',
    type: {
      value: 'boolean'
    }
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du collapse de l\'accordéon',
    type: {
      value: 'string',
      required: true
    }
  },
  label: {
    control: 'text',
    description: 'Libellé du bouton',
    type: {
      value: 'string',
      required: true
    }
  },
  markup: {
    control: {
      type: 'select',
      labels: {
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p'
    },
    description: 'Niveau de titre du bouton (default: h3)',
    options: ['h2', 'h3', 'h4', 'h5', 'h6', 'p']
  },
  content: {
    control: 'text',
    description: 'Contenu du collapse',
    type: {
      value: 'string',
      required: true
    }
  }
};

const accordionArgs = {
  isExpanded: false,
  id: 'accordion-id',
  label: 'Libellé accordéon',
  markup: 'h3',
  content: '<h4 class="fr-h4">Contenu </h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>'
};

const accordionProps = (args) => {
  const accordion = {
    id: args.id || undefined,
    label: args.label || accordionArgs.label,
    content: args.content || accordionArgs.content,
    markup: args.markup || accordionArgs.markup,
    isExpanded: args.isExpanded || accordionArgs.isExpanded
  };

  return accordion;
};

export { accordionArgTypes, accordionArgs, accordionProps };
