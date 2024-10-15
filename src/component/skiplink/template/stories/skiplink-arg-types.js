const skiplinkArgTypes = {
  items: []
};

const getItemArgs = (id, label, href) => {
  const item = {};

  item.label = label || `Titre du lien ${id}`;
  item.href = href ? `#${href}` : '#';

  return item;
};

const skiplinkArgs = {
  items: [
    getItemArgs(1, 'Contenu', 'content'),
    getItemArgs(2, 'Menu', 'header-navigation'),
    getItemArgs(3, 'Recherche', 'header-search'),
    getItemArgs(3, 'Pied de page', 'footer')
  ]
};

const skiplinkProps = (args) => {
  const skiplink = {
    items: args.items || skiplinkArgs.items
  };

  return skiplink;
};

export { skiplinkArgTypes, skiplinkArgs, skiplinkProps };
