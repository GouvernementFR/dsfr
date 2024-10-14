import { renderTooltip } from './tooltip';
import { renderButton } from '../../../button/template/stories/button';
import { renderLink } from '../../../link/template/stories/link';
import { tooltipArgs, tooltipArgTypes, tooltipProps } from './tooltip-arg-types';

const render = (args) => renderTooltip({ tooltip: tooltipProps(args) });
const renderButtonTooltip = (args) => renderButton({ button: { ...buttonArgs, tooltip: args } });
const renderLinkt = (linkArgs) => renderLink({ link: { ...linkArgs } });
const renderLinkTooltip = (args) => {
  return `
    ${renderLinkt(linkArgs(args))}
    ${render(args)}
  `;
};

const buttonArgs = {
  label: 'infobulle',
  classes: ['fr-btn--tooltip']
};

const linkArgs = (args) => {
  return {
    label: 'infobulle au survol',
    href: '#',
    attributes: { 'aria-describedby': args.id }
  };
};

export default {
  id: 'tooltip',
  title: 'DSFR/Component/Tooltip',
  render: renderButtonTooltip,
  argTypes: tooltipArgTypes,
  args: tooltipArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const HoverStory = {
  tags: ['!dev'],
  render: renderLinkTooltip
};
