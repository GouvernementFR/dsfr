import { Funnel } from '../../collector/provider/funnel';
import { validateString } from '../../utils/type-validator';
import normalize from '../../utils/normalize';

class EulerianFunnel extends Funnel {
  get layer () {
    const layer = super.layer;
    const data = [];

    Object.entries(this._config).forEach(([key, value]) => {
      if (key in layer) return;
      const valid = validateString(value, `context.funnel.${key}`);
      if (valid !== null && valid !== '') data.push(key, normalize(valid));
    });

    return data;
  }
}

export default EulerianFunnel;
