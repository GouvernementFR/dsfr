import { renderTranslate } from './translate';
import { translateArgs, translateArgTypes, translateProps } from './translate-arg-types';

const render = (args) => renderTranslate({ translate: translateProps(args) });

export default {
  id: 'translate',
  title: 'DSFR/Component/Translate',
  render: render,
  argTypes: translateArgTypes,
  args: translateArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
