import { renderForm } from './form';
import { formArgs, formArgTypes, formProps } from './form-arg-types';

const render = (args) => renderForm({ form: formProps(args) });

export default {
  id: 'form',
  title: 'DSFR/Component/Form',
  render: render,
  argTypes: formArgTypes,
  args: formArgs
};

export const FormStory = {
  tags: ['autodocs'],
  args: {}
};
