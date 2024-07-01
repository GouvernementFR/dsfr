import { EJSRenderer } from './core/template/stories/ejs-renderer';
import { corePartials } from './core/template/stories/partials';
import { badgePartials } from './component/badge/template/stories/partials';
import { buttonPartials } from './component/button/template/stories/partials';
import { formPartials } from './component/form/template/stories/partials';
import { linkPartials } from './component/link/template/stories/partials';
import { tooltipPartials } from './component/tooltip/template/stories/partials';
import { uploadPartials } from './component/upload/template/stories/partials';

const ejsRenderer = new EJSRenderer();

corePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
badgePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
buttonPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
formPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
linkPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tooltipPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
uploadPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));

export default ejsRenderer;
