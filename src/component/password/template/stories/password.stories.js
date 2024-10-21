import { passwordArgs, passwordArgTypes, passwordProps } from './password-arg-types';
import { renderPassword } from './password';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderPassword({ password: passwordProps(args) });

export default {
  id: 'password',
  title: 'DSFR/Component/Password',
  render: render,
  argTypes: passwordArgTypes,
  args: passwordArgs
};

export const PasswordStory = {
  args: {}
};

export const LoginStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasLink: true,
    id: uniqueId('password'),
    checkboxId: uniqueId('password-checkbox'),
    inputId: uniqueId('password-input'),
    linkId: uniqueId('password-link')
  }
};

export const RegisterStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasLink: false,
    hasMessages: true,
    id: uniqueId('password'),
    checkboxId: uniqueId('password-checkbox'),
    inputId: uniqueId('password-input')
  }
};

export const RegisterValidateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasLink: false,
    hasMessages: true,
    inputValue: 't1t1!',
    id: uniqueId('password'),
    checkboxId: uniqueId('password-checkbox'),
    inputId: uniqueId('password-input'),
    messages: [
      { text: 'Votre mot de passe doit contenir :' },
      { text: '12 caractères minimum', type: 'error' },
      { text: '1 caractère spécial minimum', type: 'valid' },
      { text: '1 chiffre minimum', type: 'valid' }
    ]
  }
};
