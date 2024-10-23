import { tabArgTypes, tabArgs } from './tab-arg-types';

const getTabArgTypes = (id) => {
  const tab = {};

  const table = {
    table: {
      category: `onglet ${id}`
    }
  };

  tab[`id${id}`] = { ...tabArgTypes.id, ...table };

  tab[`label${id}`] = {
    ...tabArgTypes.label,
    ...table
  };

  tab[`content${id}`] = {
    ...tabArgTypes.content,
    ...table
  };

  return tab;
};

const tabsArgTypes = {
  ...getTabArgTypes(1),
  ...getTabArgTypes(2),
  ...getTabArgTypes(3),
  ...getTabArgTypes(4)
};

const getTabArgs = (id) => {
  const tab = {};

  tab[`id${id}`] = `${tabArgs.id}-${id}`;
  tab[`label${id}`] = `${tabArgs.label} ${id}`;
  tab[`content${id}`] = `${tabArgs.content} ${id}`;

  return tab;
};

const tabsArgs = {
  ...getTabArgs(1),
  ...getTabArgs(2),
  ...getTabArgs(3),
  ...getTabArgs(4)
};

const tabsProps = (args) => {
  const tabs = [];

  for (let i = 1; i <= 4; i++) {
    const tab = {
      label: args[`label${i}`] || tabArgs.label,
      content: args[`content${i}`] || tabArgs.content,
      id: args[`id${i}`] || tabArgs.id
    };

    tabs.push(tab);
  }

  const tabsGroup = {
    tabs: tabs
  };

  return tabsGroup;
};

export { tabsArgTypes, tabsArgs, tabsProps };
