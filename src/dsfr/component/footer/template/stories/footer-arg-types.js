const topArgTypes = {
  hasTopFooter: {
    control: 'boolean',
    description: 'Affiche le haut du pied de page',
    type: {
      value: 'boolean'
    },
    table: { category: 'top' }
  },
  topFooterCategories: {
    if: { arg: 'hasTopFooter', eq: true },
    control: 'object',
    description: 'Liste des catégories',
    type: {
      value: 'array',
      required: true
    },
    table: { category: 'top' }
  }
};

const contentArgTypes = {
  hasDescription: {
    control: 'boolean',
    description: 'Ajoute une description',
    type: {
      value: 'boolean'
    },
    table: { category: 'content' }
  },
  contentDescription: {
    if: { arg: 'hasDescription', eq: true },
    control: 'text',
    description: 'Texte de description',
    type: {
      value: 'string'
    },
    table: { category: 'content' }
  },
  contentLinks: {
    control: { type: 'object', disable: true },
    description: 'Liste des liens (non modifiables)',
    type: {
      value: 'array'
    },
    table: { category: 'content' }
  }
};

const partnersArgTypes = {
  hasPartners: {
    control: 'boolean',
    description: 'Affiche le bloc partenaires',
    type: {
      value: 'boolean'
    },
    table: { category: 'partners' }
  },
  partnerTitle: {
    if: { arg: 'hasPartners', eq: true },
    control: 'text',
    description: 'Intitulé du bloc partenaires',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'partners' }
  },
  mainPartnerSrc: {
    if: { arg: 'hasPartners', eq: true },
    control: 'text',
    description: 'Chemin ver l\'image du partenaire principal',
    type: {
      value: 'string'
    },
    table: { category: 'partners' }
  },
  mainPartnerHref: {
    if: { arg: 'hasPartners', eq: true },
    control: 'text',
    description: 'Lien du partenaire principal',
    type: {
      value: 'string'
    },
    table: { category: 'partners' }
  },
  mainPartnerAlt: {
    if: { arg: 'hasPartners', eq: true },
    control: 'text',
    description: 'Texte alternatif de l\'image du partenaire principal',
    type: {
      value: 'string'
    },
    table: { category: 'partners' }
  },
  mainPartnerStyle: {
    if: { arg: 'hasPartners', eq: true },
    control: 'text',
    description: 'Attribut style du partenaire principal (permet de définir la taille)',
    type: {
      value: 'string'
    },
    table: { category: 'partners' }
  },
  subPartners: {
    if: { arg: 'hasPartners', eq: true },
    control: 'object',
    description: 'Liste des partenaires secondaires',
    type: {
      value: 'array'
    },
    table: { category: 'partners' }
  }
};

const bottomArgTypes = {
  bottomLinks: {
    control: 'object',
    description: 'Liste des liens du bloc du bas',
    type: {
      value: 'array'
    },
    table: { category: 'bottom' }
  },
  bottomCopyright: {
    control: 'text',
    description: 'Texte de droits d‘auteur',
    type: {
      value: 'string'
    },
    table: { category: 'bottom' }
  }
};

