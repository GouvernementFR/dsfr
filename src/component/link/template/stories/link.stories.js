import { renderLink } from './link';
import { linkArgs, linkArgTypes, linkProps } from './link-arg-types';

const render = (args) => renderLink({ link: linkProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'link',
  title: 'DSFR/Component/Link',
  render: render,
  argTypes: linkArgTypes,
  args: linkArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const IconLeftStory = {
  tags: ['!dev'],
  args: {
    hasIcon: true,
    icon: 'checkbox-line',
    iconPlace: 'left'
  }
};

export const IconRightStory = {
  tags: ['!dev'],
  args: {
    hasIcon: true,
    icon: 'checkbox-line',
    iconPlace: 'right'
  }
};

export const SizeStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'md'
    },
    {
      size: 'lg'
    }
  ])
};

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};

export const ExternalStory = {
  tags: ['!dev'],
  args: {
    target: 'blank'
  }
};
