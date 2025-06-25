import { inputArgs, inputArgTypes, inputProps } from './input-arg-types';
import { renderInput } from './input';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderInput({ input: inputProps(args) });

export default {
  id: 'input',
  title: 'DSFR/Component/Input',
  render: render,
  argTypes: inputArgTypes,
  args: inputArgs
};

export const InputStory = {
  tags: ['!autodocs'],
  args: {
    id: uniqueId('input')
  }
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('input')
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    id: uniqueId('input')
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    id: uniqueId('input')
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true,
    id: uniqueId('input')
  }
};

export const IconStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Champ avec une icône',
    id: uniqueId('input'),
    icon: 'warning-line'
  }
};

export const TelStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Numéro de téléphone',
    hint: 'Exemple: 0123456789',
    type: 'tel',
    id: uniqueId('input')
  }
};

export const NumberStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Champ de saisie de nombre',
    hint: 'Saisissez un nombre entier',
    type: 'number',
    id: uniqueId('input')
  }
};

export const PasswordStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        component: 'Préférez l\'utilisation du composant Mot de passe pour les champs de saisie de mot de passe. Il inclut un bouton pour afficher ou masquer le mot de passe saisi.'
      }
    }
  },
  args: {
    label: 'Champ type mot de passe',
    type: 'password',
    id: uniqueId('input')
  }
};

export const SearchStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        component: 'Préférez l\'utilisation du composant Barre de recherche pour les champs de recherche. Il inclut un bouton d\'envoi avec une icône loupe et un libellé en desktop.'
      }
    }
  },
  args: {
    label: 'Champ type recherche',
    type: 'search',
    id: uniqueId('input')
  }
};

export const HintIconStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('input'),
    icon: 'alert-line',
    hint: 'Texte de description additionnel'
  }
};

export const DateStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        component: 'Voir le bloc fonctionnel Date unique pour les champs de saisie de date avec jour, mois, et années séparés.'
      }
    }
  },
  args: {
    label: 'Date simple',
    type: 'date',
    id: uniqueId('input')
  }
};

export const ButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Champ avec bouton d\'envoi associé',
    addon: true,
    id: uniqueId('input')
  }
};

export const ActionStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Champ avec bouton d\'action associé',
    action: true,
    id: uniqueId('input')
  }
};

export const UrlStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Adresse du site',
    placeholder: 'https://',
    hint: 'Saisissez une url valide, commençant par https://',
    id: uniqueId('input')
  }
};

export const TextareaStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Champ de saisie de texte long',
    type: 'textarea',
    id: uniqueId('input')
  }
};
