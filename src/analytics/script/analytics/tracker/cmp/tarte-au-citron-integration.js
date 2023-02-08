const State = {
  UNKNOWN: -1,
  CONFIGURING: 0,
  CONFIGURED: 1,
  INITIATED: 2,
  READY: 3
};

class TarteAuCitronIntegration {
  constructor (config) {
    this._config = config;
    this._state = State.UNKNOWN;
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  configure () {
    console.log('configure');
    if (this._state >= State.CONFIGURED) return this._promise;
    if (this._state === State.UNKNOWN) this._state = State.CONFIGURING;
    const tarteaucitron = window.tarteaucitron;
    if (!tarteaucitron || !tarteaucitron.services) {
      window.requestAnimationFrame(this.init.bind(this));
      return;
    }

    this._state = State.CONFIGURED;

    console.log('configured', tarteaucitron);
    const init = this.init.bind(this);

    const data = {
      key: 'eulerian',
      type: 'analytic',
      name: 'Eulerian Analytics',
      needConsent: true,
      cookies: ['etuix'],
      uri: 'https://eulerian.com/vie-privee',
      js: init,
      fallback: () => { tarteaucitron.services.eulerian.js(); }
    };

    tarteaucitron.services.eulerian = data;
    if (!tarteaucitron.job) tarteaucitron.job = [];
    tarteaucitron.job.push('eulerian');

    return this._promise;
  }

  init () {
    console.log('before');
    if (this._state >= State.INITIATED) return;
    this._state = State.INITIATED;
    console.log('init');

    window.__eaGenericCmpApi = this.integrate.bind(this);
    const update = this.update.bind(this);
    window.addEventListener('tac.close_alert', update);
    window.addEventListener('tac.close_panel', update);
  }

  integrate (cmpApi) {
    console.log('before integrate');
    if (this._state >= State.READY) return;
    console.log('integrate', cmpApi);
    this._state = State.READY;
    this._cmpApi = cmpApi;
    this._resolve();
    this.update();
  }

  update () {
    if (!this._state < State.READY) return;
    console.log('update');
    this._cmpApi('tac', window.tarteaucitron, 1);
  }
}

export { TarteAuCitronIntegration };
