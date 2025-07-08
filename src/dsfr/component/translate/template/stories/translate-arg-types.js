const translateArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' du sélecteur de langue',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  collapseId: {
    control: 'text',
    description: 'Attribut \'id\' du menu à controler',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  noBorder: {
    control: 'boolean',
    description: 'Version sans bordure sur le bouton',
    type: {
      value: 'boolean'
    }
  }
};

const getLanguagesArgs = (id, name, locale) => {
  const language = {
    active: id === 1,
    id: `language-id-${id}`,
    name: name,
    locale: locale,
    href: `/${locale}/`
  };

  return language;
};

const translateArgs = {
  noBorder: false,
  languages: [
    getLanguagesArgs(1, 'Français', 'fr'),
    getLanguagesArgs(2, 'English', 'en'),
    getLanguagesArgs(2, 'Español', 'es'),
    getLanguagesArgs(4, 'Deutsch', 'de')
  ],
  id: 'translate-id',
  collapseId: 'translate-collapse-id',
  buttonId: 'button-id',
  buttonTitle: 'Sélectionner une langue'
};

const translateProps = (args) => {
  const translate = {
    id: args.id || undefined,
    collapseId: args.collapseId || translateArgs.collapseId,
    button: {
      id: args.buttonId || translateArgs.buttonId,
      title: args.buttonTitle || translateArgs.buttonTitle,
      kind: args.noBorder ? 4 : 3
    },
    languages: args.languages || translateArgs.languages
  };

  return translate;
};

export { translateArgTypes, translateArgs, translateProps };
