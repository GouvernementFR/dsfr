const tooltipArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant de l\'infobulle',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  content: {
    control: 'text',
    description: 'Contenu texte de l\'infobulle'
  },
  type: {
    control: {
      type: 'select',
      labels: {
        default: 'Information contextuelle',
        infobulle: 'Infobulle'
      }
    },
    description: 'Types d\'infobulle<br>Valeurs :<br>- Information contextuelle : Déclenchement au survol<br>- Infobulle : Déclenchement au clic',
    options: ['default', 'infobulle'],
    type: {
      value: 'string'
    },
    table: { category: 'variant' }
  }
};

const tooltipArgs = {
  content: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  type: 'default',
  id: 'tooltip'
};

const tooltipButtonProps = (args) => {
  const buttonClasses = [];
  if (args.type === 'infobulle') {
    buttonClasses.push('fr-btn--tooltip');
  }
  return {
    label: args.type === 'infobulle' ? 'infobulle' : 'Information contextuelle',
    classes: buttonClasses
  };
};

const tooltipProps = (args) => {
  const tooltip = {
    id: args.id || tooltipArgs.id,
    content: args.content || tooltipArgs.content
  };

  return tooltip;
};

export { tooltipArgTypes, tooltipArgs, tooltipProps, tooltipButtonProps };
