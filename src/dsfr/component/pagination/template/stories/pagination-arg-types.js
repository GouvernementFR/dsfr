const paginationArgTypes = {
  hasFirstAndLast: {
    control: 'boolean',
    description: 'Ajoute des boutons Première et Dernière page',
    table: { category: 'first and last' }
  },
  first: {
    if: { arg: 'hasFirstAndLast', eq: true },
    control: 'object',
    description: 'Données du bouton de Première page',
    type: {
      value: 'array'
    },
    table: { category: 'first and last' }
  },
  last: {
    if: { arg: 'hasFirstAndLast', eq: true },
    control: 'object',
    description: 'Données du bouton de Dernière page',
    type: {
      value: 'array'
    },
    table: { category: 'first and last' }
  },
  FirstAndLastDisplayedLg: {
    if: { arg: 'hasFirstAndLast', eq: true },
    control: 'boolean',
    description: 'Affiche les boutons Première et Dernière page à partir du breakpoint LG',
    table: { category: 'first and last' }
  },

  hasPrevAndNext: {
    control: 'boolean',
    description: 'Ajoute des boutons page Précédente et Suivante',
    table: { category: 'prev and next' }
  },
  prev: {
    if: { arg: 'hasPrevAndNext', eq: true },
    control: 'object',
    description: 'Données du bouton de page Précédente',
    type: {
      value: 'array'
    },
    table: { category: 'prev and next' }
  },
  next: {
    if: { arg: 'hasPrevAndNext', eq: true },
    control: 'object',
    description: 'Données du bouton de page Suivante',
    type: {
      value: 'array'
    },
    table: { category: 'prev and next' }
  },
  PrevAndNextDisplayedLg: {
    if: { arg: 'hasPrevAndNext', eq: true },
    control: 'boolean',
    description: 'Affiche les boutons page Précédente et Suivante à partir du breakpoint LG',
    table: { category: 'prev and next' }
  },
  PrevAndNextHasLgLabel: {
    if: { arg: 'hasPrevAndNext', eq: true },
    control: 'boolean',
    description: 'Affiche les libellés des boutons page Précédente et Suivante à partir du breakpoint LG',
    table: { category: 'prev and next' }
  }
};

const getData = (label, title = null, displayedLg = true) => {
  return {
    label: label,
    title: title,
    href: '#',
    displayedLg: displayedLg
  };
};

const getPageData = (pageNumber, displayedLg) => {
  return { ...getData(pageNumber, `Page ${pageNumber}`, displayedLg) };
};

const getNavData = (label) => {
  return { ...getData(label, label) };
};

const getPages = () => {
  const pages = [];
  for (let i = 1; i < 4; i++) pages.push(getPageData(i.toString(), i > 2));
  pages.push({ markup: 'span', ...getData('…', null) });
  for (let i = 130; i < 133; i++) pages.push(getPageData(i.toString(), i < 132));
  return pages;
};

const paginationArgs = {
  hasFirstAndLast: true,
  first: getNavData('Première page'),
  last: getNavData('Dernière page'),
  FirstAndLastDisplayedLg: false,
  hasPrevAndNext: true,
  prev: getNavData('Page précédente'),
  next: getNavData('Page suivante'),
  PrevAndNextDisplayedLg: false,
  PrevAndNextHasLgLabel: true,
  pages: getPages()
};

const paginationProps = (args) => {
  const pagination = {
    id: args.id || undefined,
    pages: args.pages || paginationArgs.pages
  };

  pagination.pages[1].active = true;

  if (args.hasFirstAndLast) {
    pagination.first = args.first || paginationArgs.first;
    pagination.last = args.last || paginationArgs.last;

    pagination.first.displayedLg = args.FirstAndLastDisplayedLg;
    pagination.last.displayedLg = args.FirstAndLastDisplayedLg;
  }

  if (args.hasPrevAndNext) {
    pagination.prev = args.prev || paginationArgs.prev;
    pagination.next = args.next || paginationArgs.next;

    pagination.prev.displayedLg = args.PrevAndNextDisplayedLg;
    pagination.next.displayedLg = args.PrevAndNextDisplayedLg;

    pagination.prev.hasLgLabel = args.PrevAndNextHasLgLabel;
    pagination.next.hasLgLabel = args.PrevAndNextHasLgLabel;
  }
  return pagination;
};

export { paginationArgTypes, paginationArgs, paginationProps };
