import { selectArgs, selectArgTypes, selectProps } from './select-arg-types';
import { renderSelect } from './select';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderSelect({ select: selectProps(args) });

export default {
  id: 'select',
  title: 'DSFR/Component/Select',
  render: render,
  argTypes: selectArgTypes,
  args: selectArgs
};

export const SelectStory = {
  tags: ['!autodocs'],
  args: {
    id: uniqueId('select')
  }
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('select')
  }
};

export const HintStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('select'),
    hint: 'Texte de description additionnel'
  }
};
