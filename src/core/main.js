import api from './index.js';

api.internals.register(api.core.CollapseSelector.COLLAPSE, api.core.Collapse);
api.internals.register(api.core.InjectSvgSelector.INJECT_SVG, api.core.InjectSvg);

export default api;
