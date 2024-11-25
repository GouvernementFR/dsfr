import { renderTooltip } from './tooltip';
import { renderButton } from '../../../button/template/stories/button';
import { renderLink } from '../../../link/template/stories/link';
import { tooltipArgs, tooltipArgTypes, tooltipProps, tooltipButtonProps } from './tooltip-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderTooltip({ tooltip: tooltipProps(args) });
const renderButtonTooltip = (args) => renderButton({ button: { ...tooltipButtonProps(args), tooltip: tooltipProps(args) } });
const renderLinkt = (linkArgs) => renderLink({ link: { ...linkArgs } });
const renderLinkTooltip = (args) => {
  return `
    ${renderLinkt(linkArgs(args))}
    ${render(args)}
  `;
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

export const TooltipStory = {
  args: {}
};

export const TooltipHoverStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('tooltip')
  },
  render: renderLinkTooltip
};
