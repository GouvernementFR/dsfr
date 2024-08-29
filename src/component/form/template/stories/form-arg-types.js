const fieldsetElementsData = (type, inline) => {
  const elements = [];
  for (let i = 1; i < 4; i++) {
    elements.push({
      type: type,
      inline: inline || null,
      data: {
        id: `${type}-${i}`,
        label: `Element ${i}`,
        name: type,
        value: i,
        checked: (type === 'radio' || type === 'checkbox') && i === 2
      }
    });
  }

  return elements;
};

const formArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut id du formulaire',
    type: {
      value: 'string'
    }
  },
  legend: {
    control: 'text',
    description: 'Légende du formulaire',
    type: {
      value: 'string'
    }
  },
  hint: {
    control: 'text',
    description: 'Texte additionnel sous la légende',
    type: {
      value: 'string'
    }
  },
  type: {
    control: { type: 'select' },
    description: 'Type de formulaire',
    options: ['input', 'radio', 'checkbox', 'upload', 'button'],
    type: {
      value: 'string',
      required: true
    }
  },
  inline: {
    control: { type: 'boolean' },
    description: 'Eléments en ligne',
    type: {
      value: 'boolean'
    }
  }
};

const formArgs = {
  id: 'storybook-form',
  legend: 'Légende du formulaire',
  hint: 'texte de description additionnel',
  type: 'input',
  inline: true
};

const formProps = (args) => {
  const form = {
    id: args.id || undefined,
    legend: args.legend || formArgs.legend,
    hint: args.hint || formArgs.hint,
    choice: args.type === 'radio' || args.type === 'checkbox'
  };

  form.elements = fieldsetElementsData(args.type, args.inline);

  return form;
};

export { formArgTypes, formArgs, formProps };
