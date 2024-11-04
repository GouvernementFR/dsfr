const placeholderArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du placeholder',
    type: {
      value: 'string'
    }
  },
  body: {
    control: 'text',
    description: 'Texte explicatif, contenu textuel ou html',
    type: {
      value: 'string'
    }
  }
};

const placeholderArgs = {
  title: '**Nom du service** est désactivé',
  body: 'Autorisez le dépôt de cookies pour accéder à cette fonctionnalité.'
};

const placeholderProps = (args) => {
  const placeholder = {
    title: args.title || placeholderArgs.title,
    body: args.body || placeholderArgs.body
  };

  return placeholder;
};

export { placeholderArgTypes, placeholderArgs, placeholderProps };
