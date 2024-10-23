import { renderModal } from './modal';
import { renderButton } from '../../../button/template/stories/button';
import { modalArgs, modalArgTypes, modalProps } from './modal-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

// const render = (args) => renderModal({ modal: modalProps(args), modalButton: { id: 'modale-button', label: 'Ouvrir la modale' } });

const render = (args) => renderButton({ button: { label: 'Ouvrir la modale', attributes: { 'aria-controls': args.id, 'data-fr-opened': false } } }) + renderModal({ modal: modalProps(args) });

export default {
  id: 'modal',
  title: 'DSFR/Component/Modal',
  render: render,
  argTypes: modalArgTypes,
  args: modalArgs
};

export const ModalStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('modal'),
    size: 'sm'
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('modal'),
    size: 'md'
  }
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('modal'),
    size: 'lg'
  }
};

export const Footer = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('modal'),
    size: 'md',
    icon: 'info-line',
    footer: true
  }
};
