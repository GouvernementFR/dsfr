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

export const ConnectStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {}
};

export const FranceConnectPlusStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'france-connect-plus',
    variant: 'plus'
  }
};

export const ProConnectStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'pro-connect',
    variant: 'pro'
  }
};
