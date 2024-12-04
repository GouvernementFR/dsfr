import { renderConsentBanner } from './consent';
import { consentBannerArgs, consentBannerArgTypes, consentBannerProps } from './consent-banner-arg-types';

const render = (args) => renderConsentBanner({ consent: consentBannerProps(args) });

export default {
  id: 'consent',
  title: 'DSFR/Component/Consent/Consent Banner',
  render: render,
  argTypes: consentBannerArgTypes,
  args: consentBannerArgs
};

export const ConsentBannerStory = {
  tags: ['autodocs'],
  args: {}
};
