import api from '../../../api';
import { AccordionActionee } from './accordion/accordion-actionee';
import { ButtonSelector} from './button/button-selector';
import { BreadcrumbSelector} from './breadcrumb/breadcrumb-selector';
import { ButtonActionee } from './button/button-actionee';
import { BreadcrumbActionee } from './breadcrumb/breadcrumb-actionee';
import { BreadcrumbLinkActionee } from './breadcrumb/breadcrumb-link-actionee';
import { ModalActionee } from './modal/modal-actionee';
import { SearchSelector} from './search/search-selector';
import { SearchActionee } from './search/search-actionee';
import { TabActionee } from './tab/tab-actionee';

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

api.internals.register(ButtonSelector.BUTTON, ButtonActionee);

if (api.breadcrumb) {
  api.internals.register(BreadcrumbSelector.COLLAPSE, BreadcrumbActionee);
  api.internals.register(BreadcrumbSelector.LINK, BreadcrumbLinkActionee);
}

if (api.modal) {
  api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
}

api.internals.register(SearchSelector.SEARCH_BAR, SearchActionee);

if (api.tab) {
  api.internals.register(api.tab.TabSelector.PANEL, TabActionee);
}

export default api;
