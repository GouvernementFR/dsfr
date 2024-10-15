const buttonCloseArgTypes = {
  buttonCloseLabel: {
    if: { arg: 'dismissible', eq: true },
    control: 'text',
    description: 'Libellé du bouton de fermeture',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'button close'
    }
  },
  buttonCloseJavaScript: {
    if: { arg: 'dismissible', eq: true },
    control: 'text',
    description: 'Code JavaScript à exécuter lors du clic sur le bouton de fermeture',
    type: {
      value: 'string'
    },
    table: {
      category: 'button close'
    }
  }
};

const alertArgTypes = {
  title: {
    control: 'text',
    description: 'Titre de l\'alerte (obligatoire en md)',
    type: {
      value: 'string'
    }
  },
  text: {
    control: 'text',
    description: 'Description de l\'alerte',
    type: {
      value: 'string'
    }
  },
  type: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        success: 'Succès',
        error: 'Erreur',
        info: 'Information',
        warning: 'Attention'
      }
    },
    description: 'Type d\'alerte<br>Valeurs :<br>- Défaut : Alerte sans couleur<br>- Succès : Alerte verte pour indiquer une action ou une tâche terminée avec succès.<br>- Erreur : Alerte rouge à utiliser quand il y a plusieurs erreurs dans un formulaire, ou des erreurs bloquantes à remonter pour l’utilisateur.<br>- Information : Alerte bleue à utiliser pour mettre en exergue des informations importantes.<br>- Attention : Alerte orange à utiliser à utiliser pour mettre en exergue des risques ou points d’attention importants.',
    options: ['default', 'success', 'error', 'info', 'warning']
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de l\'alerte',
    options: ['sm', 'md']
  },
  id: {
    control: 'text',
    description: 'Attribut \'id\' de l\'alerte'
  },
  dismissible: {
    control: 'boolean',
    description: 'L\'alerte est refermable'
  },
  icon: {
    control: 'text',
    description: 'Icône personnalisée sur l\'alerte'
  },
  ...buttonCloseArgTypes
};

const alertArgs = {
  title: 'Lorem ipsum dolor',
  text: 'sit amet, consectetur adipiscing elit. Nullam id purus nec purus ultricies lacinia. Nullam nec purus nec purus ultricies lacinia.',
  type: 'default',
  size: 'md',
  id: '',
  icon: '',
  dismissible: false,
  buttonCloseLabel: 'Masquer le message',
  buttonCloseJavaScript: 'const alert = this.parentNode; alert.parentNode.removeChild(alert)'
};

const alertProps = (args) => {
  const alert = {
    title: args.title || alertArgs.title,
    text: args.text || alertArgs.text,
    size: args.size || alertArgs.size,
    icon: args.icon || alertArgs.icon,
    dismissible: args.dismissible || alertArgs.dismissible,
    id: args.id || undefined
  };

  if (args.type !== 'default') {
    alert.type = args.type;
  }

  if (alert.dismissible && args.buttonCloseJavaScript) {
    alert.button = {
      label: args.buttonCloseLabel || alertArgs.buttonCloseLabel,
      attributes: {
        title: args.buttonCloseLabel || alertArgs.buttonCloseLabel,
        onClick: args.buttonCloseJavaScript || undefined
      }
    };
  }

  return alert;
};

export { alertArgTypes, alertArgs, alertProps };
