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
      content: `Contenu onglet ${i}`,
      icon: 'checkbox-circle-line'
    });
  };

  return tabs;
};

const tabsArgs = {
  hasIcon: false,
  tabs: getTabArgs(4)
};

const tabsProps = (args) => {
  const tabsGroup = {
    tabs: args.tabs
  };

  for (let i = 0; i < tabsGroup.tabs.length; i++) {
    if (args.hasIcon) {
      tabsGroup.tabs[i].icon = tabsGroup.tabs[i].icon || 'checkbox-circle-line';
    } else {
      tabsGroup.tabs[i].icon = undefined;
    }
  }

  return tabsGroup;
};

export { tabsArgTypes, tabsArgs, tabsProps };
