import api from './_content/script/api/api';

import { CollapseButton } from './script/collapse/collapse-button.js';
import { Collapse } from './script/collapse/collapse.js';
import { CollapsesGroup } from './script/collapse/collapses-group.js';
import { CollapseSelector } from './script/collapse/collapse-selector.js';

api.core.collapse = {
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector
};

export default api;
