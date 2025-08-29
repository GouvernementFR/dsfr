import { renderModal } from '../../../modal/template/stories/modal';
import { renderButton } from '../../../button/template/stories/button';
import { renderHeader } from '../../../header/template/stories/header';
import { headerProps } from '../../../header/template/stories/header-arg-types';
import { renderFooter } from '../../../footer/template/stories/footer';
import { footerArgs, footerProps } from '../../../footer/template/stories/footer-arg-types';
import { displayArgs, displayArgTypes, displayProps } from './display-arg-types';

const render = (args) => renderButton({ button: { id: 'display-button', label: 'Paramètres d\'affichage', classes: ['fr-btn--display'], attributes: { 'aria-controls': args.id, 'data-fr-opened': false } } }) + renderModal({ modal: displayProps(args) });
const renderHeaderDisplay = (args) => renderHeader({ header: headerProps(args) }) + renderModal({ modal: displayProps({ id: 'header-display' }) });
const renderFooterDisplay = (args) => renderFooter({ footer: footerProps(args) }) + renderModal({ modal: displayProps({ id: 'footer-display' }) });

export default {
  id: 'display',
  title: 'DSFR/Component/Display',
  render: render,
  argTypes: displayArgTypes,
  args: displayArgs
};

export const DisplayStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'display-default'
  }
};

export const HeaderDisplayStory = {
  tags: ['autodocs', '!dev'],
  render: () => renderHeaderDisplay({
    id: 'header',
    hasToolLinks: true,
    toolLinks: {
      buttons: [
        {
          label: 'Paramètres d\'affichage',
          classes: ['fr-icon-theme-fill', 'fr-btn--icon-left'],
          attributes: {
            'aria-controls': 'header-display',
            'data-fr-opened': false
          }
        }
      ]
    },
    hasNavigation: false
  })
};

export const FooterDisplayStory = {
  tags: ['autodocs', '!dev'],
  render: () => renderFooterDisplay({
    id: 'footer',
    bottomLinks: [
      ...footerArgs.bottomLinks,
      {
        markup: 'button',
        label: 'Paramètres d\'affichage',
        classes: ['fr-icon-theme-fill', 'fr-btn--icon-left'],
        attributes: {
          'aria-controls': 'footer-display',
          'data-fr-opened': false
        }
      }
    ]
  })
};
