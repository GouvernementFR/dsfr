const consentModal = {
  id: 'fr-consent-modal',
  title: 'Panneau de gestion des cookies',
  size: 'lg'
};

const consentModalButton = {
  label: 'Personnaliser',
  kind: 2,
  attributes: {
    'data-fr-opened': false,
    'aria-controls': 'fr-consent-modal'
  }
};

const consentModalFinalities = {
  finalities: [{ id: 'finality', title: 'Préférences pour tous les services. Données personnelles et cookies', radios: [{ name: 'consent-all', label: 'Tout accepter', id: 'consent-all-accept', checked: false }, { name: 'consent-all', label: 'Tout refuser', id: 'consent-all-refuse', disabled: false }] }, { id: 'finality-0', title: 'Cookies obligatoires', desc: 'Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés.', radios: [{ name: 'consent-finality-0', label: 'Accepter', id: 'consent-finality-0-accept', checked: true }, { name: 'consent-finality-0', label: 'Refuser', id: 'consent-finality-0-refuse', disabled: true }] }, { id: 'finality-1', title: 'Nom de la finalité', desc: 'Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.', radios: [{ name: 'consent-finality-1', label: 'Accepter', id: 'consent-finality-1-accept', checked: false }, { name: 'consent-finality-1', label: 'Refuser', id: 'consent-finality-1-refuse', disabled: false }], services: [{ id: 'finality-1-service-1', title: 'Sous finalité 1', radios: [{ name: 'consent-finality-1-service-1', label: 'Accepter', id: 'consent-finality-1-service-1-accept', checked: false }, { name: 'consent-finality-1-service-1', label: 'Refuser', id: 'consent-finality-1-service-1-refuse', disabled: false }] }, { id: 'finality-1-service-2', title: 'Sous finalité 2', desc: 'Ce service utilise 3 cookies.', radios: [{ name: 'consent-finality-1-service-2', label: 'Accepter', id: 'consent-finality-1-service-2-accept', checked: false }, { name: 'consent-finality-1-service-2', label: 'Refuser', id: 'consent-finality-1-service-2-refuse', disabled: false }] }, { id: 'finality-1-service-3', title: 'Sous finalité 3', radios: [{ name: 'consent-finality-1-service-3', label: 'Accepter', id: 'consent-finality-1-service-3-accept', checked: false }, { name: 'consent-finality-1-service-3', label: 'Refuser', id: 'consent-finality-1-service-3-refuse', disabled: false }] }] }, { id: 'finality-2', title: 'Nom de la finalité', desc: 'Description optionnelle de la finalité, lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in suscipit nulla, et pulvinar velit.', radios: [{ name: 'consent-finality-2', label: 'Accepter', id: 'consent-finality-2-accept', checked: false }, { name: 'consent-finality-2', label: 'Refuser', id: 'consent-finality-2-refuse', disabled: false }], services: [{ id: 'finality-2-service-1', title: 'Sous finalité 1', radios: [{ name: 'consent-finality-2-service-1', label: 'Accepter', id: 'consent-finality-2-service-1-accept', checked: false }, { name: 'consent-finality-2-service-1', label: 'Refuser', id: 'consent-finality-2-service-1-refuse', disabled: false }] }, { id: 'finality-2-service-2', title: 'Sous finalité 2', desc: 'Ce service utilise 3 cookies.', radios: [{ name: 'consent-finality-2-service-2', label: 'Accepter', id: 'consent-finality-2-service-2-accept', checked: false }, { name: 'consent-finality-2-service-2', label: 'Refuser', id: 'consent-finality-2-service-2-refuse', disabled: false }] }, { id: 'finality-2-service-3', title: 'Sous finalité 3', radios: [{ name: 'consent-finality-2-service-3', label: 'Accepter', id: 'consent-finality-2-service-3-accept', checked: false }, { name: 'consent-finality-2-service-3', label: 'Refuser', id: 'consent-finality-2-service-3-refuse', disabled: false }] }] }]
};

export { consentModalFinalities, consentModal, consentModalButton };
