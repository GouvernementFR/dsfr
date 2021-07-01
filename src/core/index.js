import api from './scripts/api.js';
import { namespace } from './config.js';
import { ns } from './scripts/global/namespace.js';
import { addClass, removeClass, hasClass } from './scripts/manipulation/classes.js';

import engine from './scripts/engine/engine.js';
import inspector from './scripts/inspect/inspector';
import { Instance } from './scripts/engine/register/instance.js';
import { KeyCodes } from './scripts/engine/register/key-codes.js';
import { Breakpoints } from './scripts/engine/register/breakpoints';

import { Disclosure } from './scripts/disclosure/disclosure.js';
import { DisclosureButton } from './scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group.js';
import { DisclosureTypes } from './scripts/disclosure/disclosure-types.js';
import { DisclosureEvents } from './scripts/disclosure/disclosure-events.js';
import { DisclosureEmissions } from './scripts/disclosure/disclosure-emissions.js';
import { CollapseButton } from './scripts/collapse/collapse-button.js';
import { Collapse } from './scripts/collapse/collapse.js';
import { CollapsesGroup } from './scripts/collapse/collapses-group.js';
import { CollapseSelectors } from './scripts/collapse/collapse-selectors';
import { Equisized } from './scripts/manipulation/size.js';
import { RootSelector } from './scripts/engine/stage/root';

engine.configure(window[namespace]);
window[namespace] = api;

api.ns = ns;
api.addClass = addClass;
api.hasClass = hasClass;
api.removeClass = removeClass;

api.inspector = inspector;
api.engine = engine;
api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;

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
  Equisized: Equisized
};

export default api;
