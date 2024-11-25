const messageArgTypes = {
  status: {
    control: {
      type: 'select',
      labels: {
        default: 'Défaut',
        valid: 'Succès',
        error: 'Erreur'
      }
    },
    description: 'Statut du message',
    options: ['default', 'valid', 'error'],
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  errorMessage: {
    if: { arg: 'status', eq: 'error' },
    control: 'text',
    description: 'Texte du message d\'erreur',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  },
  validMessage: {
    if: { arg: 'status', eq: 'valid' },
    control: 'text',
    description: 'Texte du message de succès',
    type: {
      value: 'string'
    },
    table: { category: 'message' }
  }
};

const fieldsetElementsData = (type) => {
  const elements = [];
  for (let i = 1; i < 4; i++) {
    elements.push({
      id: `${type}-${i}`,
      label: `Element ${i}`,
      name: type,
      value: i,
      ...((type === 'radio' || type === 'checkbox')) && { checked: (type === 'radio' || type === 'checkbox') && i === 2 },
      disabled: false,
      error: undefined,
      valid: undefined
    });
  }

  return elements;
};

const elementsArgTypes = {
  elementsType: {
    control: { type: 'select' },
    description: 'Type d\'élements de formulaire',
    options: ['input', 'radio', 'checkbox'],
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'elements' }
  },
  checkboxesData: {
    if: { arg: 'elementsType', eq: 'checkbox' },
    control: { type: 'object' },
    description: 'Paramètres des checkboxes',
    type: {
      value: 'array'
    },
    table: { category: 'elements' }
  },
  radiosData: {
    if: { arg: 'elementsType', eq: 'radio' },
    control: { type: 'object' },
    description: 'Paramètres des radios',
    type: {
      value: 'array'
    },
    table: { category: 'elements' }
  },
  inputsData: {
    if: { arg: 'elementsType', eq: 'input' },
    control: { type: 'object' },
    description: 'Paramètres des champs de saisie',
    type: {
      value: 'array'
    },
    table: { category: 'elements' }
  }
};

const formArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du formulaire',
    type: {
      value: 'string'
    },
    table: { category: 'attributes' }
  },
  legend: {
    control: 'text',
    description: 'Légende du formulaire',
    type: {
      value: 'string',
      required: true
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel sous la légende',
    type: {
      value: 'string'
    }
  },
  hideLegend: {
    control: 'boolean',
    description: 'Masque la légende (screan reader only)',
    type: {
      value: 'boolean'
    }
  },
  inline: {
    control: { type: 'boolean' },
    description: 'Eléments du formulaire en ligne',
    type: {
      value: 'boolean'
    }
  },
  disabled: {
    control: 'boolean',
    description: 'Désactive les éléments du formulaire',
    type: {
      value: 'boolean'
    }
  },
  ...elementsArgTypes,
  ...messageArgTypes
};

const formArgs = {
  legend: 'Légende du formulaire',
  hideLegend: false,
  elementsType: 'checkbox',
  checkboxesData: fieldsetElementsData('checkbox'),
  radiosData: fieldsetElementsData('radio'),
  inputsData: fieldsetElementsData('input'),
  inline: false,
  disabled: false,
  status: 'default',
  errorMessage: 'Texte d’erreur',
  validMessage: 'Texte de succès',
  id: 'storybook-form'
};

const formProps = (args) => {
  const form = {
    id: args.id || undefined,
    legend: {
      label: args.legend || formArgs.legend,
      sr: args.hideLegend || formArgs.hideLegend
    },
    hint: args.hint !== '' ? args.hint : undefined,
    choice: args.elementsType === 'radio' || args.elementsType === 'checkbox',
    inline: args.inline || formArgs.inline,
    disabled: args.disabled || formArgs.disabled,
    status: args.status || formArgs.status,
    error: args.status === 'error' ? args.errorMessage || formArgs.errorMessage : undefined,
    valid: args.status === 'valid' ? args.validMessage || formArgs.validMessage : undefined,
    elements: []
  };

  let dataElements = [];
  switch (args.elementsType) {
    case 'input':
      dataElements = args.inputsData || formArgs.inputsData;
      break;
    case 'radio':
      dataElements = args.radiosData || formArgs.radiosData;
      break;
    case 'checkbox':
      dataElements = args.checkboxesData || formArgs.checkboxesData;
      break;
  }

  for (const data of dataElements) {
    const element = {};
    element.type = args.elementsType;
    element.inline = form.inline;
    element.data = data;
    form.elements.push(element);
  }

  return form;
};

export { formArgTypes, formArgs, formProps };
