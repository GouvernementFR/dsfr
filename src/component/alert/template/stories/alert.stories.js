import { renderAlert } from './alert';
import { alertArgs, alertArgTypes, alertProps } from './alert-arg-types';

const render = (args) => renderAlert({ alert: alertProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'alert',
  title: 'DSFR/Component/Alert',
  render: render,
  argTypes: alertArgTypes,
  args: alertArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm',
      type: 'success',
      title: undefined,
      text: 'Succès : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'error',
      title: undefined,
      text: 'Erreur : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'info',
      title: undefined,
      text: 'Information : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'warning',
      title: undefined,
      text: 'Attention : Description détaillée du message...'
    }
  ])
};

export const MdStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'error',
      title: 'Erreur : description détaillée du message....',
      text: undefined
    }
  ])
};

export const MdDescStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'success',
      title: 'Succès : titre du message',
      text: 'Description détaillée du message Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ])
};

export const DismissibleStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true
    }
  ])
};

export const DismissibleNoJsStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true,
      buttonCloseJavaScript: undefined
    }
  ])
};

export const IconCustomStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      type: 'default',
      icon: 'lock-fill'
    }
  ])
};
