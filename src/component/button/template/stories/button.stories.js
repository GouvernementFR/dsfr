import { fn } from '@storybook/test';
import { renderButton } from './button';
import { buttonArgs, buttonArgTypes } from './button-arg-types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  id: 'button',
  title: 'DSFR/Component/Button',
  tags: ['autodocs'],
  render: (args) => {
    const button = {
      label: args.label,
      kind: args.kind,
      size: args.size,
      id: args.id || undefined,
      title: args.title || undefined,
      disabled: args.disabled,
      markup: args.markup,
      type: args.type,
      href: args.href || undefined,
      blank: args.target === 'blank',
      self: args.target === 'self'
    };

    if (args.hasIcon) {
      button.icon = args.icon;
      button.iconPlace = args.iconPlace;
    }

    if (args.hasTooltip) {
      button.tooltip = {
        id: args.tooltipId,
        content: args.tooltipContent
      };
    }

    return renderButton({ button: button });
  },
  argTypes: buttonArgTypes,
  args: buttonArgs
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
