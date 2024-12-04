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
      value: 'string'
    },
    table: { category: 'attributes' }
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
  hasDescription: {
    control: 'boolean',
    description: 'Si true, ajoute une description à la carte',
    table: {
      category: 'content'
    }
  },
  description: {
    if: { arg: 'hasDescription', eq: true },
    control: 'text',
    description: 'Description de la carte',
    type: {
      value: 'string'
    },
    table: {
      category: 'content'
    }
  },
  hasDetailStart: {
    control: { type: 'boolean' },
    description: 'Ajoute un texte de détail en haut de carte',
    table: {
      category: 'details'
    }
  },
  detailStart: {
    if: { arg: 'hasDetailStart', eq: true },
    control: 'text',
    description: 'Texte de détail en haut de carte',
    type: {
      value: 'string'
    },
    table: {
      category: 'details'
    }
  },
  hasDetailStartIcon: {
    if: { arg: 'hasDetailStart', eq: true },
    control: 'boolean',
    description: 'Ajoute une icône dans le détail en haut de carte',
    table: {
      category: 'details'
    }
  },
  detailStartIcon: {
    if: {
      arg: 'hasDetailStartIcon',
      eq: true
    },
    control: 'text',
    description: 'Icône du détail en haut de carte',
    type: {
      value: 'string'
    },
    table: {
      category: 'details'
    }
  },
  hasDetailEnd: {
    control: { type: 'boolean' },
    description: 'Ajoute un texte de détail en bas de la carte',
    table: {
      category: 'details'
    }
  },
  detailEnd: {
    if: { arg: 'hasDetailEnd', eq: true },
    control: 'text',
    description: 'Texte de détail en bas de carte',
    type: {
      value: 'string'
    },
    table: {
      category: 'details'
    }
  },
  hasDetailEndIcon: {
    if: { arg: 'hasDetailEnd', eq: true },
    control: 'boolean',
    description: 'Ajoute une icône dans le détail en bas de la carte',
    table: {
      category: 'details'
    }
  },
  detailEndIcon: {
    if: {
      arg: 'hasDetailEndIcon',
      eq: true
    },
    control: 'text',
    description: 'Icône du détail en bas de carte',
    type: {
      value: 'string'
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
  enlarge: {
    if: { arg: 'actionMarkup', eq: 'a' },
    control: 'boolean',
    description: 'Si true, agrandi la zone de clic à toute la carte',
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
  actionTitle: {
    control: 'text',
    description: 'Attribut title de l\'actionneur. Si blank = true, il est obligatoire et doit reprendre le titre suivi de la mention "- nouvelle fenêtre"',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
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
  noLink: {
    if: {
      arg: 'enlarge',
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
    control: {
      type: 'select',
      labels: {
        default: 'défaut',
        tier: '1 tier / 2 tiers',
        half: 'moitié / moitié'
      }
    },
    description: 'Proportion de l\'image par rapport au contenu en horizontal (par défaut 40% / 60%)',
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
  imageRatio: {
    if: { arg: 'download', eq: false },
    control: { type: 'select' },
    description: 'Ratio forcé de l\'image',
    options: ['default', '32x9', '3x2', '4x3', '1x1', '3x4', '2x3'],
    table: {
      category: 'header'
    }
  },
  hasButtons: {
    if: {
      arg: 'enlarge',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute des boutons au pied de la carte',
    table: {
      category: 'footer'
    }
  },
  hasLinks: {
    if: {
      arg: 'enlarge',
      eq: false
    },
    control: 'boolean',
    description: 'Si true, ajoute des liens au pied de la carte',
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
  }
};

const cardArgs = {
  title: 'Intitulé de la carte',
  hasDescription: true,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et',
  hasDetailStart: false,
  detailStart: 'détail (optionnel)',
  hasDetailStartIcon: false,
  detailStartIcon: 'warning-fill',
  hasDetailEnd: false,
  detailEnd: 'détail (optionnel)',
  hasDetailEndIcon: false,
  detailEndIcon: 'warning-fill',
  markup: 'h3',
  hasBadge: false,
  hasTag: false,
  enlarge: true,
  actionMarkup: 'a',
  href: '[URL - à modifier]',
  blank: false,
  noLink: false,
  disabled: false,
  size: 'md',
  horizontal: false,
  src: 'img/placeholder.16x9.png',
  alt: '[À MODIFIER - vide ou texte alternatif de l’image]',
  hasHeaderBadge: false,
  imageRatio: 'default',
  hasButtons: false,
  hasLinks: false,
  variations: 'none',
  download: false,
  lang: '',
  assess: false,
  assessBytes: false
};

const cardProps = (args) => {
  const card = {
    id: args.id || undefined,
    download: args.download || cardArgs.download,
    size: args.size || cardArgs.size,
    horizontalProportion: args.horizontalProportion || cardArgs.horizontalProportion,
    content: {
      title: args.title || cardArgs.title,
      description: args.hasDescription ? args.description : undefined,
      markup: args.markup || cardArgs.markup,
      details: [],
      actionMarkup: args.actionMarkup || cardArgs.actionMarkup,
      actionTitle: args.actionTitle,
      href: args.href || cardArgs.href,
      blank: args.blank || cardArgs.blank,
      noLink: args.noLink || cardArgs.noLink,
      disabled: args.disabled || cardArgs.disabled,
      lang: args.lang || cardArgs.lang,
      assess: args.assess || cardArgs.assess,
      badgesGroup: args.hasBadge && { badges: [{ label: 'Libellé badge', accent: 'purple-glycine' }, { label: 'Libellé badge', accent: 'purple-glycine' }] },
      tagsGroup: args.hasTag && { tags: [{ label: 'Libellé tag' }, { label: 'Libellé tag' }] }
    },
    header: {
      badgesGroup: args.hasHeaderBadge && { badges: [{ label: 'Libellé badge', accent: 'purple-glycine' }] }
    }
  };

  if (args.actionMarkup === 'a') {
    card.enlarge = args.enlarge;
  } else {
    card.enlarge = true;
  }

  if (args.hasDetailStart) {
    card.content.details.push({ label: args.detailStart, position: 'start' });
    if (args.hasDetailStartIcon) {
      card.content.details[0].icon = args.detailStartIcon;
    }
  }

  if (args.hasDetailEnd) {
    card.content.details.push({ label: args.detailEnd, position: 'end' });
    if (args.hasDetailEndIcon) {
      card.content.details[card.content.details.length - 1].icon = args.detailEndIcon;
    }
  }

  if (!args.enlarge && (args.hasButtons || args.hasLinks)) {
    card.footer = {
      buttonsGroup: args.hasButtons && { buttons: [{ label: 'Libellé', kind: 2 }, { label: 'Libellé', kind: 1 }], reverse: true, inline: 'lg' },
      linksGroup: args.hasLinks && { inline: true, links: [...Array(2)].map(() => { return { label: 'Libellé', inline: true, href: '#', icon: 'arrow-right-line', iconPlace: 'right' }; }) }
    };
  }

  if (args.image !== null) {
    card.header.img = {
      src: args.src || cardArgs.src,
      alt: args.alt || cardArgs.alt
    };
  };

  if (!args.download && args.imageRatio !== 'default') {
    card.header.img.ratio = args.imageRatio;
  }

  if (args.horizontal) {
    card.horizontal = {};
    card.horizontal.proportion = args.horizontalProportion;
  }

  if (args.variations !== 'none') {
    card.variations = [args.variations];
  }

  if (args.assessBytes === true) {
    card.content.assess = 'bytes';
  }

  return card;
};

export { cardArgTypes, cardArgs, cardProps };
