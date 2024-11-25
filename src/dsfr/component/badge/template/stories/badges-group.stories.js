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

export const BadgesGroupStory = {
  args: {}
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'md',
      type1: 'accent',
      accent1: 'green-bourgeon',
      type2: 'accent',
      accent2: 'green-menthe',
      type3: 'accent',
      accent3: 'blue-ecume'
    }
  ])
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      type1: 'accent',
      accent1: 'green-bourgeon',
      type2: 'accent',
      accent2: 'green-menthe',
      type3: 'accent',
      accent3: 'blue-ecume'
    }
  ])
};
