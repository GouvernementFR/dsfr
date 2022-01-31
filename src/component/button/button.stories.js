// Button.stories.js|jsx

export default {
  title: 'Composant/Bouton (button)',
  argTypes: {
    label: { control: 'text' },
    size: {
      options: ['default', 'SM', 'LG'],
      control: { type: 'select' }
    }
  }
};

const sizeClass = {
  default: '',
  SM: 'fr-btn--sm',
  LG: 'fr-btn--lg'
};

const buttonTemplate = async (args) => {
  return `<button class="fr-btn ${sizeClass[args.size]}">
      ${args.label}
    </button>`;
};
export const BoutonSimple = buttonTemplate.bind({});
BoutonSimple.args = {
  label: 'Label bouton',
  size: 'default'
};
