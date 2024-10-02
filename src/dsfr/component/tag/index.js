import api from './api.js';
import { TagDismissible } from './script/tag/tag-dismissible';
import { TagSelector } from './script/tag/tag-selector';
import { TagEvent } from './script/tag/tag-event';

api.tag = {
  TagDismissible: TagDismissible,
  TagSelector: TagSelector,
  TagEvent: TagEvent
};

export default api;
