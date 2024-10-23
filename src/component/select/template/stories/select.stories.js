import { selectArgs, selectArgTypes, selectProps } from './select-arg-types';
import { renderSelect } from './select';

const render = (args) => renderSelect({ select: selectProps(args) });

export default {
  id: 'select',
  title: 'DSFR/Component/Select',
  render: render,
  argTypes: selectArgTypes,
  args: selectArgs
};

export const SelectStory = {
  args: {}
};

export const HintStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hint: 'Texte de description additionnel'
  }
};
