import { renderCallout } from './callout';
import { calloutArgs, calloutArgTypes, calloutProps } from './callout-arg-types';

const render = (args) => renderCallout({ callout: calloutProps(args) });

export default {
  id: 'callout',
  title: 'DSFR/Component/Callout',
  render: render,
  argTypes: calloutArgTypes,
  args: calloutArgs
};

export const CalloutStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {}
};

export const IconStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasIcon: true,
    icon: 'info-line'
  }
};

export const ButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasButton: true,
    buttonLabel: 'En savoir plus'
  }
};

export const IconAndButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasIcon: true,
    icon: 'info-line',
    hasButton: true,
    buttonLabel: 'En savoir plus'
  }
};

export const AccentStory = {
  tags: ['autodocs', '!dev'],
  args: {
    accent: 'pink-macaron'
  }
};
