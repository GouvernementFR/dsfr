import api from '../../../api';
import { AccordionActionee } from './accordion/accordion-actionee';
import { BreadcrumbSelector } from './breadcrumb/breadcrumb-selector';
import { BreadcrumbActionee } from './breadcrumb/breadcrumb-actionee';
import { BreadcrumbLinkActionee } from './breadcrumb/breadcrumb-link-actionee';
import { ButtonSelector } from './button/button-selector';
import { ButtonActionee } from './button/button-actionee';
import { CalloutSelector } from './callout/callout-selector';
import { CalloutActionee } from './callout/callout-actionee';
import { CardSelector } from './card/card-selector';
import { CardActionee } from './card/card-actionee';
import { CheckboxSelector } from './checkbox/checkbox-selector';
import { CheckboxActionee } from './checkbox/checkbox-actionee';
import { FooterSelector } from './footer/footer-selector';
import { FooterActionee } from './footer/footer-actionee';
import { FooterLinkActionee } from './footer/footer-link-actionee';
import { HeaderSelector } from './header/header-selector';
import { HeaderActionee } from './header/header-actionee';
import { HighlightSelector } from './highlight/highlight-selector';
import { HighlightActionee } from './highlight/highlight-actionee';
import { LinkSelector } from './link/link-selector';
import { LinkActionee } from './link/link-actionee';
import { NavigationSelector } from './navigation/navigation-selector';
import { NavigationActionee } from './navigation/navigation-actionee';
import { NavigationLinkActionee } from './navigation/navigation-link-actionee';
import { ModalActionee } from './modal/modal-actionee';
import { SearchSelector } from './search/search-selector';
import { SearchActionee } from './search/search-actionee';
import { RadioSelector } from './radio/radio-selector';
import { RadioActionee } from './radio/radio-actionee';
import { SidemenuSelector } from './sidemenu/sidemenu-selector';
import { SidemenuActionee } from './sidemenu/sidemenu-actionee';
import { SummarySelector } from './summary/summary-selector';
import { SummaryActionee } from './summary/summary-actionee';
import { ToggleSelector } from './toggle/toggle-selector';
import { ToggleActionee } from './toggle/toggle-actionee';
import { TabActionee } from './tab/tab-actionee';

if (api.accordion) {
  api.internals.register(api.accordion.AccordionSelector.COLLAPSE, AccordionActionee);
}

if (api.breadcrumb) {
  api.internals.register(BreadcrumbSelector.COLLAPSE, BreadcrumbActionee);
  api.internals.register(BreadcrumbSelector.LINK, BreadcrumbLinkActionee);
}

api.internals.register(ButtonSelector.BUTTON, ButtonActionee);

api.internals.register(CalloutSelector.CALLOUT, CalloutActionee);

api.internals.register(CardSelector.CARD, CardActionee);

api.internals.register(FooterSelector.FOOTER, FooterActionee);
api.internals.register(FooterSelector.FOOTER_LINKS, FooterLinkActionee);

api.internals.register(HeaderSelector.HEADER, HeaderActionee);

api.internals.register(HighlightSelector.HIGHLIGHT, HighlightActionee);

if (api.navigation) {
  api.internals.register(NavigationSelector.NAVIGATION, NavigationActionee);
  api.internals.register(NavigationSelector.LINK, NavigationLinkActionee);
}

api.internals.register(LinkSelector.LINK, LinkActionee);

if (api.modal) {
  api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
}

api.internals.register(SearchSelector.SEARCH_BAR, SearchActionee);

api.internals.register(RadioSelector.INPUT, RadioActionee);

api.internals.register(CheckboxSelector.INPUT, CheckboxActionee);

api.internals.register(SidemenuSelector.LINK, SidemenuActionee);

api.internals.register(SummarySelector.LINK, SummaryActionee);

api.internals.register(ToggleSelector.INPUT, ToggleActionee);

if (api.tab) {
  api.internals.register(api.tab.TabSelector.PANEL, TabActionee);
}

export default api;
