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
    let toolsHtmlIdList = toolsHtml.match(/id="(.*?)"/gm) || [];

    // on a besoin d'échapper les backslash dans la chaine de caractère
    // eslint-disable-next-line no-useless-escape
    toolsHtmlIdList = toolsHtmlIdList.map(element => element.replace('id=\"', '').replace('\"', ''));

    const dupplicateAttributes = ['aria-controls', 'aria-describedby', 'aria-labelledby'];

    let toolsHtmlDuplicateId = toolsHtml.replace(/id="(.*?)"/gm, `id="$1${copySuffix}"`);

    for (const attribute of dupplicateAttributes) {
      const toolsHtmlAttributeList = toolsHtml.match(new RegExp(`${attribute}="(.*?)"`, 'gm'));
      if (toolsHtmlAttributeList) {
        for (const element of toolsHtmlAttributeList) {
          const attributeValue = element.replace(`${attribute}="`, '').replace('"', '');
          if (toolsHtmlIdList.includes(attributeValue)) {
            toolsHtmlDuplicateId = toolsHtmlDuplicateId.replace(`${attribute}="${attributeValue}"`, `${attribute}="${attributeValue + copySuffix}"`);
          };
        }
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
