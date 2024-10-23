const languageArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' de la langue',
    type: {
      value: 'string',
      required: true
    }
  },
  name: {
    control: 'text',
    description: 'Nom de la langue dans son alphabet',
    type: {
      value: 'string',
      required: true
    }
  },
  locale: {
    control: 'text',
    description: 'Code de la langue en 2 caratères',
    type: {
      value: 'string',
      required: true
    }
  },
  href: {
    control: 'text',
    description: 'Url vers la page de la langue',
    type: {
      value: 'string',
      required: true
    }
  }
};

const languageArgs = {
  id: 'language-id',
  name: 'Langue',
  locale: 'Locale',
  href: 'https://www.example.com/locale/'
};

const languageProps = (args) => {
  const language = {
    id: args.id || undefined,
    name: args.name || languageArgs.name,
    locale: args.locale || languageArgs.locale,
    href: args.href || languageArgs.href
  };

  return language;
};

export { languageArgTypes, languageArgs, languageProps };
