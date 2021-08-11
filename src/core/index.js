import api from './script/api/api';

import { Instance } from './script/api/register/instance.js';
import { KeyCodes } from './script/api/register/key-codes.js';
import { Breakpoints } from './script/api/register/breakpoints';
import { Disclosure } from './script/disclosure/disclosure.js';
import { DisclosureButton } from './script/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './script/disclosure/disclosures-group.js';
import { DisclosureTypes } from './script/disclosure/disclosure-types.js';
import { DisclosureEvents } from './script/disclosure/disclosure-events.js';
import { DisclosureEmissions } from './script/disclosure/disclosure-emissions.js';
import { CollapseButton } from './script/collapse/collapse-button.js';
import { Collapse } from './script/collapse/collapse.js';
import { CollapsesGroup } from './script/collapse/collapses-group.js';
import { CollapseSelectors } from './script/collapse/collapse-selectors.js';
import { Equisized } from './script/equisized/equisized.js';
import { EquisizedsGroup } from './script/equisized/equisizeds-group.js';
import { EquisizedEmissions } from './script/equisized/equisized-emissions.js';
import { RootSelector } from './script/api/stage/root.js';

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureTypes: DisclosureTypes,
  DisclosureEvents: DisclosureEvents,
  DisclosureEmissions: DisclosureEmissions,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelectors: CollapseSelectors,
  RootSelector: RootSelector,
  Equisized: Equisized,
  EquisizedEmissions: EquisizedEmissions,
  EquisizedsGroup: EquisizedsGroup
};

export default api;
