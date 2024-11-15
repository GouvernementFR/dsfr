import { checkboxesGroupArgs, checkboxesGroupArgTypes, checkboxesGroupProps } from './checkboxes-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: checkboxesGroupProps(args) });

export default {
  id: 'checkboxes-group',
  title: 'DSFR/Component/Checkbox/Checkboxes-Group',
  render: render,
  argTypes: checkboxesGroupArgTypes,
  args: checkboxesGroupArgs
};

const checkboxesData = (count = 3) => {
  const checkboxes = [];
  for (let i = 0; i < count; i++) {
    checkboxes.push(
      {
        label: `Checkbox ${i}`,
        id: uniqueId('checkbox'),
        name: `checkbox${i}`,
        hint: '',
        disabled: false
      }
    );
  }
  return checkboxes;
};

export const CheckboxesGroupStory = {
  args: {
    checkboxes: checkboxesData(3)
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    checkboxes: checkboxesData(3)

  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    checkboxes: checkboxesData(3),
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    checkboxes: checkboxesData(3)
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    checkboxes: checkboxesData(3)
  }
};
