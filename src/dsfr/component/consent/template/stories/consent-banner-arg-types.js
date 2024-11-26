const consentBannerArgTypes = {
  title: {
    control: 'text',
    description: 'Titre de la bannière',
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

const consentBannerArgs = {
  title: 'À propos des cookies sur nomdusite.fr',
  body: '<p class="fr-text--sm">Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Pour en savoir plus, visitez la page <a href="#">Données personnelles et cookies</a>. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.</p>'
};

const consentBannerProps = (args) => {
  const consent = {
    title: args.title || consentBannerArgTypes.title,
    body: args.body || consentBannerArgTypes.body
  };

  return consent;
};

export { consentBannerArgTypes, consentBannerArgs, consentBannerProps };
