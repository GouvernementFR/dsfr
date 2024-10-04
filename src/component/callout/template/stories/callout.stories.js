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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const IconStory = {
  tags: ['!dev'],
  args: {
    hasIcon: true,
    icon: 'info-line'
  }
};

export const ButtonStory = {
  tags: ['!dev'],
  args: {
    hasButton: true,
    buttonLabel: 'En savoir plus'
  }
};

export const IconAndButtonStory = {
  tags: ['!dev'],
  args: {
    hasIcon: true,
    icon: 'info-line',
    hasButton: true,
    buttonLabel: 'En savoir plus'
  }
};
