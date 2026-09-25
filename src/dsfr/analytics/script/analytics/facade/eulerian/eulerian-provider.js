import api from '../../../../api';
import { Collector } from '../../engine/collector';
import { Init } from '../init';
import opt from '../opt';
import EulerianPage from './eulerian-page';
import EulerianSite from './eulerian-site';
import EulerianUser from './eulerian-user';
import EulerianFunnel from './eulerian-funnel';
import push from '../push';
import { TarteAuCitronIntegration } from '../../cmp/tarte-au-citron-integration';

class EulerianProvider extends Init {
  constructor (config) {
    super(config.domain);
  }

  get opt () {
    return opt;
  }

  init () {
    if (!this._domain) {
      api.inspector.error('Eulerian domain is missing from configuration');
      this._reject('Eulerian domain is missing from configuration');
      return;
    }
    super.init();
  }

  integrateTarteAuCitron () {
    this._tac = new TarteAuCitronIntegration();
    return this._tac.configure();
  }

  collector (config) {
    return new Collector(config, this);
  }

  page (context) {
    return new EulerianPage(context && context.page);
  }

  site (context) {
    return new EulerianSite(context && context.site);
  }

  user (context) {
    return new EulerianUser(context && context.user);
  }

  funnel (context) {
    return new EulerianFunnel(context && context.funnel);
  }

  push (type, layer) {
    push(type, layer);
  }
}

export { EulerianProvider };
