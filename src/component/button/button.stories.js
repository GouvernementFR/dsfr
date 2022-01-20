// Button.stories.js|jsx

export default {
  title: 'Composant/Bouton (button)',
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['', 'SM', 'LG'],
      control: { type: 'select' },
    },
  },
};

const sizeClass = {
  default: '',
  SM: 'fr-btn--sm',
  LG: 'fr-btn--lg'
};

//👇 Some function to demonstrate the behavior
// const someFunction = (size) => {};

const buttonTemplate = (args) => {
  // Assigns the function result to a variable
  // const someFunctionResult = someFunction(args.size);
  return `<button class="fr-btn ${sizeClass[args.size]}">
      ${args.label}
    </button>`;
};
export const BoutonSimple = buttonTemplate.bind({});
BoutonSimple.args = {
  label: 'Label bouton',
  size: '',
};
