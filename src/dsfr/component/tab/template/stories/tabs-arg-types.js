import { uniqueId } from '../../../../core/template/stories/unique-id';

const tabsArgTypes = {
  hasIcon: {
    control: 'boolean',
    description: 'Si true, ajoute une icone dans le titre des onglets'
  }
};

const getTabArgs = (num) => {
  const tabs = [];

  for (let i = 1; i <= num; i++) {
    tabs.push({
      id: uniqueId('storybook-tab'),
      label: `Libellé onglet ${i}`,
      content: `Contenu onglet ${i}`
    });
  };

  return tabs;
};

const tabsArgs = {
  hasIcon: false,
  tabs: getTabArgs(4)
};

const tabsProps = (args) => {
  for (const tab of args.tabs) {
    tab.icon = args.hasIcon ? 'checkbox-circle-line' : undefined;
  }

  const tabsGroup = {
    tabs: args.tabs
  };

  return tabsGroup;
};

export { tabsArgTypes, tabsArgs, tabsProps };
