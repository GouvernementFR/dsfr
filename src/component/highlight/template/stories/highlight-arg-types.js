const accentArgTypes = {
  accent: {
    control: { type: 'select' },
    description: 'Couleur d\'accentuation',
    options: [
      'défaut',
      'green-tilleul-verveine',
      'green-bourgeon',
      'green-emeraude',
      'green-menthe',
      'green-archipel',
      'blue-ecume',
      'blue-cumulus',
      'purple-glycine',
      'pink-macaron',
      'pink-tuile',
      'yellow-tournesol',
      'yellow-moutarde',
      'orange-terre-battue',
      'brown-cafe-creme',
      'brown-caramel',
      'brown-opera',
      'beige-gris-galet'
    ]
  }
};

const highlightArgTypes = {
  text: {
    control: 'text',
    description: 'Contenu texte de la mise en exergue',
    type: {
      value: 'string',
      required: true
    }
  },
  id: {
    control: 'text',
    description: 'Attribut id de la mise en exergue',
    type: {
      value: 'string'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du texte de la mise en exergue',
    options: ['sm', 'md', 'lg']
  },
  ...accentArgTypes
};

const highlightArgs = {
  id: undefined,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet',
  accent: undefined,
  size: 'md'
};

const highlightProps = (args) => {
  const highlight = {
    id: args.id || undefined,
    text: args.text || highlightArgs.text
  };

  if (args.size !== 'md') highlight.size = args.size || highlightArgs.size;

  if (args.accent !== 'défaut') highlight.accent = args.accent || highlightArgs.accent;

  return highlight;
};

export { highlightArgTypes, highlightArgs, highlightProps };
