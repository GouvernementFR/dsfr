import { languageArgTypes, languageArgs } from './language-arg-types';

const getLanguagesArgTypes = (id) => {
  const language = {};

  const table = {
    table: {
      category: `langue ${id}`
    }
  };

  language[`id${id}`] = { ...languageArgTypes.id, ...table };

  language[`name${id}`] = {
    ...languageArgTypes.name,
    ...table
  };

  language[`locale${id}`] = {
    ...languageArgTypes.locale,
    ...table
  };

  return language;
};

const translateArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' du sélecteur de langue',
    type: {
      value: 'string',
      required: true
    }
  },
  ...getLanguagesArgTypes(1),
  ...getLanguagesArgTypes(2),
  ...getLanguagesArgTypes(3),
  ...getLanguagesArgTypes(4)
};

const getLanguagesArgs = (id, name, locale) => {
  const language = {};

  language[`id${id}`] = `${languageArgs.id}-${id}`;
  language[`name${id}`] = name || `${languageArgs.name} ${id}`;
  language[`locale${id}`] = locale || `${languageArgs.locale} ${id}`;

  return language;
};

const translateArgs = {
  id: 'translate-id',
  ...getLanguagesArgs(1, 'Français', 'FR'),
  ...getLanguagesArgs(2, 'English', 'EN'),
  ...getLanguagesArgs(3, 'Español', 'ES'),
  ...getLanguagesArgs(4, 'Deutsch', 'DE')
};

const translateProps = (args) => {
  const languages = [];

  for (let i = 1; i <= 4; i++) {
    const language = {
      id: args[`id${i}`] || languageArgs.id,
      active: i === 1,
      name: args[`name${i}`] || languageArgs.name,
      locale: args[`locale${i}`] || languageArgs.locale
    };

    languages.push(language);
  }

  const translate = {
    id: args.id || undefined,
    collapseId: 'translate-collapse-id',
    button: {
      id: 'button-id',
      title: 'Sélectionner une langue'
    },
    languages: languages
  };

  return translate;
};

export { translateArgTypes, translateArgs, translateProps };
