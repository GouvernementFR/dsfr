import { renderBadgesGroup } from './badge';
import { badgesGroupArgs, badgesGroupArgTypes, badgesGroupProps } from './badges-group-arg-types';

const render = (args) => renderBadgesGroup({ badgesGroup: badgesGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'badges-group',
  title: 'DSFR/Component/Badge/Badges-Group',
  render: render,
  argTypes: badgesGroupArgTypes,
  args: badgesGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const MdStory = {
  tags: ['!dev'],
  args: {
    badges: [
      {
        type: 'accent',
        accent: 'green-bourgeon'
      },
      {
        type: 'accent',
        accent: 'yellow-tournesol'
      }
      ,
      {
        type: 'accent',
        accent: 'blue-ecume'
      }
    ]
  }
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm',
    badges: [
      {
        type: 'accent',
        accent: 'green-bourgeon'
      },
      {
        type: 'accent',
        accent: 'yellow-tournesol'
      },
      {
        type: 'accent',
        accent: 'blue-ecume'
      }
    ]
  }
};
