const brandArgTypes = {
  brandLogoTitle: {
    control: 'text',
    description: 'Intitulé du logo',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'brand' }
  },
  brandService: {
    control: 'text',
    description: 'Titre du service',
    type: {
      value: 'string'
    },
    table: { category: 'brand' }
  },
  hasBrandTagline: {
    control: 'boolean',
    description: 'Ajoute une baseline',
    type: {
      value: 'boolean'
    },
    table: { category: 'brand' }
  },
  brandTagline: {
    if: { arg: 'hasBrandTagline', eq: true },
    control: 'text',
    description: 'Baseline - précisions sur l‘organisation',
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

const toolsArgTypes = {
  menuId: {
    control: 'text',
    description: 'Attribut id du bouton de menu',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'tools' }
  },
  menuModalId: {
    control: 'text',
    description: 'Attribut id de la fenêtre modale du menu',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'tools' }
  },
  hasToolLinks: {
    control: 'boolean',
    description: 'Ajoute des liens d‘accès rapide',
    type: {
      value: 'boolean'
    },
    table: { category: 'tools' }
  },
  toolLinks: {
    if: { arg: 'hasToolLinks', eq: true },
    control: { type: 'object' },
    description: 'Liens d‘accès rapide',
    type: {
      value: 'array'
    },
    table: { category: 'tools' }
  },
  duplicateToolLinks: {
    control: 'boolean',
    description: 'Duplique les liens d‘accès rapide dans la modale mobile (pour les SPA)',
    type: {
      value: 'boolean'
    },
    table: { category: 'tools' }
  },
  hasTranslate: {
    control: 'boolean',
    description: 'Ajoute un menu de traduction',
    type: {
      value: 'boolean'
    },
    table: { category: 'tools' }
  },
  translateId: {
    if: { arg: 'hasTranslate', eq: true },
    control: 'text',
    description: 'Attribut id du menu de traduction',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  translateCollapseId: {
    if: { arg: 'hasTranslate', eq: true },
    control: 'text',
    description: 'Attribut id du collapse du menu de traduction',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'tools' }
  },
  translateButtonTitle: {
    if: { arg: 'hasTranslate', eq: true },
    control: 'text',
    description: 'Titre du bouton du menu de traduction',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  translateButtonKind: {
    if: { arg: 'hasTranslate', eq: true },
    control: {
      type: 'select',
      labels: {
        3: 'tertiaire',
        4: 'tertiaire sans contour'
      }
    },
    description: 'Type du bouton du menu de traduction',
    options: [3, 4],
    table: { category: 'tools' }
  },
  translateLanguages: {
    if: { arg: 'hasTranslate', eq: true },
    control: { type: 'object' },
    description: 'Langues du menu de traduction',
    type: {
      value: 'array'
    },
    table: { category: 'tools' }
  },
  hasSearch: {
    control: 'boolean',
    description: 'Ajoute un champ de recherche',
    type: {
      value: 'boolean'
    },
    table: { category: 'tools' }
  },
  searchId: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Attribut id du champ de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchModalId: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Attribut id de la fenêtre modale de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchBtnId: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Attribut id du bouton de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchInputId: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Attribut id du champ de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchLabel: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Libellé du champ de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchPlaceholder: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Placeholder du champ de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  },
  searchTitle: {
    if: { arg: 'hasSearch', eq: true },
    control: 'text',
    description: 'Titre du champ de recherche',
    type: {
      value: 'string'
    },
    table: { category: 'tools' }
  }
};

const navigationArgTypes = {
  hasNavigation: {
    control: 'boolean',
    description: 'Ajoute une navigation principale',
    type: {
      value: 'boolean'
    },
    table: { category: 'navigation' }
  },
  navigationId: {
    if: { arg: 'hasNavigation', eq: true },
    control: 'text',
    description: 'Attribut id de la navigation principale',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'navigation' }
  },
  navigationAriaLabel: {
    if: { arg: 'hasNavigation', eq: true },
    control: 'text',
    description: 'Attribut aria-label de la navigation principale',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'navigation' }
  },
  navigationItems: {
    if: { arg: 'hasNavigation', eq: true },
    control: { type: 'object' },
    description: 'Éléments de la navigation principale',
    type: {
      value: 'array',
      required: true
    },
    table: { category: 'navigation' }
  }
};

const accessArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du access',
    type: {
      value: 'string'
    },
    table: { category: 'Attributes' }
  },
  ...toolsArgTypes,
  ...brandArgTypes,
  ...navigationArgTypes
};

const getItemArgs = (id, type = 'link', isActive = false) => {
  const item = {};

  item.id = type === 'link' ? `navigation-item-${id}` : `navigation-${id}`;
  item.type = type;
  item.active = isActive;
  item.collapsable = type === 'menu' || type === 'mega-menu';
  item.collapseId = type === 'menu' || type === 'mega-menu' ? `navigation-${id}` : undefined;

  switch (type) {
    case 'link':
      item.label = `Titre du lien ${id}`;
      item.href = '#';
      break;
    case 'menu':
      item.label = `Menu ${id}`;
      break;
    case 'mega-menu':
      item.label = `Mega menu ${id}`;
      item.close = 'Fermer le menu';
      item.leader = {
        title: 'Titre éditorialisé',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        link: {
          id: 'link-leader-' + id,
          label: 'Voir toute la rubrique',
          iconPlace: 'right',
          icon: 'arrow-right-line'
        }
      };
      break;
    default:
      break;
  }

  return item;
};

const accessArgs = {
  id: 'access',
  brandService: 'Nom du site / service',
  hasBrandTagline: true,
  brandTagline: 'baseline - précisions sur l‘organisation',
  brandLogoTitle: 'Intitulé <br>officiel',
  brandLinkId: 'brand-link',
  brandLinkHref: '/',
  brandLinkTitle: 'Retour à l\'accueil du site - [À MODIFIER - texte alternatif de l\'image : nom de l\'opérateur ou du site serviciel] - République Française',
  hasBrandOperator: false,
  brandOperatorAlt: 'nom de l\'opérateur ou du site serviciel',
  brandOperatorSrc: 'img/placeholder.9x16.png',
  brandOperatorStyle: 'width: 3.5rem',
  menuId: 'access-menu-btn',
  menuModalId: 'access-menu',
  hasNavigation: true,
  navigationId: 'access-navigation',
  navigationAriaLabel: 'Menu principal',
  navigationItems: [
    {
      ...getItemArgs(1, 'menu', true),
      items: [
        getItemArgs('1-1'),
        getItemArgs('1-2', 'link', true),
        getItemArgs('1-3')
      ]
    },
    getItemArgs(2),
    {
      ...getItemArgs(3, 'menu'),
      items: [
        getItemArgs('3-1'),
        {
          ...getItemArgs('3-2', 'menu'),
          items: [
            getItemArgs('3-2-1'),
            getItemArgs('3-2-2'),
            getItemArgs('3-2-3')
          ]
        },
        getItemArgs('3-3')
      ]
    },
    {
      ...getItemArgs(4, 'mega-menu'),
      categories: [
        {
          label: 'Catégorie 1',
          href: '#',
          items: [
            getItemArgs('4-1-1', 'link'),
            getItemArgs('4-1-2', 'link'),
            getItemArgs('4-1-3', 'link')
          ]
        },
        {
          label: 'Catégorie 2',
          href: '#',
          items: [
            getItemArgs('4-2-1', 'link'),
            getItemArgs('4-2-2', 'link'),
            getItemArgs('4-2-3', 'link')
          ]
        },
        {
          label: 'Catégorie 3',
          href: '#',
          items: [
            getItemArgs('4-3-1', 'link'),
            getItemArgs('4-3-2', 'link'),
            getItemArgs('4-3-3', 'link')
          ]
        },
        {
          label: 'Catégorie 4',
          href: '#',
          items: [
            getItemArgs('4-4-1', 'link'),
            getItemArgs('4-4-2', 'link'),
            getItemArgs('4-4-3', 'link')
          ]
        }
      ]
    }
  ],
  duplicateToolLinks: false,
  hasToolLinks: false,
  toolLinks: {
    buttons: [
      {
        classes: ['fr-btn--team'],
        url: '#',
        label: 'Contact',
        markup: 'a'
      },
      {
        classes: ['fr-btn--briefcase'],
        url: '#',
        label: 'Espace recruteur',
        markup: 'a'
      }
    ]
  },
  hasSearch: false,
  searchId: 'access-search',
  searchModalId: 'access-search-modal',
  searchBtnId: 'access-search-btn',
  searchLabel: 'Rechercher',
  searchPlaceholder: 'Rechercher',
  searchInputId: 'access-search-input',
  searchTitle: 'Rechercher',
  hasTranslate: false,
  translateId: 'access-translate',
  translateCollapseId: 'translate-collapse',
  translateButtonTitle: 'Sélectionner une langue',
  translateButtonKind: 'tertiary',
  translateLanguages: [
    {
      name: 'Français',
      locale: 'fr',
      href: '/fr/',
      active: true
    },
    {
      name: 'English',
      href: '/en/',
      locale: 'en'
    },
    {
      name: 'Español',
      href: '/es/',
      locale: 'es'
    },
    {
      name: 'Deutsch',
      href: '/de/',
      locale: 'de'
    }
  ]
};

