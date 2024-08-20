const linkArgTypes = {
  linkLabel: {
    control: 'text',
    description: 'Libellé du lien "Qu\'est-ce que FranceConnect ?"',
    type: {
      value: 'string'
    },
    table: { disable: true }
  },
  linkHref: {
    control: 'text',
    description: 'URL du lien "Qu\'est-ce que FranceConnect ?"',
    type: {
      value: 'string'
    },
    table: { disable: true }
  }
};

const connectArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du bouton franceConnect',
    type: {
      value: 'string'
    }
  },
  type: {
    control: {
      type: 'select',
      labels: {
        default: 'FranceConnect',
        // agent: 'AgentConnect',
        plus: 'FranceConnect+'
      }
    },
    description: 'Type de bouton franceConnect',
    options: ['default', 'plus']
  },
  login: {
    control: 'text',
    description: 'Texte "S\'identifier avec"',
    default: 'S\'identifier avec',
    type: {
      value: 'string'
    },
    table: { disable: true }
  },
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML',
    options: ['button', 'a']
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive le bouton',
    type: {
      value: 'boolean'
    }
  },
  ...linkArgTypes
};

const connectArgs = {
  id: 'france-connect',
  type: 'default',
  login: 'S’identifier avec',
  linkLabel: 'Qu\'est-ce que FranceConnect ?',
  linkHref: 'https://franceconnect.gouv.fr',
  markup: 'button',
  disabled: false
};

const connectPlusArgs = {
  id: 'france-connect-plus',
  type: 'plus',
  linkLabel: 'Qu\'est-ce que FranceConnect+ ?',
  linkHref: 'https://franceconnect.gouv.fr/france-connect-plus'
};

const connectProps = (args) => {
  const connect = {
    id: args.id || undefined,
    type: args.type || connectArgs.type,
    login: args.login || connectArgs.login,
    markup: args.markup || connectArgs.markup,
    disabled: args.disabled || connectArgs.disabled
  };

  switch (connect.type) {
    // case 'agent':
    //   connect.brand = 'AgentConnect';
    //   break;
    default:
      connect.brand = 'FranceConnect';
  }

  const link = {
    label: connect.type === 'plus' ? connectPlusArgs.linkLabel : args.linkLabel || connectArgs.linkLabel,
    href: connect.type === 'plus' ? connectPlusArgs.linkHref : args.linkHref || connectArgs.linkHref
  };

  connect.link = link;

  return connect;
};

export { connectArgTypes, connectArgs, connectProps };
