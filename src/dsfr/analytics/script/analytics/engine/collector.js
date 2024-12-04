import Collection from './collection.js';
import api from '../../../api';
import { User } from '../collector/user/user';
import { Site } from '../collector/site/site';
import { Page } from '../collector/page/page';
import { Search } from '../collector/search/search';
import { Funnel } from '../collector/funnel/funnel';
import queue from './queue';
import renderer from './renderer';
import actions from '../action/actions';
import { Location } from './location';
import { CollectorEvent } from './collector-event';
import { ActioneeEmission } from '../../integration/core/actionee-emission';
import { ActionEnable } from './action-enable';

class Collector {
  constructor (config) {
    switch (config.collection) {
      case Collection.MANUAL:
      case Collection.LOAD:
      case Collection.FULL:
      case Collection.HASH:
        this._collection = config.collection;
        break;

      default:
        /* deprecated start */
        if (config.mode) {
          switch (config.mode) {
            case 'manual':
              this._collection = config.collection;
              break;
          }
        }
        /* deprecated end */

        switch (true) {
          /* deprecated */
          case config.mode === 'manual':
            this._collection = Collection.MANUAL;
            break;

          case api.mode === api.Modes.ANGULAR:
          case api.mode === api.Modes.REACT:
          case api.mode === api.Modes.VUE:
            this._collection = Collection.FULL;
            break;

          default:
            this._collection = Collection.LOAD;
        }
    }

    this.isActionEnabled = config.isActionEnabled;

    this._user = new User(config.user);
    this._site = new Site(config.site);
    this._page = new Page(config.page);
    this._search = new Search(config.search);
    this._funnel = new Funnel(config.funnel);

    this._delay = -1;
    queue.setCollector(this);
  }

  get page () {
    return this._page;
  }

  get user () {
    return this._user;
  }

  get site () {
    return this._site;
  }

  get search () {
    return this._search;
  }

  get funnel () {
    return this._funnel;
  }

  start () {
    const handleRouteChange = this._handleRouteChange.bind(this);
    switch (this._collection) {
      case Collection.LOAD:
        this.collect();
        break;

      case Collection.FULL:
        this.collect();
        this._location = new Location(handleRouteChange);
        break;

      case Collection.HASH:
        this.collect();
        this._location = new Location(handleRouteChange, true);
        break;
    }
  }

  _handleRouteChange () {
    queue.send(true);
    this._delay = 6;
    renderer.add(this);
  }

  render () {
    this._delay--;
    if (this._delay < 0) {
      renderer.remove(this);
      this._routeChanged();
    }
  }

  _routeChanged () {
    actions.rewind();
    this._page.referrer = this._location.referrer;
    if (this._location.hasTitle) this._page.title = this._location.title;
    this._page.path = this._location.path;
    const event = new CustomEvent(CollectorEvent.COLLECT);
    document.documentElement.dispatchEvent(event);
    this.collect();
    if (api.internals && api.internals.stage && api.internals.stage.root) api.internals.stage.root.descend(ActioneeEmission.REWIND);
  }

  reset (clear = false) {
    this._user.reset(clear);
    this._site.reset(clear);
    this._page.reset(clear);
    this._search.reset(clear);
    this._funnel.reset(clear);
  }

  collect () {
    if (!this.page.collecting()) return;
    queue.collect();
  }

  get collection () {
    return this._collection;
  }

  get isCollecting () {
    return this._page.isCollecting;
  }

  get isActionEnabled () {
    return this._isActionEnabled.value;
  }

  set isActionEnabled (value) {
    this._isActionEnabled = Object.values(ActionEnable).find(enable => enable.entries.includes(value)) || ActionEnable.DISABLE;
  }

  get isActionReduced () {
    return this._isActionEnabled === ActionEnable.REDUCE;
  }

  get layer () {
    return [
      ...this._user.layer,
      ...this._site.layer,
      ...this._page.layer,
      ...this._search.layer,
      ...this._funnel.layer
    ];
  }
}

export { Collector };
