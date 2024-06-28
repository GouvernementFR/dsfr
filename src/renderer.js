import { EJSRenderer } from './core/template/stories/ejs-renderer';
import { badgePartials } from './component/badge/template/stories/partials'
import { buttonPartials } from './component/button/template/stories/partials';
import { linkPartials } from './component/link/template/stories/partials';
import { tooltipPartials } from './component/tooltip/template/stories/partials';

const ejsRenderer = new EJSRenderer();

badgePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
buttonPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
linkPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tooltipPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));

export default ejsRenderer;
