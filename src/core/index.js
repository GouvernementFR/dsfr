import api from './scripts/api/api';

import { Instance } from './scripts/api/register/instance.js';
import { KeyCodes } from './scripts/api/register/key-codes.js';
import { Breakpoints } from './scripts/api/register/breakpoints';
import { Disclosure } from './scripts/disclosure/disclosure.js';
import { DisclosureButton } from './scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group.js';
import { DisclosureTypes } from './scripts/disclosure/disclosure-types.js';
import { DisclosureEvents } from './scripts/disclosure/disclosure-events.js';
import { DisclosureEmissions } from './scripts/disclosure/disclosure-emissions.js';
import { CollapseButton } from './scripts/collapse/collapse-button.js';
import { Collapse } from './scripts/collapse/collapse.js';
import { CollapsesGroup } from './scripts/collapse/collapses-group.js';
import { CollapseSelectors } from './scripts/collapse/collapse-selectors.js';
import { Equisized } from './scripts/equisized/equisized.js';
import { EquisizedsGroup } from './scripts/equisized/equisizeds-group.js';
import { EquisizedEmissions } from './scripts/equisized/equisized-emissions.js';
import { RootSelector } from './scripts/api/stage/root.js';

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
