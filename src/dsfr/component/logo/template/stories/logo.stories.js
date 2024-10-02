import { renderLogo } from './logo';
import { logoArgs, logoArgTypes, logoProps } from './logo-arg-types';

const render = (args) => renderLogo({ logo: logoProps(args) });

export default {
  id: 'logo',
  title: 'DSFR/Component/Logo',
  render: render,
  argTypes: logoArgTypes,
  args: logoArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  // tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};

export const MdStory = {
  tags: ['!dev'],
  args: {
    size: 'md'
  }
};

export const LgStory = {
  tags: ['!dev'],
  args: {
    size: 'lg'
  }
};