const accessProps = (args) => {
  const access = {
    id: args.id || accessArgs.id,
    body: {
      brand: {
        logo: {
          title: args.brandLogoTitle || accessArgs.BrandLogoTitle
        },
        link: {
          id: args.brandLinkId || accessArgs.brandLinkId,
          title: args.brandLinkTitle || accessArgs.brandLinkTitle,
          href: args.brandLinkHref || accessArgs.brandLinkHref,
          position: args.hasBrandOperator ? 'operator' : (args.brandService === '' && args.brandTagline === '') ? 'logo' : 'service'
        }
      }
    }
  };

  if (args.hasNavigation || args.hasToolLinks || args.hasSearch || args.hasTranslate) {
    access.body.brand.navbar = {};
    access.menu = {
      id: args.menuId || accessArgs.menuId,
      modalId: args.menuModalId || accessArgs.menuModalId,
      tools: {
        duplicateLinks: args.duplicateToolLinks || accessArgs.duplicateToolLinks
      }
    };

    if (args.hasNavigation) {
      access.menu.navigation = {
        id: args.navigationId || accessArgs.navigationId,
        ariaLabel: args.navigationAriaLabel || accessArgs.navigationAriaLabel,
        items: args.navigationItems
      };
    }
  }

  if (args.brandService !== '') {
    access.body.brand.service = access.body.brand.service || {};
    access.body.brand.service.title = args.brandService || accessArgs.brandService;
  }

  if (args.hasBrandTagline && args.brandTagline !== '') {
    access.body.brand.service = access.body.brand.service || {};
    access.body.brand.service.tagline = args.brandTagline || accessArgs.brandTagline;
  }

  if (args.hasBrandOperator) {
    access.body.brand.operator = {
      alt: args.brandOperatorAlt || accessArgs.brandOperatorAlt,
      src: args.brandOperatorSrc || accessArgs.brandOperatorSrc,
      style: args.brandOperatorStyle || accessArgs.brandOperatorStyle
    };
  }

  if (args.hasToolLinks) {
    access.body.tools = access.body.tools || {};
    access.body.tools.links = args.toolLinks || accessArgs.toolLinks;
  }

  if (args.hasSearch) {
    access.body.tools = access.body.tools || {};
    access.body.tools.search = {
      id: args.searchId || accessArgs.searchId,
      modalId: args.searchModalId || accessArgs.searchModalId,
      input: {
        id: args.searchInputId || accessArgs.searchInputId,
        label: args.searchLabel || accessArgs.searchLabel,
        placeholder: args.searchPlaceholder || accessArgs.searchPlaceholder
      },
      button: {
        id: args.searchBtnId || accessArgs.searchBtnId,
        label: args.searchLabel || accessArgs.searchLabel,
        title: args.searchTitle || accessArgs.searchTitle
      }
    };
  }

  if (args.hasTranslate) {
    access.body.tools = access.body.tools || {};
    access.body.tools.links = access.body.tools.links || {};
    access.body.tools.translate = {
      id: args.translateId || accessArgs.translateId,
      collapseId: args.translateCollapseId || accessArgs.translateCollapseId,
      button: {
        title: args.translateButtonTitle || accessArgs.translateButtonTitle,
        kind: args.translateButtonKind || accessArgs.translateButtonKind
      },
      languages: args.translateLanguage || accessArgs.translateLanguages
    };
  }

  return access;
};

export { accessArgTypes, accessArgs, accessProps, getItemArgs };
