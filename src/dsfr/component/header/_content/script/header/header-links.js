import ref from '../../ref.js';
import { HeaderSelector } from './header-selector.js';

class HeaderLinks extends ref.api.Instance {
  static get instanceClassName () {
    return 'HeaderLinks';
  }

  init () {
    const header = this.queryParentSelector(HeaderSelector.HEADER);
    this.toolsLinks = header.querySelector(HeaderSelector.TOOLS_LINKS);
    this.menuLinks = header.querySelector(HeaderSelector.MENU_LINKS);
    const copySuffix = '_copy';

    const toolsHtml = this.toolsLinks.innerHTML.replace(/  +/g, ' ');
    const menuHtml = this.menuLinks.innerHTML.replace(/  +/g, ' ');
    // Pour éviter de dupliquer des id, on ajoute un suffixe aux id et aria-controls duppliqués.
    let toolsHtmlDuplicateId = toolsHtml.replace(/ id="(.*?)"/gm, ' id="$1' + copySuffix + '"');
    toolsHtmlDuplicateId = toolsHtmlDuplicateId.replace(/ aria-controls="(.*?)"/gm, ' aria-controls="$1' + copySuffix + '"');

    if (toolsHtmlDuplicateId === menuHtml) return;

    switch (ref.mode) {
      case ref.Modes.ANGULAR:
      case ref.Modes.REACT:
      case ref.Modes.VUE:
        ref.inspector.warn(`header__tools-links content is different from header__menu-links content.
As you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation:
${ref.header.doc}`);
        break;

      default:
        this.menuLinks.innerHTML = toolsHtmlDuplicateId;
    }
  }
}

export { HeaderLinks };
