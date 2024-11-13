import { renderTile } from './tile';
import { tileArgs, tileArgTypes, tileProps } from './tile-arg-types';

const render = (args) => renderTile({ tile: tileProps(args) });

export default {
  id: 'tile',
  title: 'DSFR/Component/Tile',
  render: render,
  argTypes: tileArgTypes,
  args: tileArgs
};

export const TileStory = {
  args: {}
};

export const VerticalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    hasDescription: true,
    description: 'Description (optionnelle)'
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    size: 'sm',
    hasDescription: true,
    description: 'Description (optionnelle)',
    hasDetails: true
  }
};

export const HorizontalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    horizontal: true,
    hasTag: true,
    hasDetails: true
  }
};

export const SizeSmHorizontalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    size: 'sm',
    horizontal: true,
    hasBadge: true,
    hasDetails: true
  }
};

export const DownloadStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    title: 'Télécharger le document XX',
    download: true,
    hasDetails: true,
    details: 'Détail obligatoire (Extension - Poids - Langue)'
  }
};

export const DownloadButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    title: 'Télécharger le document XX',
    actionMarkup: 'button',
    download: true,
    hasDescription: true,
    description: 'Description (optionnelle)',
    hasDetails: true,
    details: 'Détail obligatoire (Extension - Poids - Langue)'
  }
};

export const HorizontalVerticalFromMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    enlarge: true,
    horizontal: true,
    verticalBreakpoint: 'md',
    hasDescription: true
  }
};
