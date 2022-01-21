import api from './script/api/api';

import { Instance } from './script/api/register/instance.js';
import { KeyCodes } from './script/api/register/key-codes.js';
import { Breakpoints } from './script/api/register/breakpoints';
import { Disclosure } from './script/disclosure/disclosure.js';
import { DisclosureButton } from './script/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './script/disclosure/disclosures-group.js';
import { DisclosureType } from './script/disclosure/disclosure-type.js';
import { DisclosureEvent } from './script/disclosure/disclosure-event.js';
import { DisclosureEmission } from './script/disclosure/disclosure-emission.js';
import { CollapseButton } from './script/collapse/collapse-button.js';
import { Collapse } from './script/collapse/collapse.js';
import { CollapsesGroup } from './script/collapse/collapses-group.js';
import { CollapseSelector } from './script/collapse/collapse-selector.js';
import { Equisized } from './script/equisized/equisized.js';
import { EquisizedsGroup } from './script/equisized/equisizeds-group.js';
import { EquisizedEmission } from './script/equisized/equisized-emission.js';
import { Toggle } from './script/action/toggle/toggle';
import { RootSelector } from './script/api/stage/root.js';
import { InjectSvg } from './script/inject/inject-svg';
import { InjectSvgSelector } from './script/inject/inject-svg-selector';

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
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
  RootSelector: RootSelector,
  Equisized: Equisized,
  EquisizedEmission: EquisizedEmission,
  Toggle: Toggle,
  EquisizedsGroup: EquisizedsGroup,
  InjectSvg: InjectSvg,
  InjectSvgSelector: InjectSvgSelector
};

export default api;
