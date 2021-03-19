import api from './api.js';
import { ns } from './src/scripts/global/namespace.js';
import { addClass, removeClass } from './src/scripts/manipulation/classes.js';
import engine from './src/scripts/engine/engine.js';
import { Initializer } from './src/scripts/global/initializer.js';
import { Instance } from './src/scripts/engine/instantiate/instance.js';

import { Disclosure } from './src/scripts/disclosure/disclosure.js';
import { DisclosureButton } from './src/scripts/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './src/scripts/disclosure/disclosures-group.js';
import { DISCLOSURE_TYPES } from './src/scripts/disclosure/disclosure-types.js';

import { KeyListener } from './src/scripts/key-listener/key-listener.js';
import { Collapse } from './src/scripts/collapse/collapse.js';
import { Equisized } from './src/scripts/manipulation/size.js';

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
