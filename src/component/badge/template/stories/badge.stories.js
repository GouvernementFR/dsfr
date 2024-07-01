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
      type: 'status',
      status1: 'success'
    },
    {
      type: 'status',
      status: 'warning'
    },
    {
      type: 'status',
      status: 'error'
    },
    {
      type: 'status',
      status: 'info'
    },
    {
      type: 'status',
      status: 'new'
    }
  ])
};

export const StatusNoIconStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'status',
      status: 'success',
      hasNoIcon: true
    },
    {
      type: 'status',
      status: 'warning',
      hasNoIcon: true
    },
    {
      type: 'status',
      status: 'error',
      hasNoIcon: true
    },
    {
      type: 'status',
      status: 'info',
      hasNoIcon: true
    },
    {
      type: 'status',
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
