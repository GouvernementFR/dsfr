const pictogramArgTypes = {
  hasPictogram: {
    if: { arg: 'rich', eq: true },
    control: 'boolean',
    description: 'Ajoute un pictogramme au radio riche',
    type: {
      value: 'boolean'
    },
    table: { category: 'pictogram' }
  },
  pictogramName: {
    if: { arg: 'hasPictogram', eq: true },
    control: 'text',
    description: 'Nom du pictogramme du radio',
    type: {
      value: 'string'
    },
    table: { category: 'pictogram' }
  },
  pictogramAccent: {
    if: { arg: 'hasPictogram', eq: true },
    control: { type: 'select' },
    description: 'Couleur d\'accentuation du pictogramme',
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
    table: { category: 'pictogram' }
  }
};

const radioArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du radio',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  size: {
    if: { arg: 'rich', eq: false },
    control: { type: 'select' },
    description: 'Taille du radio',
    options: ['sm', 'md']
  },
  label: {
    control: 'text',
    description: 'Libellé du radio',
    type: {
      value: 'string'
    }
  },
  name: {
    control: 'text',
    description: 'Attribut name du radio',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel du radio',
    type: {
      value: 'string'
    }
  },
  rich: {
    control: 'boolean',
    description: 'Passe en mode radios riches (ajoute un encadré et la possibilité d’associer un pictogramme)',
    type: {
      value: 'boolean'
    }
  },
  ...pictogramArgTypes,
  disabled: {
    control: 'boolean',
    description: 'Désactive le radio',
    type: {
      value: 'boolean'
    }
  }
};

const radioArgs = {
  id: 'storybook-radio',
  size: 'md',
  label: 'libellé radio',
  name: 'radio',
  disabled: false,
  rich: false,
  hasPictogram: true,
  pictogramName: 'city-hall'
};

const radioProps = (args) => {
  const radio = {
    id: args.id || radioArgs.id,
    size: args.size || radioArgs.size,
    label: args.label || radioArgs.label,
    name: args.name || radioArgs.name,
    hint: args.hint !== '' ? args.hint : undefined,
    rich: args.rich || radioArgs.rich,
    disabled: args.disabled || radioArgs.disabled,
    inline: args.inline || false
  };

  if (radio.rich && args.hasPictogram) {
    radio.pictogram = {};
    radio.pictogram.name = args.pictogramName || radioArgs.pictogramName;
    if (args.pictogramAccent && args.pictogramAccent !== 'défaut') radio.pictogram.accent = args.pictogramAccent;
  }

  return radio;
};

export { radioArgTypes, radioArgs, radioProps, pictogramArgTypes };
