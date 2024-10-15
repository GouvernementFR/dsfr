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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const PrimaryStory = {
  tags: ['!dev'],
  args: {
    kind: 1
  }
};

export const SecondaryStory = {
  tags: ['!dev'],
  args: {
    kind: 2
  }
};

export const TertiaryStory = {
  tags: ['!dev'],
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
  tags: ['!dev'],
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
  tags: ['!dev'],
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
  tags: ['!dev'],
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
  tags: ['!dev'],
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

export const SizeStory = {
  tags: ['!dev'],
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
  tags: ['!dev'],
  args: {
    label: 'Fermer',
    classes: ['fr-btn--close']
  }
};

export const BtnDisplayStory = {
  tags: ['!dev'],
  args: {
    label: 'Paramètres d\'affichage',
    classes: ['fr-btn--display']
  }
};

export const BtnTeamStory = {
  tags: ['!dev'],
  args: {
    label: 'Contact',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--team']
  }
};

export const BtnBriefcaseStory = {
  tags: ['!dev'],
  args: {
    label: 'Espace recruteur',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--briefcase']
  }
};

export const BtnAccountStory = {
  tags: ['!dev'],
  args: {
    label: 'Espace particulier',
    markup: 'a',
    href: '[URL - à modifier]',
    classes: ['fr-btn--account']
  }
};
