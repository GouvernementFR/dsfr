import api from '../../../../api';
import MatomoOpt from './matomo-opt';
import MatomoPage from './matomo-page';
import { Site } from '../../collector/provider/site';
import { User } from '../../collector/provider/user';
import { Funnel } from '../../collector/provider/funnel';
import MatomoSearch from './matomo-search';
import MatomoCollector from './matomo-collector';
import MatomoAction from './matomo-action';
import actions from '../../action/actions';
import push from './matomo-push';
import TarteAuCitronIntegration from './matomo-tarte-au-citron';

const PUSH = '_paq';

class MatomoProvider {
  constructor (config) {
    const url = config.setTrackerUrl;
    this._trackerUrl = typeof url === 'string' && url !== '' && url.charAt(url.length - 1) !== '/' ? `${url}/` : url;
    this._siteId = config.setSiteId;
    this._dimensions = config.dimensions;
    this._isLoaded = false;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  get opt () {
    if (!this._opt) this._opt = new MatomoOpt(this);
    return this._opt;
  }

  configure () {
    actions.setActionClass(MatomoAction);
    actions.setIdRequired(false);
    this.init();
    return this._promise;
  }

  init () {
    this._paq = window[PUSH] = window[PUSH] || [];

    if (this.opt.isDisabled) {
      api.inspector.warn('User opted out, Matomo is disabled');
    } else this.load();
  }

  integrateTarteAuCitron () {
    this._tac = new TarteAuCitronIntegration(this._dimensions);
    return this._tac.configure();
  }

  get hasConsent () {
    return !this._tac || this._tac.isAccepted;
  }

  load () {
    if (this._script) return;
    const url = this._trackerUrl;
    this._paq.push(['setTrackerUrl', `${url}matomo.php`]);
    this._paq.push(['setSiteId', this._siteId]);
    this._script = document.createElement('script');
    this._script.type = 'text/javascript';
    this._script.async = true;
    this._script.addEventListener('load', this.loaded.bind(this));
    this._script.addEventListener('error', this.error.bind(this));
    this._script.src = `${url}matomo.js`;
    const node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(this._script, node);
  }

  collector (config) {
    return new MatomoCollector(config, this);
  }

  page (context) {
    return new MatomoPage(context && context.page, context, this._dimensions, this);
  }

  site (context) {
    return new Site(context && context.site);
  }

  user (context) {
    return new User(context && context.user);
  }

  funnel (context) {
    return new Funnel(context && context.funnel);
  }

  search (context) {
    return new MatomoSearch(context && context.search);
  }

  push (type, layer) {
    if (this.opt.isDisabled) return;
    push(type, layer, this.hasConsent);
  }

  error () {
    api.inspector.error('Unable to load Matomo script file. In your configuration, setTrackerUrl must be the base URL of your Matomo instance (the "u" variable of the Matomo tracking code, without matomo.php) and setSiteId must match the setSiteId provided by the Matomo interface (tag creation)');
    this._reject('Matomo script loading error');
  }

  loaded () {
    if (this._isLoaded) return;
    this._isLoaded = true;
    this._resolve();
  }
}

export { MatomoProvider };

/*
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//{$MATOMO_URL}/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', {$IDSITE}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.async=true;
    g.src=u+'matomo.js';
    s.parentNode.insertBefore(g,s);
})();
*/
