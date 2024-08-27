import { renderShare } from './share';
import { shareArgs, shareArgTypes, shareProps } from './share-arg-types';

const render = (args) => renderShare({ share: shareProps(args) });

export default {
  id: 'share',
  title: 'DSFR/Component/Share',
  render: render,
  argTypes: shareArgTypes,
  args: shareArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};
