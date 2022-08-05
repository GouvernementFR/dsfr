import ref from '../../ref.js';

import { Disclosure } from './disclosure/disclosure.js';
import { DisclosureButton } from './disclosure/disclosure-button.js';
import { DisclosuresGroup } from './disclosure/disclosures-group.js';
import { DisclosureType } from './disclosure/disclosure-type.js';
import { DisclosureEvent } from './disclosure/disclosure-event.js';
import { DisclosureEmission } from './disclosure/disclosure-emission.js';
import { CollapseButton } from './collapse/collapse-button.js';
import { Collapse } from './collapse/collapse.js';
import { CollapsesGroup } from './collapse/collapses-group.js';
import { CollapseSelector } from './collapse/collapse-selector.js';
import { Toggle } from './toggle/toggle';

ref.action = {
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureType: DisclosureType,
  DisclosureEvent: DisclosureEvent,
  DisclosureEmission: DisclosureEmission,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector,
  Toggle: Toggle
};

export default ref;
