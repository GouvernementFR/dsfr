import consentBanner from '../ejs/consent-banner.ejs?raw';
import consentManager from '../ejs/consent-manager.ejs?raw';
import consentPlaceholder from '../ejs/consent-placeholder.ejs?raw';

export const consentPartials = [
  {
    names: ['consent-banner'],
    partial: consentBanner
  },
  {
    names: ['consent-manager'],
    partial: consentManager
  },
  {
    names: ['consent-placeholder'],
    partial: consentPlaceholder
  }
];
