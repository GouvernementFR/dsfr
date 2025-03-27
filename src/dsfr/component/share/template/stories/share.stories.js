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

export const ShareStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {}
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true
  }
};
