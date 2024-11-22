import tag from '../ejs/tag.ejs?raw';
import tagsGroup from '../ejs/tags-group.ejs?raw';

export const tagPartials = [
  {
    names: ['tag'],
    partial: tag
  },
  {
    names: ['tags-group'],
    partial: tagsGroup
  }
];
