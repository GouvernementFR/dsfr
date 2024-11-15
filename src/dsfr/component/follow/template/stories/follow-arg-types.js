const newsletterArgTypes = {
  hasNewsletter: {
    type: { name: 'boolean' },
    description: 'Si true, ajoute un bloc newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterTitle: {
    if: { arg: 'hasNewsletter', eq: true },
    control: 'text',
    description: 'Titre du bloc newsletter',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterHasDesc: {
    if: { arg: 'hasNewsletter', eq: true },
    control: 'boolean',
    description: 'Ajoute une description au bloc newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterDesc: {
    if: { arg: 'newsletterHasDesc', eq: true },
    control: 'text',
    description: 'Description du bloc newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterType: {
    if: { arg: 'hasNewsletter', eq: true },
    control: {
      type: 'select',
      labels: {
        button: 'Bouton',
        form: 'Formulaire',
        alert: 'Alerte de confirmation'
      }
    },
    description: 'Type d\'action d\'accès à la newsletter',
    options: ['button', 'form', 'alert'],
    type: {
      value: 'string'
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterButtonId: {
    if: { arg: 'newsletterType', eq: 'button' },
    control: 'text',
    description: 'Identifiant du bouton vers la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterButtonLabel: {
    if: { arg: 'newsletterType', eq: 'button' },
    control: 'text',
    description: 'Label du bouton vers la newsletter',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterButtonTitle: {
    if: { arg: 'newsletterType', eq: 'button' },
    control: 'text',
    description: 'Attribut title du bouton vers la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormAction: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'URL de l\'action du formulaire de la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormHint: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Texte d\'aide du formulaire de la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputId: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Identifiant du champ de saisie de l\'adresse mail',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputPlaceholder: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Placeholder du champ de saisie de l\'adresse mail',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputLabel: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Label du champ de saisie de l\'adresse mail',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputTitle: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Attribut title du champ de saisie de l\'adresse mail',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputhasError: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'boolean',
    description: 'Si true, affiche un message d\'erreur',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormInputError: {
    if: { arg: 'newsletterFormInputhasError', eq: 'true' },
    control: 'text',
    description: 'Message d\'erreur du champ de saisie de l\'adresse mail',
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormButtonId: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Identifiant du bouton de soumission du formulaire de la newsletter',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormButtonLabel: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Label du bouton de soumission du formulaire de la newsletter',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'newsletter'
    }
  },
  newsletterFormButtonTitle: {
    if: { arg: 'newsletterType', eq: 'form' },
    control: 'text',
    description: 'Attribut title du bouton de soumission du formulaire de la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterAlertId: {
    if: { arg: 'newsletterType', eq: 'alert' },
    control: 'text',
    description: 'Identifiant de l\'alerte de confirmation de la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterAlertText: {
    if: { arg: 'newsletterType', eq: 'alert' },
    control: 'text',
    description: 'Texte de l\'alerte de confirmation de la newsletter',
    table: {
      category: 'newsletter'
    }
  },
  newsletterAlertType: {
    if: { arg: 'newsletterType', eq: 'alert' },
    control: 'select',
    description: 'Type de l\'alerte de la newsletter (success, info, warning, error)',
    options: ['success', 'info', 'warning', 'error'],
    table: {
      category: 'newsletter'
    }
  }
};

const socialsArgTypes = {
  hasSocials: {
    type: { name: 'boolean' },
    description: 'Si true, ajoute un bloc réseaux sociaux',
    table: {
      category: 'socials'
    }
  },
  socialsTitle: {
    if: { arg: 'hasSocials', eq: true },
    control: 'text',
    description: 'Titre du bloc réseaux sociaux',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'socials'
    }
  },
  socialsSize: {
    if: { arg: 'hasSocials', eq: true },
    control: 'select',
    description: 'Taille des boutons des réseaux sociaux',
    options: ['md', 'lg'],
    table: {
      category: 'socials'
    }
  },
  socialsButtons: {
    if: { arg: 'hasSocials', eq: true },
    control: 'object',
    description: 'Liste des boutons de réseaux sociaux',
    table: {
      category: 'socials'
    }
  }
};

const followArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant du bloc lettre d’information et réseaux sociaux',
    table: { category: 'attributes' }
  },
  ...newsletterArgTypes,
  ...socialsArgTypes
};

const followArgs = {
  hasNewsletter: false,
  newsletterTitle: 'Abonnez-vous à notre lettre d’information',
  newsletterHasDesc: true,
  newsletterDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.',
  newsletterType: 'button',
  newsletterButtonId: 'newsletter-button',
  newsletterButtonLabel: 'S\'abonner',
  newsletterButtonTitle: 'S‘abonner à notre lettre d’information',
  newsletterFormAction: '',
  newsletterFormHint: 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.',
  newsletterFormInputId: 'newsletter-email',
  newsletterFormInputPlaceholder: 'Votre adresse électronique (ex. : nom@domaine.fr)',
  newsletterFormInputLabel: 'Votre adresse électronique (ex. : nom@domaine.fr)',
  newsletterFormInputTitle: 'Votre adresse électronique (ex. : nom@domaine.fr)',
  newsletterFormInputhasError: false,
  newsletterFormInputError: 'Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@domaine.fr',
  newsletterFormButtonId: 'newsletter-button',
  newsletterFormButtonLabel: 'S\'abonner',
  newsletterFormButtonTitle: 'S‘abonner à notre lettre d’information',
  newsletterAlertId: 'newsletter-alert',
  newsletterAlertText: 'Votre inscription a bien été prise en compte.',
  newsletterAlertType: 'success',
  hasSocials: true,
  socialsTitle: 'Suivez-nous sur les réseaux sociaux',
  socialsSize: 'md',
  socialsButtons: [
    {
      id: 'rs-facebook',
      label: 'Facebook',
      title: 'Suivez-nous sur Facebook',
      url: '[Lien vers le facebook de l\'organisation - à modifier]',
      type: 'facebook'
    },
    {
      id: 'rs-twitter-X',
      label: 'X (anciennement Twitter)',
      title: 'Suivez-nous sur X (anciennement Twitter)',
      url: '[Lien vers le twitter de l\'organisation - à modifier]',
      type: 'twitter-x'
    },
    {
      id: 'rs-linkedin',
      label: 'LinkedIn',
      title: 'Suivez-nous sur LinkedIn',
      url: '[Lien vers le linkedin de l\'organisation - à modifier]',
      type: 'linkedin'
    },
    {
      id: 'rs-instagram',
      label: 'Instagram',
      title: 'Suivez-nous sur Instagram',
      url: '[Lien vers le instagram de l\'organisation - à modifier]',
      type: 'instagram'
    },
    {
      id: 'rs-youtube',
      label: 'YouTube',
      title: 'Suivez-nous sur YouTube - nouvelle fenêtre',
      url: '[Lien vers le youtube de l\'organisation - à modifier]',
      type: 'youtube'
    }
  ],
  id: 'follow'
};

const followProps = (args) => {
  const follow = {
    id: args.id || followArgs.id
  };

  if (args.hasSocials) {
    follow.socials = {
      title: args.socialsTitle || followArgs.socialsTitle,
      size: args.socialsSize || followArgs.socialsSize,
      buttons: args.socialsButtons || followArgs.socialsButtons
    };
  }

  if (args.hasNewsletter) {
    follow.newsletter = {
      title: args.newsletterTitle || followArgs.newsletterTitle,
      type: args.newsletterType || followArgs.newsletterType
    };

    if (args.newsletterHasDesc) {
      follow.newsletter.desc = args.newsletterDesc;
    }

    if (args.newsletterType === 'button') {
      follow.newsletter.button = {
        id: args.newsletterButtonId || followArgs.newsletterButtonId,
        label: args.newsletterButtonLabel || followArgs.newsletterButtonLabel,
        title: args.newsletterButtonTitle || followArgs.newsletterButtonTitle
      };
    } else if (args.newsletterType === 'form') {
      follow.newsletter.form = {
        hint: args.newsletterFormHint !== '' ? args.newsletterFormHint || followArgs.newsletterFormHint : undefined,
        action: args.newsletterFormAction || followArgs.newsletterFormAction,
        input: {
          id: args.newsletterFormInputId || followArgs.newsletterFormInputId,
          placeholder: args.newsletterFormInputPlaceholder || followArgs.newsletterFormInputPlaceholder,
          label: args.newsletterFormInputLabel || followArgs.newsletterFormInputLabel,
          type: 'email',
          error: args.newsletterFormInputhasError ? args.newsletterFormInputError || followArgs.newsletterFormInputError : undefined,
          attributes: {
            title: args.newsletterFormInputTitle || followArgs.newsletterFormInputTitle,
            autocomplete: 'email'
          },
          button: {
            id: args.newsletterFormButtonId || followArgs.newsletterFormButtonId,
            label: args.newsletterFormButtonLabel || followArgs.newsletterFormButtonLabel,
            title: args.newsletterFormButtonTitle || followArgs.newsletterFormButtonTitle
          }
        }
      };
    } else if (args.newsletterType === 'alert') {
      follow.newsletter.alert = {
        id: args.newsletterAlertId || followArgs.newsletterAlertId,
        text: args.newsletterAlertText || followArgs.newsletterAlertText,
        type: args.newsletterAlertType || followArgs.newsletterAlertType
      };
    }
  }

  return follow;
};

export { followArgTypes, followArgs, followProps };