const brandArgTypes = {
  brandLogoTitle: {
    control: 'text',
    description: 'Intitulé du logo',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  brandLinkTitle: {
    control: 'text',
    description: 'Attribut title du lien du bloc marque',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  brandLinkHref: {
    control: 'text',
    description: 'Lien du bloc marque',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  brandLinkId: {
    control: 'text',
    description: 'Attribut id du lien du bloc marque',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  hasBrandOperator: {
    control: 'boolean',
    description: 'Ajoute un logo opérateur dans le bloc marque',
    type: {
      value: 'boolean'
    },
    table: { category: 'brand' }
  },
  brandOperatorAlt: {
    if: { arg: 'hasBrandOperator', eq: true },
    control: 'text',
    description: 'Texte alternatif du logo opérateur',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  brandOperatorSrc: {
    if: { arg: 'hasBrandOperator', eq: true },
    control: 'text',
    description: 'Chemin de l‘image du logo opérateur',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  brandOperatorStyle: {
    if: { arg: 'hasBrandOperator', eq: true },
    control: 'text',
    description: 'Attribut style du logo opérateur (permet de définir la taille)',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  }
};

const footerArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du pied de page',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  ...topArgTypes,
  ...brandArgTypes,
  ...contentArgTypes,
  ...partnersArgTypes,
  ...bottomArgTypes
};

const footerArgs = {
  hasTopFooter: false,
  topFooterCategories: [
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] },
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] },
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] },
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] },
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] },
    { label: 'Nom de la catégorie', links: [{ label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }, { label: 'Lien de navigation', href: '#' }] }
  ],
  hasDescription: true,
  contentDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
  contentLinks: [
    { label: 'info.gouv.fr', href: 'https://info.gouv.fr', blank: true, attributes: { title: 'info.gouv.fr - nouvelle fenêtre' } },
    { label: 'service-public.fr', href: 'https://service-public.fr', blank: true, attributes: { title: 'service-public.fr - nouvelle fenêtre' } },
    { label: 'legifrance.gouv.fr', href: 'https://legifrance.gouv.fr', blank: true, attributes: { title: 'legifrance.gouv.fr - nouvelle fenêtre' } },
    { label: 'data.gouv.fr', href: 'https://data.gouv.fr', blank: true, attributes: { title: 'data.gouv.fr - nouvelle fenêtre' } }
  ],
  brandLogoTitle: 'Intitulé <br>officiel',
  brandLinkId: 'brand-link',
  brandLinkHref: '/',
  brandLinkTitle: 'Retour à l\'accueil du site - [À MODIFIER - texte alternatif de l\'image : nom de l\'opérateur ou du site serviciel] - République Française',
  hasBrandOperator: false,
  brandOperatorAlt: 'nom de l\'opérateur ou du site serviciel',
  brandOperatorSrc: 'img/placeholder.9x16.png',
  brandOperatorStyle: 'width: 3.5rem',
  hasPartners: false,
  partnerTitle: 'Nos partenaires',
  mainPartnerSrc: 'img/placeholder.16x9.png',
  mainPartnerHref: '#',
  mainPartnerAlt: 'Intitulé du partenaire principal',
  mainPartnerStyle: 'height: 5.625rem',
  subPartners: [
    { src: 'img/placeholder.16x9.png', href: '#', alt: 'Intitulé du partenaire secondaire', style: 'height: 5.625rem' },
    { src: 'img/placeholder.16x9.png', href: '#', alt: 'Intitulé du partenaire secondaire', style: 'height: 5.625rem' },
    { src: 'img/placeholder.16x9.png', href: '#', alt: 'Intitulé du partenaire secondaire', style: 'height: 5.625rem' }
  ],
  bottomLinks: [
    { label: 'Plan du site', href: '#', markup: 'a' },
    { label: 'Accessibilité : non/partiellement/totalement conforme', href: '#', markup: 'a' },
    { label: 'Mentions légales', href: '#', markup: 'a' },
    { label: 'Données personnelles', href: '#', markup: 'a' },
    { label: 'Gestion des cookies', href: '#', markup: 'a' }
  ],
  bottomCopyright: 'Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>',
  id: 'footer'
};

const footerProps = (args) => {
  const footer = {
    id: args.id || footerArgs.id,
    content: {
      links: args.contentLinks || footerArgs.contentLinks
    },
    bottom: {
      links: args.bottomLinks || footerArgs.bottomLinks,
      copyright: args.bottomCopyright || footerArgs.bottomCopyright
    },
    brand: {
      logo: {
        title: args.brandLogoTitle || footerArgs.brandLogoTitle
      },
      link: {
        id: args.brandLinkId || footerArgs.brandLinkId,
        title: args.brandLinkTitle || footerArgs.brandLinkTitle,
        href: args.brandLinkHref || footerArgs.brandLinkHref,
        position: args.hasBrandOperator ? 'operator' : 'service'
      }
    }
  };

  if (args.hasDescription) {
    footer.content.desc = args.contentDescription;
  }

  if (args.hasBrandOperator) {
    footer.brand.operator = {
      alt: args.brandOperatorAlt || footerArgs.brandOperatorAlt,
      src: args.brandOperatorSrc || footerArgs.brandOperatorSrc,
      style: args.brandOperatorStyle || footerArgs.brandOperatorStyle
    };
  }

  if (args.hasPartners) {
    footer.partners = {
      title: args.partnerTitle || footerArgs.partnerTitle,
      mainPartner: {
        src: args.mainPartnerSrc || footerArgs.mainPartnerSrc,
        href: args.mainPartnerHref || footerArgs.mainPartnerHref,
        alt: args.mainPartnerAlt || footerArgs.mainPartnerAlt,
        style: args.mainPartnerStyle || footerArgs.mainPartnerStyle
      },
      subPartners: args.subPartners || footerArgs.subPartners
    };
  }

  if (args.hasTopFooter) {
    footer.top = {
      categories: args.topFooterCategories || footerArgs.topFooterCategories
    };
  }

  return footer;
};

export { footerArgTypes, footerArgs, footerProps };
