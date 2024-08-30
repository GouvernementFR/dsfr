// import { formArgs, formArgTypes, formProps } from '../../../form/template/stories/form-arg-types';
import { checkboxesGroupArgs, checkboxesGroupArgTypes, checkboxesGroupProps } from './checkboxes-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: checkboxesGroupProps(args) });

// const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'checkboxes-group',
  title: 'DSFR/Component/Checkbox/Checkboxes-Group',
  render: render,
  argTypes: checkboxesGroupArgTypes,
  args: checkboxesGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  // tags: ['!dev'],
  args: {}
};
