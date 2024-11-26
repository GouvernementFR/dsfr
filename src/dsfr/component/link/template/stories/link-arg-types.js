
const iconArgTypes = {
  hasIcon: {
    if: { arg: 'download', eq: false },
    control: 'boolean',
    description: 'Le lien a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône dans le lien',
    table: {
      category: 'icon'
    }
  },
  iconPlace: {
    if: { arg: 'hasIcon', eq: true },
    description: 'Emplacement de l\'icône<br>Si non défini alors que le paramètre icon est défini, lien avec icône seule, sans label<br>valeurs :<br>- left : icône à gauche du label<br>- right : icône à droite du label',
    control: {
      type: 'select',
      labels: {
        left: 'Icône à gauche',
        right: 'Icône à droite'
      }
    },
    options: ['left', 'right'],
    table: { category: 'icon' }
  }
};

const linkArgTypes = {
  label: {
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string',
      required: true
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille du lien',
    options: ['sm', 'md', 'lg']
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' du lien',
    table: { category: 'attributes' }
  },
  disabled: {
    control: 'boolean',
    description: 'Le lien est désactivé'
  },
  blank: {
    control: 'boolean',
    description: 'Si true, target prend la valeur _blank, sinon _self'
  },
  title: {
    if: { arg: 'blank', eq: true },
    control: 'text',
    description: 'Attribut title du lien',
    table: { category: 'attributes' }
  },
  href: {
    control: 'text',
    description: 'Adresse url du lien'
  },
  download: {
    control: 'boolean',
    description: 'Si true, lien de téléchargement',
    table: {
      category: 'download'
    }
  },
  detail: {
    if: { arg: 'download', eq: true },
    control: 'text',
    description: 'Détail du lien de téléchargement',
    table: {
      category: 'download'
    }
  },
  hreflang: {
    if: { arg: 'download', eq: true },
    control: 'text',
    description: 'Code langue du fichier à télécharger',
    table: {
      category: 'download'
    }
  },
  assess: {
    if: { arg: 'download', eq: true },
    control: 'boolean',
    description: 'si true, ajoute l\'attribut permettant le remplissage automatique des informations du fichier à télécharger. Si string, ajoute l\'attribut avec la valeur de la string (ex: "bytes" pour les poids en bytes)',
    table: {
      category: 'download'
    }
  },
  ...iconArgTypes
};

const linkArgs = {
  label: 'libellé du lien',
  size: 'md',
  disabled: false,
  download: false,
  detail: '',
  hreflang: '',
  hasIcon: false,
  icon: 'checkbox-line',
  iconPlace: 'left',
  href: '#',
  assess: '',
  blank: false,
  id: '',
  title: 'libellé du lien - nouvelle fenêtre'
};

const linkProps = (args) => {
  const link = {
    label: args.label || linkArgs.label,
    size: args.size || linkArgs.size,
    id: args.id || undefined,
    disabled: args.disabled,
    href: args.href || linkArgs.href,
    download: args.download || linkArgs.download,
    detail: args.detail || linkArgs.detail,
    hreflang: args.hreflang || linkArgs.hreflang,
    blank: args.blank || linkArgs.blank,
    self: !args.blank || undefined
  };

  if (args.blank) {
    link.attributes = {};
    link.attributes.title = args.title || linkArgs.title;
  }

  if (args.hasIcon) {
    link.icon = args.icon;
    link.iconPlace = args.iconPlace;
  }

  if (args.download) {
    link.assess = args.assess || undefined;
  } else {
    link.assess = undefined;
  }

  return link;
};

export { linkArgTypes, linkArgs, linkProps };
