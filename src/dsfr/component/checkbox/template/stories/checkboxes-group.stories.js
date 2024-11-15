import { checkboxesGroupArgs, checkboxesGroupArgTypes, checkboxesGroupProps, getCheckboxesData } from './checkboxes-group-arg-types';
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
  args: {
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    checkboxes: getCheckboxesData()
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    checkboxes: getCheckboxesData(),
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    checkboxes: getCheckboxesData()
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    checkboxes: getCheckboxesData()
  }
};
