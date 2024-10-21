import { renderModal } from '../../../modal/template/stories/modal';
import { renderButton } from '../../../button/template/stories/button';
import { displayArgs, displayArgTypes, displayProps } from './display-arg-types';

const render = (args) => renderButton({ button: { id: 'display-button', label: 'Paramètres d\'affichage', classes: ['fr-btn--display'], attributes: { 'aria-controls': args.id, 'data-fr-opened': false } } }) + renderModal({ modal: displayProps(args) });

export default {
  id: 'display',
  title: 'DSFR/Component/Display',
  render: render,
  argTypes: displayArgTypes,
  args: displayArgs
};

export const DisplayStory = {
  tags: ['autodocs'],
  args: {}
};
