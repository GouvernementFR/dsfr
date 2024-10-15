import { radiosGroupArgs, radiosGroupArgTypes, radiosGroupProps } from './radios-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: radiosGroupProps(args) });

export default {
  id: 'radios-group',
  title: 'DSFR/Component/Radio/Radios-Group',
  render: render,
  argTypes: radiosGroupArgTypes,
  args: radiosGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
