import { Page } from '../../collector/provider/page';
import { validateString } from '../../utils/type-validator';
import normalize from '../../utils/normalize';

class EulerianPage extends Page {
  get layer () {
    const layer = super.layer;
    const data = Object.entries(layer).map(([key, value]) => [key, normalize(value)]).flat();

    Object.entries(this._config).forEach(([key, value]) => {
      if (key in layer) return;
      const valid = validateString(value, `context.page.${key}`);
      if (valid !== null && valid !== '') data.push(key, normalize(valid));
    });

    return data;
  }
}

export default EulerianPage;
