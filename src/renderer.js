import { EJSRenderer } from './core/template/stories/ejs-renderer';
import { corePartials } from './core/template/stories/partials';
import { accordionPartials } from './component/accordion/template/stories/partials';
import { alertPartials } from './component/alert/template/stories/partials';
import { badgePartials } from './component/badge/template/stories/partials';
import { breadcrumbPartials } from './component/breadcrumb/template/stories/partials';
import { buttonPartials } from './component/button/template/stories/partials';
import { calloutPartials } from './component/callout/template/stories/partials';
import { highlightPartials } from './component/highlight/template/stories/partials';
import { linkPartials } from './component/link/template/stories/partials';
import { noticePartials } from './component/notice/template/stories/partials';
import { quotePartials } from './component/quote/template/stories/partials';
import { tagPartials } from './component/tag/template/stories/partials';
import { tooltipPartials } from './component/tooltip/template/stories/partials';

const ejsRenderer = new EJSRenderer();

corePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
accordionPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
alertPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
badgePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
breadcrumbPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
calloutPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
highlightPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
buttonPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
linkPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
noticePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
quotePartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tagPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));
tooltipPartials.forEach(({ names, partial }) => ejsRenderer.add(names, partial));

export default ejsRenderer;
