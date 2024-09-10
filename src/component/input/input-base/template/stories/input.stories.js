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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  // tags: ['!dev'],
  args: {}
};

export const ErrorStory = {
  tags: ['!dev'],
  args: {
    status: 'error'
  }
};

export const SuccessStory = {
  tags: ['!dev'],
  args: {
    status: 'valid'
  }
};

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};

export const TelStory = {
  tags: ['!dev'],
  args: {
    type: 'tel'
  }
};

export const NumberStory = {
  tags: ['!dev'],
  args: {
    type: 'number'
  }
};

export const PasswordStory = {
  tags: ['!dev'],
  args: {
    type: 'password'
  }
};

export const SearchStory = {
  tags: ['!dev'],
  args: {
    type: 'search'
  }
};

export const DateStory = {
  tags: ['!dev'],
  args: {
    type: 'date'
  }
};

export const ButtonStory = {
  tags: ['!dev'],
  args: {
    addon: true
  }
};

export const ActionStory = {
  tags: ['!dev'],
  args: {
    action: true
  }
};

export const UrlStory = {
  tags: ['!dev'],
  args: {
    label: 'Adresse du site',
    placeholder: 'https://',
    hint: 'Saisissez une url valide, commençant par https://'
  }
};

export const TextareaStory = {
  tags: ['!dev'],
  args: {
    type: 'textarea'
  }
};
