import api from '../../api.js';
import { HeaderSelector } from './header-selector.js';

class HeaderLinks extends api.core.Instance {
  static get instanceClassName () {
    return 'HeaderLinks';
  }

  init () {
    const header = this.queryParentSelector(HeaderSelector.HEADER);
    this.toolsLinks = header.querySelector(HeaderSelector.TOOLS_LINKS);
    this.menuLinks = header.querySelector(HeaderSelector.MENU_LINKS);
    const copySuffix = '-mobile';

    const toolsHtml = this.toolsLinks.innerHTML.replace(/  +/g, ' ');
    const menuHtml = this.menuLinks.innerHTML.replace(/  +/g, ' ');
    // Pour éviter de dupliquer des id, on ajoute un suffixe aux id et aria-controls duppliqués.
    let toolsHtmlIdList = toolsHtml.match(/id="(.*?)"/gm);
    if (toolsHtmlIdList) {
      // on a besoin d'échapper les backslash dans la chaine de caractère
      // eslint-disable-next-line no-useless-escape
      toolsHtmlIdList = toolsHtmlIdList.map(element => element.replace('id=\"', '').replace('\"', ''));
    }
    const toolsHtmlAriaControlList = toolsHtml.match(/aria-controls="(.*?)"/gm);
    let toolsHtmlDuplicateId = toolsHtml.replace(/id="(.*?)"/gm, 'id="$1' + copySuffix + '"');
    if (toolsHtmlAriaControlList) {
      for (const element of toolsHtmlAriaControlList) {
        const ariaControlsValue = element.replace('aria-controls="', '').replace('"', '');
        if (toolsHtmlIdList.includes(ariaControlsValue)) {
          toolsHtmlDuplicateId = toolsHtmlDuplicateId.replace(`aria-controls="${ariaControlsValue}"`, `aria-controls="${ariaControlsValue + copySuffix}"`);
        };
      }
    }

    if (toolsHtmlDuplicateId === menuHtml) return;

    switch (api.mode) {
      case api.Modes.ANGULAR:
      case api.Modes.REACT:
      case api.Modes.VUE:
        this.warn(`header__tools-links content is different from header__menu-links content.
As you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation:
${api.header.doc}`);
        break;

      default:
        this.menuLinks.innerHTML = toolsHtmlDuplicateId;
    }
  }
}

export { HeaderLinks };
