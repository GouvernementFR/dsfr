import ref from '../ref.js';
import { TagDismissible } from './tag/tag-dismissible';
import { TagSelector } from './tag/tag-selector';
import { TagEvent } from './tag/tag-event';

ref.tag = {
  TagDismissible: TagDismissible,
  TagSelector: TagSelector,
  TagEvent: TagEvent
};

export default ref;
