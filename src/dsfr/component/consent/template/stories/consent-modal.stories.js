import { renderModal } from '../../../modal/template/stories/modal';
import { renderButton } from '../../../button/template/stories/button';
import { renderConsentManager } from './consent';
import { consentModalFinalities, consentModal, consentModalButton } from './consent-modal-arg-types';

const render = (args) => renderButton({ button: consentModalButton }) + renderModal({ modal: { ...consentModal, body: renderConsentManager({ consent: consentModalFinalities }) } });

export default {
  id: 'consent',
  title: 'DSFR/Component/Consent/Consent Modal',
  render: render
};

export const ConsentModalStory = {
  tags: ['autodocs'],
  args: {}
};
