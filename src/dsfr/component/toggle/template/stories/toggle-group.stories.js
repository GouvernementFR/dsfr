import { toggleGroupArgs, toggleGroupArgTypes, toggleGroupProps, getTogglesData } from './toggle-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: toggleGroupProps(args) });

export default {
  id: 'toggle-group',
  title: 'DSFR/Component/Toggle/Toggle-Group',
  render: render,
  argTypes: toggleGroupArgTypes,
  args: toggleGroupArgs
};

export const ToggleGroupStory = {
  args: {
  }
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(),
    left: true,
    border: true
  }
};
