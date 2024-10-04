import { passwordArgs, passwordArgTypes, passwordProps } from './password-arg-types';
import { renderPassword } from './password';

const render = (args) => renderPassword({ password: passwordProps(args) });

export default {
  id: 'password',
  title: 'DSFR/Component/Password',
  render: render,
  argTypes: passwordArgTypes,
  args: passwordArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const LoginStory = {
  tags: ['!dev'],
  args: {
    hasLink: true
  }
};

export const RegisterStory = {
  tags: ['!dev'],
  args: {
    hasLink: false,
    hasMessages: true
  }
};

export const RegisterValidateStory = {
  tags: ['!dev'],
  args: {
    hasLink: false,
    hasMessages: true,
    inputValue: 't1t1!',
    messages: [
      { text: 'Votre mot de passe doit contenir :' },
      { text: '12 caractères minimum', type: 'error' },
      { text: '1 caractère spécial minimum', type: 'valid' },
      { text: '1 chiffre minimum', type: 'valid' }
    ]
  }
};
