import { TrackingEventTypes } from './tracking-event-types';

class Tracker {
  constructor () {
    console.log('tracker');
  }

  get isAvailable () {
    return typeof window.EA_push === 'function';
  }

  trackPage (path, data) {

  }

  trackEvent (context, action, label, data) {
    this._trackEvent(TrackingEventTypes.EVENT, this._concatEntry(action, label, data), data);
  }

  trackButton (context, action, label, data) {
    this._trackEvent(TrackingEventTypes.BUTTON, this._concatEntry(action, label, data), data);
  }

  trackLink (context, action, label, data) {
    this._trackEvent(TrackingEventTypes.LINK, this._concatEntry(action, label, data), data);
  }

  trackDownload (context, action, label, data) {
    this._trackEvent(TrackingEventTypes.DOWNLOAD, this._concatEntry(action, label, data), data);
  }

  _concatEntry (context, action, label) {
    return `${context}::${action}::${label}`;
  }

  _trackEvent (type, entry, data) {
    if (!this.isAvailable) return;
    if (data) this._openData(data);
    window.EA_push(type, [entry]);
    if (data) this._closeData();
  }

  _openData (data) {
    window.EA_push('globalarg', Object.entries(data).flat());
  }

  _closeData () {
    window.EA_push('globalarg', []);
  }
}

const tracker = new Tracker();

export default tracker;
