import Mode from './mode.js';
import api from '../../../api';
import { User } from '../collector/user/user';
import { Site } from '../collector/site/site';
import { Page } from '../collector/page/page';
import { Search } from '../collector/search/search';
import { Funnel } from '../collector/funnel/funnel';
import queue from './queue';
import { Location } from './location';
import { CollectorEvent } from './collector-event';

class Collector {
  constructor (config) {
    switch (config.mode) {
      case Mode.MANUAL:
      case Mode.LOAD:
      case Mode.FULL:
      case Mode.HASH:
        this._mode = config.mode;
        break;

      default:
        switch (true) {
          case api.mode === api.Modes.ANGULAR:
          case api.mode === api.Modes.REACT:
          case api.mode === api.Modes.VUE:
            this._mode = Mode.FULL;
            break;

          default:
            this._mode = Mode.LOAD;
        }
    }

    this._user = new User(config.user);
    this._site = new Site(config.site);
    this._page = new Page(config.page);
    this._search = new Search(config.search);
    this._funnel = new Funnel(config.funnel);

    this._isCollected = false;
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
    const handleChange = this._handleChange.bind(this);
    switch (this._mode) {
      case Mode.LOAD:
        this.collect();
        break;

      case Mode.FULL:
        this.collect();
        this._location = new Location(handleChange);
        break;

      case Mode.HASH:
        this.collect();
        this._location = new Location(handleChange, true);
        break;
    }
  }

  _handleChange () {
    this._page.referrer = this._location.referrer;
    if (this._location.hasTitle) this._page.title = this._location.title;
    this._page.path = this._location.path;
    const event = new CustomEvent(CollectorEvent.COLLECT);
    document.documentElement.dispatchEvent(event);
    this.collect();
  }

  reset (clear = false) {
    this._user.reset(clear);
    this._site.reset(clear);
    this._page.reset(clear);
    this._search.reset(clear);
    this._funnel.reset(clear);
  }

  collect () {
    if (this._isCollected) return;
    queue.collect(this.layer);
    this._isCollected = true;
  }

  get mode () {
    return this._mode;
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
