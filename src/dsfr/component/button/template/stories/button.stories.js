import { renderButton } from './button';
import { buttonArgs, buttonArgTypes, buttonProps } from './button-arg-types';

const render = (args) => renderButton({ button: buttonProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'button',
  title: 'DSFR/Component/Button',
  render: render,
  argTypes: buttonArgTypes,
  args: buttonArgs
};

export const ButtonStory = {
  args: {}
};

export const PrimaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    kind: 1
  }
};

export const SecondaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    kind: 2
  }
};

export const TertiaryStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      kind: 3
    },
    {
      kind: 4
    }
  ])
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      kind: 1,
      disabled: true
    },
    {
      kind: 2,
      disabled: true
    },
    {
      kind: 3,
      disabled: true
    },
    {
      kind: 4,
      disabled: true
    }
  ])
};

export const IconLeftStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      kind: 1,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'left'
    },
    {
      kind: 2,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'left'
    },
    {
      kind: 3,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'left'
    },
    {
      kind: 4,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'left'
    }
  ])
};

export const IconRightStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      kind: 1,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'right'
    },
    {
      kind: 2,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'right'
    },
    {
      kind: 3,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'right'
    },
    {
      kind: 4,
      hasIcon: true,
      icon: 'checkbox-line',
      iconPlace: 'right'
    }
  ])
};

export const IconOnlyStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      kind: 1,
      hasIcon: true,
      icon: 'checkbox-line'
    },
    {
      kind: 2,
      hasIcon: true,
      icon: 'checkbox-line'
    },
    {
      kind: 3,
      hasIcon: true,
      icon: 'checkbox-line'
    },
    {
      kind: 4,
      hasIcon: true,
      icon: 'checkbox-line'
    }
  ])
};

export const SizesStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'md'
    },
    {
      size: 'lg'
    }
  ])
};

export const BtnCloseStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Fermer',
    classes: ['fr-btn--close']
  }
};

export const BtnDisplayStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Paramètres d\'affichage',
    classes: ['fr-btn--display']
  }
};

export const BtnTeamStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Contact',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--team']
  }
};

export const BtnBriefcaseStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Espace recruteur',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--briefcase']
  }
};

export const BtnAccountStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Espace particulier',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--account']
  }
};
