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

const calloutArgTypes = {
  title: {
    control: 'text',
    description: 'titre de la mise en avant',
    type: {
      value: 'string'
    }
  },
  text: {
    control: 'text',
    description: 'Contenu texte de la mise en avant',
    type: {
      value: 'string',
      required: true
    }
  },
  id: {
    control: 'text',
    description: 'Attribut id de la mise en avant',
    type: {
      value: 'string'
    }
  },
  hasIcon: {
    control: 'boolean',
    description: 'Affiche une icône',
    type: {
      value: 'boolean'
    }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône',
    type: {
      value: 'string'
    }
  },
  titleMarkup: {
    control: { type: 'select' },
    description: 'Niveau d\'entête du titre',
    options: ['h2', 'h3', 'h4', 'h5', 'h6', 'p']
  },
  hasButton: {
    control: 'boolean',
    description: 'Affiche un bouton',
    type: {
      value: 'boolean'
    },
    table: { category: 'button' }
  },
  buttonLabel: {
    if: { arg: 'hasButton', eq: true },
    control: 'text',
    description: 'Libellé du bouton',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'button' }
  },
  ...accentArgTypes
};

const calloutArgs = {
  title: 'Mise en avant',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet',
  buttonLabel: 'En savoir plus',
  titleMarkup: 'h3',
  hasIcon: false,
  icon: 'info-line',
  accent: undefined,
  hasButton: false
};

const calloutProps = (args) => {
  const callout = {
    id: args.id || undefined,
    title: args.title === '' ? undefined : args.title || calloutArgs.title,
    text: args.text || calloutArgs.text,
    markup: args.titleMarkup || calloutArgs.titleMarkup
  };

  if (args.accent !== 'défaut') callout.accent = args.accent || calloutArgs.accent;

  if (args.hasButton) {
    callout.button = {
      label: args.buttonLabel || calloutArgs.buttonLabel
    };
  }

  if (args.hasIcon) {
    callout.icon = args.icon || calloutArgs.icon;
  }

  return callout;
};

export { calloutArgTypes, calloutArgs, calloutProps };