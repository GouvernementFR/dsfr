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
  hasDescription: {
    control: 'boolean',
    description: 'Si true, ajoute une description dans le contenu',
    table: {
      category: 'content'
    }
  },
  description: {
    if: {
      arg: 'hasDescription',
      eq: true
    },
    control: 'text',
    description: 'Description de la tuile',
    type: {
      value: 'string'
    },
    table: {
      category: 'content'
    }
  },
  hasDetails: {
    if: { arg: 'download', eq: false },
    control: 'boolean',
    description: 'Si true, ajoute une ligne détails dans le contenu',
    table: {
      category: 'content'
    }
  },
  details: {
    if: {
      arg: 'hasDetails',
      eq: true
    },
    control: 'text',
    description: 'Détails de la tuile. Obligatoire si download = true',
    type: {
      value: 'string'
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
  enlarge: {
    if: { arg: 'actionMarkup', eq: 'a' },
    control: 'boolean',
    description: 'Si true, agrandi la zone de clic à toute la tuile',
    table: {
      category: 'action'
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
  href: {
    if: {
      arg: 'actionMarkup',
      eq: 'a'
    },
    control: 'text',
    description: 'URL de destination du lien',
    table: {
      category: 'action'
    }
  },
  actionTitle: {
    control: 'text',
    description: 'Attribut title de l\'actionneur. Si blank = true, il est obligatoire et doit reprendre le titre suivi de la mention "- nouvelle fenêtre"',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  noLink: {
    if: {
      arg: 'actionMarkup',
      eq: false
    },
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
    description: 'Ajoute l\'attribut hreflang au lien, pour définir la langue du document lié (Ex: \'fr\')',
    table: {
      category: 'download'
    }
  },
  assess: {
    if: {
      arg: 'download',
      eq: true
    },
    control: 'boolean',
    description: 'Si true, évaluation automatique des détails du fichier à télécharger (poids, format, etc.). <br>Testez avec href = "img/placeholder.16x9.png"',
    table: {
      category: 'download'
    }
  },
  assessBytes: {
    if: {
      arg: 'assess',
      eq: true
    },
    control: 'boolean',
    description: 'Si true, change l\'unité de mesure de l\'évaluation automatique du poids en Bytes',
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
  title: 'Intitulé de la tuile',
  markup: 'h3',
  hasDescription: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididu',
  hasDetails: true,
  details: 'Détail (optionel)',
  hasBadge: false,
  hasTag: false,
  enlarge: true,
  actionMarkup: 'a',
  href: '[URL - à modifier]',
  pictogramName: 'city-hall',
  noLink: false,
  blank: false,
  download: false,
  lang: '',
  assess: false,
  assessBytes: false,
  disabled: false,
  size: 'md',
  horizontal: false,
  verticalBreakpoint: false,
  variations: 'none'
};

const tileProps = (args) => {
  const tile = {
    download: args.download || tileArgs.download,
    size: args.size || tileArgs.size,
    horizontal: args.horizontal || tileArgs.horizontal,
    vertical: args.verticalBreakpoint || tileArgs.verticalBreakpoint,
    content: {
      title: args.title || tileArgs.title,
      description: args.hasDescription ? args.description : undefined,
      markup: args.markup || tileArgs.markup,
      details: args.hasDetails ? args.details : undefined,
      actionMarkup: args.actionMarkup || tileArgs.actionMarkup,
      actionTitle: args.actionTitle,
      href: args.href || tileArgs.href,
      blank: args.blank || tileArgs.blank,
      noLink: args.noLink || tileArgs.noLink,
      disabled: args.disabled || tileArgs.disabled,
      lang: args.lang || tileArgs.lang,
      assess: args.assess || tileArgs.assess,
      badge: args.hasBadge && { label: 'Libellé badge', accent: 'purple-glycine' },
      tag: args.hasTag && { label: 'Libellé tag' }
    },
    header: {
      pictogram: (args.pictogramName) ? { name: args.pictogramName, accent: args.pictogramAccent } : tileArgs.pictogram
    }
  };

  if (args.download === true) {
    tile.content.details = args.details || 'TYPE - POIDS - LANGUE';
  }

  if (args.actionMarkup === 'a') {
    tile.enlarge = args.enlarge;
  } else {
    tile.enlarge = true;
  }

  if (args.variations !== 'none') {
    tile.variations = [args.variations];
  }

  if (args.assessBytes === true) {
    tile.content.assess = 'bytes';
  }

  return tile;
};

export { tileArgTypes, tileArgs, tileProps };
