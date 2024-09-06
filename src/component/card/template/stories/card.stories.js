import { renderCard } from './card';
import { cardArgs, cardArgTypes, cardProps } from './card-arg-types';

const render = (args) => renderCard({ card: cardProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'card',
  title: 'DSFR/Component/Card',
  render: render,
  argTypes: cardArgTypes,
  args: cardArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const VerticalStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      description: 'Description (optionnelle)'
    }
  ])
};

export const SmStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'sm',
      description: 'Description (optionnelle)'
    }
  ])
};

export const HorizontalStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      hasTag: true
    }
  ])
};

export const HorizontalTierStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      horizontalProportion: 'tier',
      hasBadge: true
    }
  ])
};

export const HorizontalHalfStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      horizontalProportion: 'half',
      hasBadge: true
    }
  ])
};

export const DownloadStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      download: true,
      details: 'Détail obligatoire (Extension - Poids - Langue)'
    }
  ])
};

export const DownloadButtonStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      title: 'Télécharger le document XX',
      actionMarkup: 'button',
      download: true,
      description: 'Description (optionnelle)',
      details: 'Détail obligatoire (Extension - Poids - Langue)'
    }
  ])
};

export const ActionButtonsStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      hasButtons: true
    }
  ])
};

export const ActionLinksStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      hasLinks: true
    }
  ])
};
