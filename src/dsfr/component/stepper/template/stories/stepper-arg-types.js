const stepperArgTypes = {
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
  stepCount: {
    description: 'Nombre d\'étapes',
    control: {
      type: 'number',
      min: 2,
      max: 8
    },
    type: {
      required: true
    }
  },
  currentStep: {
    description: 'Numéro de l\'étape courante',
    control: {
      type: 'number',
      min: 2,
      max: 8
    },
    type: {
      required: true
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML du titre',
    options: ['h2', 'h3', 'h4', 'h5', 'h6', 'p']
  }
};

const stepperArgs = {
  title: 'Titre de l’étape en cours',
  nextStep: 'Titre de l’étape suivante',
  stepCount: 3,
  currentStep: 1,
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
