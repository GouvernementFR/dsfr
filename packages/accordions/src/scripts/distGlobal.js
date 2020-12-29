/* eslint-disable no-new */
import { CollapsePlugin } from '@gouvfr/core/src/scripts/';
import { ACCORDION_ASCENDANT } from './accordion/accordion-constants';
import { AccordionsGroup } from './accordion/accordions-group';

CollapsePlugin.add(ACCORDION_ASCENDANT, AccordionsGroup);
