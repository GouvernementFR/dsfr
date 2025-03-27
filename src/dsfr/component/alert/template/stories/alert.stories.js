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

export const AlertStory = {
  tags: ['!autodocs'],
  args: {}
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'success',
      hasTitle: true,
      title: 'Titre du message de succès',
      text: 'Texte du message'
    }
  ])
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'error',
      hasTitle: true,
      title: 'Titre du message d\'erreur',
      text: 'Texte du message'
    }
  ])
};

export const InformationStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'info',
      hasTitle: true,
      title: 'Titre du message d\'information',
      text: 'Texte du message'
    }
  ])
};

export const WarningStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'warning',
      hasTitle: true,
      title: 'Titre du message d\'avertissement',
      text: 'Texte du message'
    }
  ])
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      type: 'success',
      hasTitle: false,
      text: 'Succès : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'error',
      hasTitle: false,
      text: 'Erreur : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'info',
      hasTitle: false,
      text: 'Information : Description détaillée du message...'
    },
    {
      size: 'sm',
      type: 'warning',
      hasTitle: false,
      text: 'Attention : Description détaillée du message...'
    }
  ])
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hasTitle: true,
      type: 'success',
      title: 'Succès : Lorem ipsum dolor sit amet'
    },
    {
      hasTitle: true,
      type: 'error',
      title: 'Erreur : Lorem ipsum dolor sit amet'
    },
    {
      hasTitle: true,
      type: 'info',
      title: 'Information : Lorem ipsum dolor sit amet'
    },
    {
      hasTitle: true,
      type: 'warning',
      title: 'Attention : Lorem ipsum dolor sit amet'
    }
  ])
};

export const DismissibleStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      hasTitle: true,
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true
    }
  ])
};

export const DismissibleNoJsStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'info',
      title: 'Information : titre du message',
      hasTitle: true,
      text: 'Cliquer sur la croix pour fermer l\'alerte',
      dismissible: true,
      buttonCloseOnClick: null
    }
  ])
};

export const IconCustomStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      type: 'default',
      hasTitle: true,
      icon: 'lock-fill'
    }
  ])
};
