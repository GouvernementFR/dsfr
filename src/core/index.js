import api from './script/api/api';

import { Instance } from './script/api/modules/register/instance.js';
import { KeyCodes } from './script/api/modules/register/key-codes.js';
import { Breakpoints } from './script/api/modules/register/breakpoints';
import { Disclosure } from './script/disclosure/disclosure.js';
import { DisclosureButton } from './script/disclosure/disclosure-button.js';
import { DisclosuresGroup } from './script/disclosure/disclosures-group.js';
import { DisclosureType } from './script/disclosure/disclosure-type.js';
import { DisclosureEvent } from './script/disclosure/disclosure-event.js';
import { DisclosureSelector } from './script/disclosure/disclosure-selector.js';
import { DisclosureEmission } from './script/disclosure/disclosure-emission.js';
import { CollapseButton } from './script/collapse/collapse-button.js';
import { Collapse } from './script/collapse/collapse.js';
import { CollapsesGroup } from './script/collapse/collapses-group.js';
import { CollapseSelector } from './script/collapse/collapse-selector.js';
import { Equisized } from './script/equisized/equisized.js';
import { EquisizedsGroup } from './script/equisized/equisizeds-group.js';
import { EquisizedEmission } from './script/equisized/equisized-emission.js';
import { Toggle } from './script/action/toggle/toggle';
import { RootSelector } from './script/api/modules/stage/root-selector.js';
import { RootEmission } from './script/api/modules/stage/root-emission.js';
import { InjectSvg } from './script/inject/inject-svg';
import { InjectSvgSelector } from './script/inject/inject-svg-selector';
import { Artwork } from './script/artwork/artwork';
import { ArtworkSelector } from './script/artwork/artwork-selector';
import { AssessSelector } from './script/assess/assess-selector';
import { AssessFile } from './script/assess/assess-file';
import { AssessDetail } from './script/assess/assess-detail';
import { AssessEmission } from './script/assess/assess-emission';
import { RatioSelector } from './script/ratio/ratio-selector.js';
import { Ratio } from './script/ratio/ratio.js';
import { Placement } from './script/placement/placement.js';
import { PlacementReferent } from './script/placement/placement-referent';
import { PlacementAlign } from './script/placement/placement-align';
import { PlacementPosition } from './script/placement/placement-position';
import { PlacementMode } from './script/placement/placement-mode';

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureType: DisclosureType,
  DisclosureEvent: DisclosureEvent,
  DisclosureSelector: DisclosureSelector,
  DisclosureEmission: DisclosureEmission,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelector: CollapseSelector,
  RootSelector: RootSelector,
  RootEmission: RootEmission,
  Equisized: Equisized,
  EquisizedEmission: EquisizedEmission,
  Toggle: Toggle,
  EquisizedsGroup: EquisizedsGroup,
  InjectSvg: InjectSvg,
  InjectSvgSelector: InjectSvgSelector,
  Artwork: Artwork,
  ArtworkSelector: ArtworkSelector,
  AssessFile: AssessFile,
  AssessDetail: AssessDetail,
  AssessEmission: AssessEmission,
  AssessSelector: AssessSelector,
  Ratio: Ratio,
  RatioSelector: RatioSelector,
  Placement: Placement,
  PlacementReferent: PlacementReferent,
  PlacementAlign: PlacementAlign,
  PlacementPosition: PlacementPosition,
  PlacementMode: PlacementMode
};

export default api;
