import { renderTile } from './tile';
import { tileArgs, tileArgTypes, tileProps } from './tile-arg-types';

const render = (args) => renderTile({ tile: tileProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'tile',
  title: 'DSFR/Component/Tile',
  render: render,
  argTypes: tileArgTypes,
  args: tileArgs
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

export const SmHorizontalStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      size: 'sm',
      horizontal: true,
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

export const HorizontalVerticalMdStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      enlarge: true,
      horizontal: true,
      verticalBreakpoint: 'md'
    }
  ])
};
