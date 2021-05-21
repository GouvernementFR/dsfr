import api from './api.js';
import { ns } from './scripts/global/namespace.js';
import { addClass, removeClass } from './scripts/manipulation/classes.js';
import { Instance } from './scripts/engine/element/instance.js';

import { Disclosure } from './scripts/disclosure/disclosure.js';
import { DisclosureButton } from './scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group.js';
import { DISCLOSURE_TYPES } from './scripts/disclosure/disclosure-types.js';

import { KeyListener } from './scripts/key-listener/key-listener.js';
import { Collapse } from './scripts/collapse/collapse.js';
import { Equisized } from './scripts/manipulation/size.js';

api.ns = ns;
api.addClass = addClass;
api.removeClass = removeClass;

api.core = {
  Instance: Instance,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DISCLOSURE_TYPES: DISCLOSURE_TYPES,
  Collapse: Collapse,
  KeyListener: KeyListener,
  Equisized: Equisized
};

export default api;
