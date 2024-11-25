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

export const TranslateStory = {
  tags: ['autodocs'],
  args: {}
};
