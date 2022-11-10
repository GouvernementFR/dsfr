import ref from '../../ref.js';

import { Disclosure } from './disclosure/disclosure.js';
import { DisclosureButton } from './disclosure/disclosure-button.js';
import { DisclosuresGroup } from './disclosure/disclosures-group.js';
import { DisclosureType } from './disclosure/disclosure-type.js';
import { DisclosureEvent } from './disclosure/disclosure-event.js';
import { DisclosureEmission } from './disclosure/disclosure-emission.js';

ref.disclosure = {
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureType: DisclosureType,
  DisclosureEvent: DisclosureEvent,
  DisclosureEmission: DisclosureEmission
};

export default ref;
