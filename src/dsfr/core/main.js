import api from './index.js';

api.internals.register(api.core.CollapseSelector.COLLAPSE, api.core.Collapse);
api.internals.register(api.core.InjectSvgSelector.INJECT_SVG, api.core.InjectSvg);
api.internals.register(api.core.RatioSelector.RATIO, api.core.Ratio);
api.internals.register(api.core.AssessSelector.ASSESS_FILE, api.core.AssessFile);
api.internals.register(api.core.AssessSelector.DETAIL, api.core.AssessDetail);

export default api;
