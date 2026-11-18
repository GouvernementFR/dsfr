import { Collector } from '../../engine/collector';

class MatomoCollector extends Collector {
  _routeChanged () {
    this._search.reset(true);
    super._routeChanged();
  }

  get layer () {
    return Object.assign(
      {},
      this._user.layer,
      this._site.layer,
      this._page.layer,
      this._search.layer,
      this._funnel.layer
    );
  }
}

export default MatomoCollector;
