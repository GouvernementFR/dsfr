const tooltipArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant de l\'infobulle',
    table: { category: 'tooltip' }
  },
  content: {
    control: 'text',
    description: 'Contenu texte de l\'infobulle',
    table: { category: 'tooltip' }
  }
};

const tooltipArgs = {
  id: 'storybook-tooltip',
  content: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
};

const tooltipProps = (args) => {
  const tooltip = {
    id: args.id || tooltipArgs.id,
    content: args.content || tooltipArgs.content
  };

  return tooltip;
};

export { tooltipArgTypes, tooltipArgs, tooltipProps };
