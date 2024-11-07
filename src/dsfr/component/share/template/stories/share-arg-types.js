import { uniqueId } from '../../../../core/template/stories/unique-id';

const buttons = (id) => [
  {
    id: 'facebook-' + id,
    type: 'facebook',
    label: 'Partager sur Facebook',
    url: 'https://www.facebook.com/sharer.php?u=http://google.fr',
    width: 600,
    height: 450
  },
  {
    id: 'twitter-' + id,
    type: 'twitter-x',
    label: 'Partager sur X (anciennement Twitter)',
    url: 'https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - twitter username]&hashtags=[À MODIFIER - hashtags]',
    width: 600,
    height: 420,
    comments: 'Les paramètres de la reqûete doivent être URI-encodés (ex: encodeURIComponent() en js)'
  },
  {
    id: 'linkedin-' + id,
    type: 'linkedin',
    label: 'Partager sur LinkedIn',
    url: 'https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]',
    width: 550,
    height: 550
  },
  {
    id: 'mail-' + id,
    type: 'mail',
    label: 'Partager par email',
    url: 'mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]'
  },
  {
    id: 'copy-' + id,
    type: 'copy',
    label: 'Copier dans le presse-papier',
    onclick: "navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});" // @TODO: ajouter un polyfill pour IE11
  }
];

const shareArgTypes = {
  title: {
    control: 'text',
    description: 'Titre du bloc de partage',
    type: {
      value: 'string',
      required: true
    }
  },
  disabled: {
    control: { type: 'boolean' },
    description: 'Etat désactivé lorsque les cookies ne sont pas acceptés'
  },
  text: {
    if: { arg: 'disabled', eq: true },
    control: 'text',
    description: 'Texte complémentaire lorsque les cookies ne sont pas acceptés',
    type: {
      value: 'string'
    }
  },
  buttons: {
    control: 'object',
    description: 'Liste des boutons de partage',
    type: {
      value: 'array'
    }
  }
};

const shareArgs = {
  title: 'Partager la page',
  disabled: false,
  text: 'Veuillez autoriser le dépôt de cookies pour partager sur Facebook, Twitter et LinkedIn.',
  buttons: buttons(uniqueId('share'))
};

const shareProps = (args) => {
  const share = {
    title: args.title || shareArgs.title,
    disabled: args.disabled || shareArgs.disabled,
    buttons: buttons(uniqueId('share'))
  };

  if (share.disabled === true) share.text = args.text || shareArgs.text;

  return share;
};

export { shareArgTypes, shareArgs, shareProps };
