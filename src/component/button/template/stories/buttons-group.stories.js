import { fn } from '@storybook/test';
import { renderButtonsGroup } from './button';
import { buttonsGroupArgs, buttonsGroupArgTypes } from './buttons-group-arg-types'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'DSFR/Component/Button/Buttons-Group',
  tags: ['autodocs'],
  render: (args) => {
    const buttons = [];

    for (let i = 1; i <= 5; i ++) {
      if (i < 3 || args[`hasButton${i}`]) {
        const button = {
          label: args[`label${i}`],
          kind: args[`kind${i}`],
          id: args[`id${i}`] || undefined,
          title: args[`title${i}`] || undefined,
          disabled: args[`disabled${i}`]
        };

        if (args.hasIcon) {
          button.icon = args[`icon${i}`];
        }

        buttons.push(button);
      }
    }

    const buttonsGroup = {
      size: args.size,
      id: args.id || undefined,
      title: args.title || undefined,
      buttons: buttons,
      groupMarkup: args.groupMarkup,
      inline: args.inline,
      align: args.align,
      equisized: args.equisized,
      reverse: args.reverse
    };

    if (args.hasIcon) {
      buttonsGroup.iconPlace = args.iconPlace;
    }

    console.log('buttonsGroup', buttonsGroup);

    return renderButtonsGroup({ buttonsGroup: buttonsGroup });
  },
  argTypes: buttonsGroupArgTypes,
  args: buttonsGroupArgs
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {

  }
};
