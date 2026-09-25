import api from '../../../../api.js';
import { revoke } from './matomo-push';
import { CONSENT_REFS, toDimensionId } from './matomo-page';

const State = {
  UNKNOWN: -1,
  CONFIGURING: 0,
  CONFIGURED: 1,
  INITIATED: 2,
  READY: 3
};

class TarteAuCitronIntegration {
  constructor (dimensions) {
    this._consentDimensionIds = (Array.isArray(dimensions) ? dimensions : [])
      .filter(dimension => dimension && CONSENT_REFS.includes(dimension.$ref))
      .map(dimension => toDimensionId(dimension.id))
      .filter(id => id !== null);
    this._state = State.UNKNOWN;
    this._isAccepted = false;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._waitForTrackerCount = 0;
  }

  get isAccepted () {
    return this._isAccepted;
  }

  configure () {
    if (this._state >= State.CONFIGURED) return this._promise;
    if (this._state === State.UNKNOWN) {
      api.inspector.info('analytics configures tarteaucitron');
      this._state = State.CONFIGURING;
    }

    const tarteaucitron = window.tarteaucitron;
    if (!tarteaucitron || !tarteaucitron.services) {
      window.requestAnimationFrame(this.configure.bind(this));
      return;
    }

    this._state = State.CONFIGURED;

    const data = {
      key: 'MatomoAnalytics',
      type: 'analytic',
      name: 'Matomo Analytics',
      needConsent: true,
      cookies: ['_pk_id', '_pk_ses', '_pk_ref'],
      uri: 'https://fr.matomo.org/guide/manage-matomo/privacy/',
      js: () => this.init(),
      fallback: () => this.fallback()
    };
    tarteaucitron.services.MatomoAnalytics = data;
    document.addEventListener('MatomoAnalytics_allowed', this.allow.bind(this));
    document.addEventListener('MatomoAnalytics_disallowed', this.disallow.bind(this));
    if (!tarteaucitron.job) tarteaucitron.job = [];
    tarteaucitron.job.push('MatomoAnalytics');

    return this._promise;
  }

  init () {
    this._isAccepted = true;
    if (this._state >= State.INITIATED) return;
    this._state = State.INITIATED;
    this._resolve();
  }

  fallback () {
    this._isAccepted = false;
    this._resolve();
  }

  allow () {
    this._isAccepted = true;
  }

  disallow () {
    this._isAccepted = false;
    revoke(this._consentDimensionIds);
  }
}

export default TarteAuCitronIntegration;
