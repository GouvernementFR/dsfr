import api from '../../../../api';
import { Site } from '../../collector/provider/site';
import { validateString } from '../../utils/type-validator';
import normalize from '../../utils/normalize';

class EulerianSite extends Site {
  get layer () {
    const layer = super.layer;
    const { environment, api_version: apiVersion } = layer;
    api.inspector.info('analytics', 'information', { environment, api_version: apiVersion });

    const data = [];

    Object.entries(this._config).forEach(([key, value]) => {
      if (key in layer) return;
      const valid = validateString(value, `context.site.${key}`);
      if (valid !== null && valid !== '') data.push(key, normalize(valid));
    });

    return data;
  }
}

export default EulerianSite;
