import { toggleGroupArgs, toggleGroupArgTypes, toggleGroupProps, getTogglesData } from './toggles-group-arg-types';
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
  tags: ['!autodocs'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle'))
  }
};

export const DefaultGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle'))
  }
};

export const StateGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    state: true
  }
};

export const borderGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    border: true
  }
};

export const AlignLeftStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('toggle-group-id'),
    elements: getTogglesData(uniqueId('toggle')),
    left: true
  }
};
