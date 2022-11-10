import ref from '../../ref.js';

import { CollapseButton } from './collapse/collapse-button.js';
import { Collapse } from './collapse/collapse.js';
import { CollapsesGroup } from './collapse/collapses-group.js';
import { CollapseSelector } from './collapse/collapse-selector.js';

ref.collapse = {
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector
};

export default ref;
