const pictogramArgTypes = {
  pictogramName: {
    control: 'text',
    description: 'Nom du pictogramme de la tuile',
    type: {
      value: 'string'
    },
    table: {
      category: 'content'
    }
  }
};

const tileArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' de la tuile',
    type: {
      value: 'string',
      required: true
    }
  },
  title: {
    control: 'text',
    description: 'Titre de la tuile',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'content'
    }
  },
  description: {
    control: 'text',
    description: 'Description de la tuile',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'content'
    }
  },
  details: {
    control: 'text',
    description: 'Détails de la tuile',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'content'
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Niveau de titre de la tuile (default: h3)',
    options: ['h2', 'h3', 'h4', 'h5'],
    table: {
      category: 'content'
    }
  },
  ...pictogramArgTypes,
  hasBadge: {
    if: {
      arg: 'hasTag',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute un badge dans le contenu',
    table: {
      category: 'content'
    }
  },
  hasTag: {
    if: {
      arg: 'hasBadge',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute un tag dans le contenu',
    table: {
      category: 'content'
    }
  },
  actionMarkup: {
    control: { type: 'select' },
    description: 'balise de l\'actionneur du composant (a, button)',
    options: ['a', 'button'],
    table: {
      category: 'action'
    }
  },
  enlarge: {
    control: 'boolean',
    description: 'Si true, agrandi la zone de clic à toute la tuile',
    table: {
      category: 'action'
    }
  },
  noLink: {
    control: 'boolean',
    description: 'Si true, absence d\'actionneur',
    table: {
      category: 'action'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Si true, retire le href du lien pour le désactiver ou ajoute l\'attribut disabled sur le bouton',
    table: {
      category: 'action'
    }
  },
  blank: {
    if: {
      arg: 'actionMarkup',
      eq: 'a'
    },
    control: 'boolean',
    description: 'Ajoute l\'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l\'ajout d\'un attribut title "intitulé - nouvelle fenêtre"',
    table: {
      category: 'action'
    }
  },
  download: {
    if: {
      arg: 'actionMarkup',
      eq: 'a'
    },
    control: 'boolean',
    description: 'Si true, passe la tuile en mode téléchargement',
    table: {
      category: 'download'
    }
  },
  lang: {
    if: {
      arg: 'download',
      eq: true
    },
    control: 'text',
    description: 'Ajoute l\'attribut hreflang au lien, pour définir la langue du document lié (Ex: \'Fr\')',
    table: {
      category: 'download'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de la tuile ("md" - default | "sm").',
    options: ['md', 'sm'],
    table: {
      category: 'size'
    }
  },
  horizontal: {
    control: 'boolean',
    description: 'Si true, passe la tuile en mode horizontal',
    table: {
      category: 'orientation'
    }
  },
  verticalBreakpoint: {
    if: {
      arg: 'horizontal',
      eq: true
    },
    control: { type: 'select' },
    description: 'Valeur de breakpoint du passage en mode vertical',
    options: [false, 'md', 'lg'],
    table: {
      category: 'orientation'
    }
  },
  variations: {
    control: { type: 'select' },
    description: 'Variations ésthétiques de la carte',
    options: ['none', 'grey', 'no-border', 'no-background', 'shadow'],
    table: {
      category: 'variations'
    }
  }
};

const tileArgs = {
  id: 'tile-id',
  title: 'Intitulé de la tuile',
  description: '',
  details: 'Détail (optionel)',
  markup: 'h3',
  actionMarkup: 'a',
  pictogramName: 'city-hall',
  hasBadge: false,
  hasTag: false,
  enlarge: false,
  noLink: false,
  blank: false,
  download: false,
  lang: '',
  disabled: false,
  size: 'md',
  horizontal: false,
  verticalBreakpoint: false,
  variations: 'none'
};

const tileProps = (args) => {
  const tile = {
    id: args.id || undefined,
    enlarge: args.enlarge || tileArgs.enlarge,
    download: args.download || tileArgs.download,
    size: args.size || tileArgs.size,
    horizontal: args.horizontal || tileArgs.horizontal,
    vertical: args.verticalBreakpoint || tileArgs.verticalBreakpoint,
    content: {
      title: args.title || tileArgs.title,
      description: args.description || tileArgs.description,
      markup: args.markup || tileArgs.markup,
      details: args.details || tileArgs.details,
      actionMarkup: args.actionMarkup || tileArgs.actionMarkup,
      blank: args.blank || tileArgs.blank,
      noLink: args.noLink || tileArgs.noLink,
      disabled: args.disabled || tileArgs.disabled,
      lang: args.lang || tileArgs.lang,
      badge: args.hasBadge && { label: 'Libellé badge', accent: 'purple-glycine' },
      tag: args.hasTag && { label: 'Libellé tag' }
    },
    header: {
      pictogram: (args.pictogramName) ? { name: args.pictogramName, accent: args.pictogramAccent } : tileArgs.pictogram,
    }
  };

  if (args.variations !== 'none') {
    tile.variations = [args.variations];
  }

  return tile;
};

export { tileArgTypes, tileArgs, tileProps };
