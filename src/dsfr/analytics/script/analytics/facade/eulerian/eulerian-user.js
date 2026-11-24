import { User } from '../../collector/provider/user';
import { validateString } from '../../utils/type-validator';
import normalize from '../../utils/normalize';

class EulerianUser extends User {
  get layer () {
    const layer = super.layer;
    const data = Object.entries(layer).map(([key, value]) => [key, normalize(value)]).flat();

    Object.entries(this._config).forEach(([key, value]) => {
      if (key in layer) return;
      const valid = validateString(value, `context.user.${key}`);
      if (valid !== null && valid !== '') data.push(key, normalize(valid));
    });

    return data;
  }
}

export default EulerianUser;
