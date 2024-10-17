import { toggleGroupArgs, toggleGroupArgTypes, toggleGroupProps } from './toggle-group-arg-types';

import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: toggleGroupProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'toggle-group',
  title: 'DSFR/Component/Toggle/Toggle-Group',
  render: render,
  argTypes: toggleGroupArgTypes,
  args: toggleGroupArgs
};

export const ToggleGroupStory = {
  args: {}
};

export const LeftStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      left: true,
      border: true
    }
  ])
};
