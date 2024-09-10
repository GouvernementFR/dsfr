const stepperArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' de l\'indicateur d\'étapes',
    type: {
      value: 'string'
    }
  },
  title: {
    control: 'text',
    description: 'Titre de l\'indicateur d\'étapes',
    type: {
      value: 'string',
      required: true
    }
  },
  nextStep: {
    control: 'text',
    description: 'Titre de la prochaine étape',
    type: {
      value: 'string',
      required: true
    }
  },
  currentStep: {
    control: 'number',
    description: 'Numéro de l\'étape courrante',
    type: {
      value: 'integer',
      required: true
    }
  },
  stepCount: {
    control: 'number',
    description: 'Nombre d\'étapes',
    type: {
      value: 'integer',
      required: true
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML',
    options: ['h2', 'h3', 'h4', 'h5']
  }
};

const stepperArgs = {
  id: 'stepper-id',
  title: 'Titre de l’étape en cours',
  nextStep: 'Titre de l’étape suivante',
  currentStep: 1,
  stepCount: 3,
  markup: 'h2'
};

const stepperProps = (args) => {
  const stepper = {
    id: args.id || undefined,
    title: args.title || stepperArgs.title,
    nextStep: args.nextStep || stepperArgs.nextStep,
    currentStep: args.currentStep || stepperArgs.currentStep,
    stepCount: args.stepCount || stepperArgs.stepCount,
    markup: args.markup || stepperArgs.markup
  };

  return stepper;
};

export { stepperArgTypes, stepperArgs, stepperProps };