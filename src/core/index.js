import { namespace } from './config.js';
import api from './scripts/api.js';
import { ns } from './scripts/global/namespace.js';
import { addClass, removeClass } from './scripts/manipulation/classes.js';

import engine from './scripts/engine/engine.js';
import inspector from './scripts/inspect/inspector';
import { Instance } from './scripts/engine/register/instance.js';

import { Disclosure } from './scripts/disclosure/disclosure.js';
import { DisclosureButton } from './scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group.js';
import { DISCLOSURE_TYPES } from './scripts/disclosure/disclosure-types.js';

import { KeyListener } from './scripts/key-listener/key-listener.js';
import { CollapseButton } from './scripts/collapse/collapse-button.js';
import { Collapse } from './scripts/collapse/collapse.js';
import { CollapsesGroup } from './scripts/collapse/collapses-group.js';
import { Equisized } from './scripts/manipulation/size.js';

engine.configure(window[namespace]);
window[namespace] = api;

api.ns = ns;
api.addClass = addClass;
api.removeClass = removeClass;

api.inspector = inspector;
api.engine = engine;
api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;

api.core = {
  Instance: Instance,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DISCLOSURE_TYPES: DISCLOSURE_TYPES,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  KeyListener: KeyListener,
  Equisized: Equisized
};

export default api;
