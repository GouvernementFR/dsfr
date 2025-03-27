import { uniqueId } from '../../../../core/template/stories/unique-id';
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
  tags: ['!autodocs'],
  args: {}
};

export const ButtonTertiaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    collapseId: uniqueId('collapse'),
    buttonId: uniqueId('collapse-button')
  }
};

export const ButtonTertiaryNoOutlineStory = {
  tags: ['autodocs', '!dev'],
  args: {
    collapseId: uniqueId('collapse'),
    buttonId: uniqueId('collapse-button'),
    noBorder: true
  }
};
