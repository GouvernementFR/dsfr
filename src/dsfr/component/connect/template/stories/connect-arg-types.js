import es from '../../i18n/es.yml?raw';
import fr from '../../i18n/fr.yml?raw';
import en from '../../i18n/en.yml?raw';
import de from '../../i18n/de.yml?raw';
import esGlobal from '../../../../../i18n/es.yml?raw';
import frGlobal from '../../../../../i18n/fr.yml?raw';
import enGlobal from '../../../../../i18n/en.yml?raw';
import deGlobal from '../../../../../i18n/de.yml?raw';
import yaml from 'yaml';

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
    },
    table: { category: 'attributes' }
  },
  variant: {
    control: {
      type: 'select',
      labels: {
        default: 'FranceConnect',
        // agent: 'AgentConnect',
        plus: 'FranceConnect+'
      }
    },
    description: 'Variation de bouton franceConnect',
    options: ['default', 'plus']
  },
  lang: {
    control: {
      type: 'select',
      labels: {
        fr: 'Français',
        en: 'Anglais',
        es: 'Espagnol',
        de: 'Allemand'
      }
    },
    description: 'Langue du texte',
    options: ['fr', 'en', 'es', 'de']
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
  variant: 'default',
  linkLabel: 'Qu\'est-ce que FranceConnect ?',
  linkHref: 'https://franceconnect.gouv.fr',
  markup: 'button',
  lang: 'fr',
  disabled: false,
  id: 'france-connect'
};

const connectPlusArgs = {
  type: 'plus',
  linkLabel: 'Qu\'est-ce que FranceConnect+ ?',
  linkHref: 'https://franceconnect.gouv.fr/france-connect-plus',
  id: 'france-connect-plus'
};

const getLang = (lang) => {
  switch (lang) {
    case 'es':
      return yaml.parse(es);
    case 'en':
      return yaml.parse(en);
    case 'de':
      return yaml.parse(de);
    default:
      return yaml.parse(fr);
  }
};

const getGlobalLang = (lang) => {
  switch (lang) {
    case 'es':
      return yaml.parse(esGlobal);
    case 'en':
      return yaml.parse(enGlobal);
    case 'de':
      return yaml.parse(deGlobal);
    default:
      return yaml.parse(frGlobal);
  }
};

const connectProps = (args) => {
  const connect = {
    id: args.id || undefined,
    variant: args.variant || connectArgs.variant,
    login: getLang(args.lang).default.login,
    markup: args.markup || connectArgs.markup,
    disabled: args.disabled || connectArgs.disabled
  };

  switch (connect.variant) {
    // case 'agent':
    //   connect.brand = 'AgentConnect';
    //   break;
    default:
      connect.brand = 'FranceConnect';
  }

  const link = {
    label: connect.variant === 'plus' ? getLang(args.lang).plus.link : getLang(args.lang).default.link,
    href: connect.variant === 'plus' ? connectPlusArgs.linkHref : args.linkHref || connectArgs.linkHref,
    newWindow: getGlobalLang(args.lang).blank
  };

  connect.link = link;

  return connect;
};

export { connectArgTypes, connectArgs, connectProps };
