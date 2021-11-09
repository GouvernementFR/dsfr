import api from './index.js';

api.register(api.core.CollapseSelector.COLLAPSE, api.core.Collapse);
api.register(api.core.InjectSvgSelector.INJECT_SVG, api.core.InjectSvg);

export default api;
