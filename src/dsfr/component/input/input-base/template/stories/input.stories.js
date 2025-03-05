import { inputArgs, inputArgTypes, inputProps } from './input-arg-types';
import { renderInput } from './input';
import { uniqueId } from '../../../../../core/template/stories/unique-id';

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

export const TelStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'tel',
    id: uniqueId('input')
  }
};

export const NumberStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'number',
    id: uniqueId('input')
  }
};

export const PasswordStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'password',
    id: uniqueId('input')
  }
};

export const SearchStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'search',
    id: uniqueId('input')
  }
};

export const DateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    type: 'date',
    id: uniqueId('input')
  }
};

export const ButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    addon: true,
    id: uniqueId('input')
  }
};

export const ActionStory = {
  tags: ['autodocs', '!dev'],
  args: {
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
    type: 'textarea',
    id: uniqueId('input')
  }
};
