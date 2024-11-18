const imageArgTypes = {
  hasImage: {
    control: 'boolean',
    description: 'Si true, ajoute une image à la citation',
    table: {
      category: 'Image'
    }
  },
  src: {
    if: { arg: 'hasImage', eq: true },
    control: 'text',
    description: 'Source de l\'image',
    type: {
      value: 'string'
    },
    table: {
      category: 'Image'
    }
  },
  alt: {
    if: { arg: 'hasImage', eq: true },
    control: 'text',
    description: 'L\'alternative de l\'image doit rester vide car l\'image est illustrative et ne doit pas être restituée aux technologies d’assistance)',
    type: {
      value: 'string'
    },
    table: {
      category: 'Image'
    }
  }
};

const accentArgTypes = {
  accent: {
    control: { type: 'select' },
    description: 'Couleur d\'accentuation de la citation',
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
    ],
    table: {
      category: 'variant'
    }
  }
};

const quoteArgTypes = {
  text: {
    control: 'text',
    description: 'Texte de la citation',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du texte de citation',
    options: ['md', 'lg', 'xl']
  },
  hasAuthor: {
    control: 'boolean',
    description: 'Si true, ajoute un auteur à la citation',
    table: {
      category: 'Author'
    }
  },
  author: {
    if: { arg: 'hasAuthor', eq: true },
    control: 'text',
    description: 'Nom de l\'auteur',
    type: {
      value: 'string'
    },
    table: {
      category: 'Author'
    }
  },
  hasDetails: {
    control: 'boolean',
    description: 'Si true, ajoute des textes de détail à la citation',
    table: {
      category: 'Sources'
    }
  },
  sources: {
    if: { arg: 'hasDetails', eq: true },
    control: 'object',
    description: 'Tableau des textes de détail',
    type: {
      value: 'array'
    },
    table: {
      category: 'Sources'
    }
  },
  ...imageArgTypes,
  ...accentArgTypes
};

const quoteArgs = {
  text: 'Lorem [...] elit ut.',
  size: 'md',
  hasAuthor: true,
  author: 'Auteur',
  hasImage: true,
  src: 'https://main--ds-gouv.netlify.app/example/img/placeholder.1x1.png',
  alt: '',
  hasDetails: true,
  sources: ['<cite>Ouvrage</cite>', 'Détail 1', 'Détail 2', 'Détail 3', '<a target="_blank" rel="noopener external" title="[À MODIFIER - Intitulé] - nouvelle fenêtre" href="[À MODIFIER | Lien vers la sources ou des infos complémentaires]">Détail 4</a>'],
  accent: 'défaut'
};

const quoteProps = (args) => {
  const quote = {
    text: args.text || quoteArgs.text,
    size: args.size || quoteArgs.size,
    href: '[À MODIFIER | https://lien-vers-la-source.fr || supprimer l\'attribut si pas d\'url pour la source]'
  };

  if (args.hasAuthor) quote.author = args.author || quoteArgs.author;
  if (args.hasDetails) quote.sources = args.sources || quoteArgs.sources;
  if (args.accent !== 'défaut') quote.accent = args.accent || quoteArgs.accent;
  if (args.hasImage) {
    quote.image = {
      src: args.src || quoteArgs.src,
      alt: args.alt || quoteArgs.alt
    };
  };

  return quote;
};

export { quoteArgTypes, quoteArgs, quoteProps };
