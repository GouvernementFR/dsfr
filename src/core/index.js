import api from './api.js';
import { ns } from './scripts/global/namespace.js';
import { addClass, removeClass } from './scripts/manipulation/classes.js';
import engine from './scripts/engine/engine.js';
import { Initializer } from './scripts/global/initializer.js';
import { Instance } from './scripts/engine/instantiate/instance.js';

import { Disclosure } from './scripts/disclosure/disclosure.js';
import { DisclosureButton } from './scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group.js';
import { DISCLOSURE_TYPES } from './scripts/disclosure/disclosure-types.js';

import { KeyListener } from './scripts/key-listener/key-listener.js';
import { Collapse } from './scripts/collapse/collapse.js';
import { Equisized } from './scripts/manipulation/size.js';

api.core.ns = ns;
api.core.addClass = addClass;
api.core.removeClass = removeClass;
api.core.engine = engine;
api.core.Instance = Instance;
api.core.Initializer = Initializer;
api.core.Disclosure = Disclosure;
api.core.DisclosureButton = DisclosureButton;
api.core.DisclosuresGroup = DisclosuresGroup;
api.core.DISCLOSURE_TYPES = DISCLOSURE_TYPES;

api.KeyListener = KeyListener;
api.Collapse = Collapse;
api.Equisized = Equisized;
