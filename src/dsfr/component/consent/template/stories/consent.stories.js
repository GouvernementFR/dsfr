import { renderModal } from '../../../modal/template/stories/modal';
import { renderConsentBanner, renderConsentManager } from './consent';
import { consentArgs, consentArgTypes, consentProps, consentManagerModal } from './consent-arg-types';

const render = (args) => renderConsentBanner({ consent: consentProps(args) }) + renderModal({ modal: { ...consentManagerModal, body: renderConsentManager({ consent: consentProps(args) }) } });

export default {
  id: 'consent',
  title: 'DSFR/Component/Consent',
  render: render,
  argTypes: consentArgTypes,
  args: consentArgs
};

export const ConsentStory = {
  tags: ['autodocs'],
  args: {}
};
