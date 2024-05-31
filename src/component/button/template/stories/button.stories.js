import { fn } from '@storybook/test';
import { renderButton } from './button';
import buttonArgTypes from './button-arg-types'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'DSFR/Button',
  tags: ['autodocs'],
  render: (args) => {
    const button = {
      label: args.label,
      kind: args.kind,
      size: args.size,
      id: args.id,
      title: args.title,
      disabled: args.disabled,
      icon: args.icon,
      iconPlace: args.iconPlace,
      markup: args.markup,
      type: args.type,
      href: args.href,
      target: args.target,
      blank: args.target === 'blank',
      self: args.target === 'self'
    };

    if (args.hasTooltip) {
      button.tooltip = {
        id: args.tooltipId,
        content: args.tooltipContent
      };
    }

    return renderButton({ button: button });
  },
  argTypes: buttonArgTypes,
  args: {
    label: 'libellé du bouton',
    markup: 'button',
    kind: 1,
    size: 'md',
    iconPlace: 'only',
    disabled: false,
    hasTooltip: false
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    kind: 1
  }
};

export const Secondary = {
  args: {
    kind: 2
  }
};

export const Large = {
  args: {
    size: 'lg'
  }
};

export const Small = {
  args: {
    size: 'sm'
  }
};
