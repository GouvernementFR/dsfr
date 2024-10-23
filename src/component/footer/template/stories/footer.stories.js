import { footerArgs, footerArgTypes, footerProps } from './footer-arg-types';
import { renderFooter } from './footer';

const render = (args) => renderFooter({ footer: footerProps(args) });

export default {
  id: 'footer',
  title: 'DSFR/Component/Footer',
  render: render,
  argTypes: footerArgTypes,
  args: footerArgs
};

export const FooterStory = {
  tags: ['autodocs'],
  args: {}
};
