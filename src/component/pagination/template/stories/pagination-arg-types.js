const paginationArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' du composant',
    type: {
      value: 'string'
    }
  }
};

const getData = (label, displayedLg = false, hasLgLabel = false, title = null) => {
  return {
    label: label,
    title: title,
    href: '#',
    displayedLg: displayedLg === true,
    hasLgLabel: hasLgLabel === true
  };
};

const getPageData = (pageNumber, displayedLg) => {
  return getData(pageNumber, displayedLg === true, false, `Page ${pageNumber}`);
};

const getNavData = (label, hasLgLabel) => {
  return getData(label, false, hasLgLabel === true, label);
};

const getPages = () => {
  const pages = [];
  for (let i = 1; i < 4; i++) pages.push(getPageData(i.toString(), i > 2));
  pages.push(getData('…', true));
  for (let i = 130; i < 133; i++) pages.push(getPageData(i.toString(), i < 132));
  return pages;
};

const paginationArgs = {
  id: 'pagination',
  first: getNavData('Première page'),
  prev: getNavData('Page précédente', true),
  next: getNavData('Page suivante', true),
  last: getNavData('Dernière page'),
  pages: getPages()
};

const paginationProps = (args) => {
  const pages = [];

  for (let i = 0; i < args.pages.length; i++) {
    const pagesArgs = args.pages[i];
    const pagePaginationArgs = paginationArgs.pages[i];
    console.log('pagePaginationArgs', pagePaginationArgs);
    const page = {
      active: i === 2,
      label: pagesArgs.label || pagePaginationArgs.label,
      title: pagesArgs.title || pagePaginationArgs.title,
      href: pagesArgs.href || pagePaginationArgs.href
    };

    pages.push(page);
  }

  const pagination = {
    id: args.id || undefined,
    first: args.first || paginationArgs.first,
    prev: args.prev || paginationArgs.prev,
    next: args.next || paginationArgs.next,
    last: args.last || paginationArgs.last,
    pages: pages
  };

  return pagination;
};

export { paginationArgTypes, paginationArgs, paginationProps };
