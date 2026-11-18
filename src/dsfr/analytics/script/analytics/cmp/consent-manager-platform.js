import { TarteAuCitronIntegration } from './tarte-au-citron-integration';

class ConsentManagerPlatform {
  constructor (config, provider) {
    this._provider = provider;
    this._config = this._provider ? config.cmp : config;
    if (this._config) {
      switch (this._config.id) {
        case 'tarteaucitron':
          this.integrateTarteAuCitron();
          break;
      }
    }
  }

  integrateTarteAuCitron () {
    if (this._provider) {
      this._tac = this._provider.integrateTarteAuCitron();
      return this._tac;
    } else {
      this._tac = new TarteAuCitronIntegration(this._config);
      return this._tac.configure();
    }
  }

  optin () {

  }
}

export { ConsentManagerPlatform };
