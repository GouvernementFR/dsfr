const buttonArgsTypes = {
  buttonLabel: {
    if: { arg: 'dismissible', eq: true },
    control: 'text',
    description: 'Libellé du bouton de fermeture',
    type: {
      value: 'string'
    },
    table: { category: 'dismiss' }
  }
};

const noticeArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du bandeau',
    type: {
      value: 'string',
      required: true
    }
  },
  hasDescription: {
    control: 'boolean',
    description: 'Le bandeau a une description'
  },
  desc: {
    if: { arg: 'hasDescription', eq: true },
    control: 'text',
    description: 'Texte de description du bandeau',
    type: {
      value: 'string'
    }
  },
  hasIcon: {
    control: 'boolean',
    description: 'Le bandeau a une icône',
    table: { category: 'icon' }
  },
  icon: {
    if: { arg: 'hasIcon', eq: true },
    control: 'text',
    description: 'Nom de l\'icône du bandeau',
    type: {
      value: 'string'
    },
    table: { category: 'icon' }
  },
  type: {
    control: {
      type: 'select',
      labels: {
        info: 'info',
        warning: 'warning',
        alert: 'alert',
        'weather-orange': 'weather-orange',
        'weather-red': 'weather-red',
        'weather-purple': 'weather-purple',
        kidnapping: 'kidnapping',
        cyberattack: 'cyberattack',
        vigipirate: 'vigipirate',
        witness: 'witness'
      }
    },
    description: 'Type de bandeau',
    options: ['info', 'warning', 'alert', 'weather-orange', 'weather-purple', 'kidnapping', 'cyberattack', 'vigipirate', 'witness'],
    table: {
      category: 'type'
    }
  },
  markup: {
    control: {
      type: 'select',
      labels: {
        p: 'p',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6'
      }
    },
    description: 'Type de bandeau',
    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },
  notice: {
    control: 'boolean',
    description: ' Si true, ajoute un role notice (si insertion à la volée du bandeau)'
  },
  dismissible: {
    control: 'boolean',
    description: 'Ajoute un bouton de fermeture',
    table: { category: 'dismiss' }
  },
  hasLink: {
    control: 'boolean',
    description: 'Le bandeau a un lien',
    table: { category: 'link' }
  },
  linkLabel: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Texte du lien du bandeau',
    type: {
      value: 'string'
    },
    table: { category: 'link' }
  },
  linkTitle: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Title du lien du bandeau',
    type: {
      value: 'string'
    },
    table: { category: 'link' }
  },
  linkHref: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Href du lien du bandeau',
    type: {
      value: 'string'
    },
    table: { category: 'link' }
  },
  blank: {
    if: { arg: 'hasLink', eq: true },
    control: 'boolean',
    description: 'Si true, target prend la valeur _blank, sinon _self',
    table: { category: 'link' }
  },
  ...buttonArgsTypes
};

const noticeArgs = {
  id: '',
  title: 'Titre du bandeau',
  hasDescription: false,
  desc: 'Texte de description',
  hasIcon: true,
  icon: '',
  type: 'info',
  markup: 'p',
  notice: false,
  dismissible: false,
  buttonLabel: 'Masquer le message',
  hasLink: false,
  linkLabel: 'Lien de consultation',
  linkHref: '#',
  linkTitle: '[À MODIFIER - Intitulé] - nouvelle fenêtre',
  blank: false
};

const noticeProps = (args) => {
  const notice = {
    id: args.id || undefined,
    title: args.title || noticeArgs.title,
    dismissible: args.dismissible || noticeArgs.dismissible,
    icon: args.hasIcon ? args.icon : false,
    type: args.type || noticeArgs.type,
    markup: args.markup || noticeArgs.markup,
    notice: args.notice || noticeArgs.notice
  };

  if (args.hasDescription) notice.desc = args.desc || undefined;

  if (args.hasLink) {
    notice.link = {
      label: args.linkLabel || noticeArgs.linkLabel,
      href: args.linkHref || noticeArgs.linkHref,
      title: args.linkTitle || noticeArgs.linkTitle,
      blank: args.blank || noticeArgs.blank,
      self: !args.blank || undefined
    };
  }

  if (args.dismissible) {
    notice.button = {
      label: args.buttonLabel || noticeArgs.buttonLabel,
      title: args.buttonLabel || noticeArgs.buttonLabel,
      attributes: {
        onclick: 'const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)'
      }
    };
  }

  return notice;
};

export { noticeArgTypes, noticeArgs, noticeProps };
