import api from './api/_content/script/api/api';

import { Instance } from './api/_content/script/api/modules/register/instance.js';
import { KeyCodes } from './api/_content/script/api/modules/register/key-codes.js';
import { Breakpoints } from './api/_content/script/api/modules/register/breakpoints';
import { Disclosure } from './action/_content/script/disclosure/disclosure.js';
import { DisclosureButton } from './action/_content/script/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './action/_content/script/disclosure/disclosures-group.js';
import { DisclosureType } from './action/_content/script/disclosure/disclosure-type.js';
import { DisclosureEvent } from './action/_content/script/disclosure/disclosure-event.js';
import { DisclosureEmission } from './action/_content/script/disclosure/disclosure-emission.js';
import { CollapseButton } from './action/_content/script/collapse/collapse-button.js';
import { Collapse } from './action/_content/script/collapse/collapse.js';
import { CollapsesGroup } from './action/_content/script/collapse/collapses-group.js';
import { CollapseSelector } from './action/_content/script/collapse/collapse-selector.js';
import { Equisized } from './spacing/_content/script/equisized/equisized.js';
import { EquisizedsGroup } from './spacing/_content/script/equisized/equisizeds-group.js';
import { EquisizedEmission } from './spacing/_content/script/equisized/equisized-emission.js';
import { Toggle } from './action/_content/script/toggle/toggle';
import { RootSelector } from './api/_content/script/api/modules/stage/root.js';
import { InjectSvg } from './artwork/_content/deprecated/script/inject/inject-svg';
import { InjectSvgSelector } from './artwork/_content/deprecated/script/inject/inject-svg-selector';
import { Artwork } from './artwork/_content/script/artwork/artwork';
import { ArtworkSelector } from './artwork/_content/script/artwork/artwork-selector';
import { RatioSelector } from './spacing/_content/script/ratio/ratio-selector.js';
import { Ratio } from './spacing/_content/script/ratio/ratio.js';

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
  InjectSvgSelector: InjectSvgSelector,
  Artwork: Artwork,
  ArtworkSelector: ArtworkSelector,
  Ratio: Ratio,
  RatioSelector: RatioSelector
};

export default api;
