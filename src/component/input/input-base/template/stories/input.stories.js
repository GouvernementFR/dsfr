import { inputArgs, inputArgTypes, inputProps } from './input-arg-types';
import { renderInput } from './input';

const render = (args) => renderInput({ input: inputProps(args) });

export default {
  id: 'input',
  title: 'DSFR/Component/Input',
  render: render,
  argTypes: inputArgTypes,
  args: inputArgs
};

export const InputStory = {
  args: {}
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error'
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid'
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true
  }
};

export const TelStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'tel'
  }
};

export const NumberStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'number'
  }
};

export const PasswordStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'password'
  }
};

export const SearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'search'
  }
};

export const DateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'date'
  }
};

export const ButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    addon: true
  }
};

export const ActionStory = {
  tags: ['autodocs', '!dev'],
  args: {
    action: true
  }
};

export const UrlStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Adresse du site',
    placeholder: 'https://',
    hint: 'Saisissez une url valide, commençant par https://'
  }
};

export const TextareaStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'textarea'
  }
};
