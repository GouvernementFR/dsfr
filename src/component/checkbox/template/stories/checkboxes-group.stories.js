import { checkboxesGroupArgs, checkboxesGroupArgTypes, checkboxesGroupProps } from './checkboxes-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: checkboxesGroupProps(args) });

export default {
  id: 'checkboxes-group',
  title: 'DSFR/Component/Checkbox/Checkboxes-Group',
  render: render,
  argTypes: checkboxesGroupArgTypes,
  args: checkboxesGroupArgs
};

export const CheckboxesGroupStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true
  }
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
