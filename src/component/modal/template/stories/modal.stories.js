import { renderModal } from './modal';
import { renderButton } from '../../../button/template/stories/button';
import { modalArgs, modalArgTypes, modalProps } from './modal-arg-types';

// const render = (args) => renderModal({ modal: modalProps(args), modalButton: { id: 'modale-button', label: 'Ouvrir la modale' } });

const render = (args) => renderButton({ button: { id: 'modale-button', label: 'Ouvrir la modale', attributes: { 'aria-controls': args.id, 'data-fr-opened': false } } }) + renderModal({ modal: modalProps(args) });

export default {
  id: 'modal',
  title: 'DSFR/Component/Modal',
  render: render,
  argTypes: modalArgTypes,
  args: modalArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};

export const MdStory = {
  tags: ['!dev'],
  args: {
    size: 'md'
  }
};

export const LgStory = {
  tags: ['!dev'],
  args: {
    size: 'lg'
  }
};

export const Footer = {
  tags: ['!dev'],
  args: {
    id: 'modal',
    size: 'md',
    icon: 'info-line',
    footer: true
  }
};
