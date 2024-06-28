import { renderBadge } from './badge';
import { badgeArgs, badgeArgTypes, badgeProps } from './badge-arg-types';

const render = (args) => renderBadge({ badge: badgeProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'badge',
  title: 'DSFR/Component/Badge',
  render: render,
  argTypes: badgeArgTypes,
  args: badgeArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const AccentStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'accent',
      accent: 'green-menthe'
    }
  ])
};

export const StatusStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      tyoe: 'status',
      status: 'success'
    },
    {
      tyoe: 'status',
      status: 'warning',
    },
    {
      tyoe: 'status',
      status: 'error',
    },
    {
      tyoe: 'status',
      status: 'info',
    },
    {
      tyoe: 'status',
      status: 'new',
    }
  ])
};

export const StatusNoIconStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      tyoe: 'status',
      status: 'success',
      hasNoIcon: true
    },
    {
      tyoe: 'status',
      status: 'warning',
      hasNoIcon: true
    },
    {
      tyoe: 'status',
      status: 'error',
      hasNoIcon: true
    },
    {
      tyoe: 'status',
      status: 'info',
      hasNoIcon: true
    },
    {
      tyoe: 'status',
      status: 'new',
      hasNoIcon: true
    }
  ])
};

export const SizeStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'md'
    }
  ])
};
