const imageArgTypes = {
  src: {
    control: 'text',
    description: 'Source de l\'image',
    type: {
      value: 'string'
    },
    table: {
      category: 'header'
    }
  },
  alt: {
    control: 'text',
    description: 'L\'alternative de l\'image',
    type: {
      value: 'string'
    },
    table: {
      category: 'header'
    }
  }
};

const cardArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' de la carte',
    type: {
      value: 'string',
      required: true
    }
  },
  title: {
    control: 'text',
    description: 'Titre de la carte',
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
    description: 'Description de la carte',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'content'
    }
  },
  detailLabel: {
    control: 'text',
    description: 'Détails de la carte',
    type: {
      value: 'string'
    },
    table: {
      category: 'details'
    }
  },
  detailPosition: {
    control: { type: 'select' },
    description: 'Position du détail',
    options: ['start', 'end'],
    table: {
      category: 'details'
    }
  },
  hasDetailIcon: {
    control: 'boolean',
    description: 'Si true, ajoute une icône dans le détails de la carte',
    table: {
      category: 'details'
    }
  },
  detailIcon: {
    if: {
      arg: 'hasDetailIcon',
      eq: true
    },
    control: 'text',
    description: 'Icône du détails de la carte',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'details'
    }
  },
  hasBadge: {
    if: {
      arg: 'hasTag',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute des badges dans le contenu',
    table: {
      category: 'details'
    }
  },
  hasTag: {
    if: {
      arg: 'hasBadge',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute des tags dans le contenu',
    table: {
      category: 'details'
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Niveau de titre de la carte (default: h3)',
    options: ['h2', 'h3', 'h4', 'h5'],
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
    description: 'Si true, agrandi la zone de clic à toute la carte',
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
  size: {
    control: { type: 'select' },
    description: 'Taille de la carte ("md" - default | "sm" | "lg").',
    options: ['sm', 'md', 'lg'],
    table: {
      category: 'size'
    }
  },
  horizontal: {
    control: 'boolean',
    description: 'Si true, passe la carte en mode horizontal',
    table: {
      category: 'orientation'
    }
  },
  horizontalProportion: {
    if: {
      arg: 'horizontal',
      eq: true
    },
    control: { type: 'select' },
    description: 'Proportion de l\'image par rapport à la carte en horizontal (valeurs : tier, half)',
    options: ['default', 'tier', 'half'],
    table: {
      category: 'orientation'
    }
  },
  ...imageArgTypes,
  hasHeaderBadge: {
    control: 'boolean',
    description: 'Si true, ajoute un badge dans l\'en-tête',
    table: {
      category: 'header'
    }
  },
  hasButtons: {
    if: {
      arg: 'hasLinks',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute un badge dans l\'en-tête',
    table: {
      category: 'footer'
    }
  },
  hasLinks: {
    if: {
      arg: 'hasButtons',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute un badge dans l\'en-tête',
    table: {
      category: 'footer'
    }
  },
  variations: {
    control: { type: 'select' },
    description: 'Variations ésthétiques de la carte',
    options: ['none', 'grey', 'no-border', 'no-background', 'shadow'],
    table: {
      category: 'variations'
    }
  },
  download: {
    if: {
      arg: 'actionMarkup',
      eq: 'a'
    },
    control: 'boolean',
    description: 'Si true, passe la carte en mode téléchargement',
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
  }
};

const cardArgs = {
  id: 'card-id',
  title: 'Intitulé de la carte',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
  detailLabel: 'détail (optionnel)',
  detailPosition: 'start',
  hasDetailIcon: false,
  detailIcon: 'warning-fill',
  markup: 'h3',
  actionMarkup: 'a',
  hasBadge: false,
  hasTag: false,
  enlarge: false,
  noLink: false,
  blank: false,
  disabled: false,
  size: 'md',
  horizontal: undefined,
  src: 'img/placeholder.16x9.png',
  alt: '[À MODIFIER - vide ou texte alternatif de l’image]',
  hasHeaderBadge: false,
  hasButtons: false,
  hasLinks: false,
  variations: 'none',
  download: false,
  lang: ''
};

const cardProps = (args) => {
  const card = {
    id: args.id || undefined,
    enlarge: args.enlarge || cardArgs.enlarge,
    download: args.download || cardArgs.download,
    size: args.size || cardArgs.size,
    horizontalProportion: args.horizontalProportion || cardArgs.horizontalProportion,
    content: {
      title: args.title || cardArgs.title,
      description: args.description || cardArgs.description,
      markup: args.markup || cardArgs.markup,
      details: [{
        label: args.detailLabel || cardArgs.detailLabel,
        position: args.detailPosition || cardArgs.detailPosition
      }],
      actionMarkup: args.actionMarkup || cardArgs.actionMarkup,
      blank: args.blank || cardArgs.blank,
      noLink: args.noLink || cardArgs.noLink,
      disabled: args.disabled || cardArgs.disabled,
      lang: args.lang || cardArgs.lang,
      badgesGroup: args.hasBadge && { badges: [{ label: 'Libellé badge', accent: 'purple-glycine' }, { label: 'Libellé badge', accent: 'purple-glycine' }] },
      tagsGroup: args.hasTag && { tags: [{ label: 'Libellé tag' }, { label: 'Libellé tag' }] }
    },
    header: {
      badgesGroup: args.hasHeaderBadge && { badges: [{ label: 'Libellé badge', accent: 'purple-glycine' }] }
    },
    footer: {
      buttonsGroup: args.hasButtons && { buttons: [{ label: 'Libellé', kind: 2 }, { label: 'Libellé', kind: 1 }], reverse: true, inline: 'lg' },
      linksGroup: args.hasLinks && { inline: true, links: [...Array(2)].map(() => { return { label: 'Libellé', inline: true, href: '#', icon: 'arrow-right-line', iconPlace: 'right' }; }) }
    }
  };

  if (args.image !== null) {
    card.header.img = {
      src: args.src || cardArgs.src,
      alt: args.alt || cardArgs.alt
    };
  };

  if (args.hasDetailIcon) {
    card.content.details[0].icon = args.detailIcon;
  }

  if (args.horizontal) {
    card.horizontal = {};
    card.horizontal.proportion = args.horizontalProportion;
  }

  if (args.variations !== 'none') {
    card.variations = [args.variations];
  }

  return card;
};

export { cardArgTypes, cardArgs, cardProps };
