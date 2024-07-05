import { renderBreadcrumb } from './breadcrumb';
import { breadcrumbArgs, breadcrumbArgTypes, breadcrumbProps } from './breadcrumb-arg-types';

const render = (args) => renderBreadcrumb({ breadcrumb: breadcrumbProps(args) });

export default {
  id: 'breadcrumb',
  title: 'DSFR/Component/Breadcrumb',
  render: render,
  argTypes: breadcrumbArgTypes,
  args: breadcrumbArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  // tags: ['!dev'],
  args: {}
};
