// Button.stories.js|jsx

export default {
  title: 'Composant/Bouton (button)',
  argTypes: {
    label: { control: 'text' },
    title: { control: 'text' },
    size: {
      options: ['default', 'SM', 'LG'],
      control: { type: 'select' }
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    disabled: { control: 'boolean' },
    iconName: {
      options: ['none', 'checkbox-circle-line', 'checkbox-circle-fill'],
      control: { type: 'select' }
    },
    iconPlace: {
      options: ['standalone', 'left', 'right'],
      control: { type: 'select' }
    }
  }
};

const sizeClass = {
  default: '',
  SM: 'fr-btn--sm',
  LG: 'fr-btn--lg'
};

const variantClass = {
  primary: '',
  secondary: 'fr-btn--secondary'
};

const iconNameClass = {
  none: '',
  'checkbox-circle-line': 'fr-fi-checkbox-circle-line',
  'checkbox-circle-fill': 'fr-fi-checkbox-circle-fill'
};

const iconPlaceClass = {
  standalone: '',
  left: 'fr-btn--icon-left',
  right: 'fr-btn--icon-right'
};

const buttonTemplate = (args) => {
  return `<button class="fr-btn ${sizeClass[args.size]} ${variantClass[args.variant]} ${
    args.iconName ? iconNameClass[args.iconName] : ''
  } ${
    args.iconPlace ? iconPlaceClass[args.iconPlace] : ''
  }" ${args.disabled ? 'disabled' : ''} title="${args.title}">
      ${args.label}
    </button>`;
};
export const BoutonSimple = buttonTemplate.bind({});
BoutonSimple.args = {
  label: 'Label bouton',
  title: 'title bouton',
  disabled: false,
  variant: 'primary',
  size: 'default',
  iconName: 'none'
};

const buttonGroupeTemplate = (args) => {
  return `<ul class="fr-btns-group">
  <li>
    ${buttonTemplate(args)}
  </li>
  <li>
    ${buttonTemplate(args)}
  </li>
  <li>
    ${buttonTemplate(args)}
  </li>
</ul>`;
};
export const BoutonGroupe = buttonGroupeTemplate.bind({});
BoutonGroupe.args = {
  label: 'Label bouton',
  title: 'title bouton',
  disabled: false,
  variant: 'primary',
  size: 'default',
  iconName: 'none'
};
