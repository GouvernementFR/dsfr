import api from './api/_content/script/api/api';

import { Instance } from './api/_content/script/api/modules/register/instance.js';
import { KeyCodes } from './api/_content/script/api/modules/register/key-codes.js';
import { Breakpoints } from './api/_content/script/api/modules/register/breakpoints';
import { Disclosure } from './.TODO/script/disclosure/disclosure.js';
import { DisclosureButton } from './.TODO/script/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './.TODO/script/disclosure/disclosures-group.js';
import { DisclosureType } from './.TODO/script/disclosure/disclosure-type.js';
import { DisclosureEvent } from './.TODO/script/disclosure/disclosure-event.js';
import { DisclosureEmission } from './.TODO/script/disclosure/disclosure-emission.js';
import { CollapseButton } from './collapse/_content/script/collapse/collapse-button.js';
import { Collapse } from './collapse/_content/script/collapse/collapse.js';
import { CollapsesGroup } from './collapse/_content/script/collapse/collapses-group.js';
import { CollapseSelector } from './collapse/_content/script/collapse/collapse-selector.js';
import { Equisized } from './.TODO/script/equisized/equisized.js';
import { EquisizedsGroup } from './.TODO/script/equisized/equisizeds-group.js';
import { EquisizedEmission } from './.TODO/script/equisized/equisized-emission.js';
import { Toggle } from './action/_content/script/toggle/toggle';
import { RootSelector } from './api/_content/script/api/modules/stage/root.js';
import { InjectSvg } from './artwork/_content/deprecated/script/inject/inject-svg';
import { InjectSvgSelector } from './artwork/_content/deprecated/script/inject/inject-svg-selector';
import { Artwork } from './artwork/_content/script/artwork/artwork';
import { ArtworkSelector } from './artwork/_content/script/artwork/artwork-selector';
import { RatioSelector } from './.TODO/script/ratio/ratio-selector.js';
import { Ratio } from './.TODO/script/ratio/ratio.js';

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
