import { renderConnect } from './connect';
import { connectArgs, connectArgTypes, connectProps } from './connect-arg-types';

const render = (args) => renderConnect({ connect: connectProps(args) });

export default {
  id: 'connect',
  title: 'DSFR/Component/Connect',
  render: render,
  argTypes: connectArgTypes,
  args: connectArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const PlusStory = {
  tags: ['!dev'],
  args: {
    type: 'plus'
  }
};
