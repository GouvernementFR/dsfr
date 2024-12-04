import { renderButtonsGroup } from './button';
import { buttonsGroupArgs, buttonsGroupArgTypes, buttonsGroupProps } from './buttons-group-arg-types';

const render = (args) => renderButtonsGroup({ buttonsGroup: buttonsGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'buttons-group',
  title: 'DSFR/Component/Button/Buttons-Group',
  render: render,
  argTypes: buttonsGroupArgTypes,
  args: buttonsGroupArgs
};

export const ButtonsGroupStory = {
  args: {}
};

export const VerticalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    buttons: [
      {
        label: 'libellé du bouton 1',
        kind: 1,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 2',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      }
    ]
  }
};

export const HorizontalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [
      {
        label: 'libellé du bouton 1',
        kind: 1,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 2',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      }
    ]
  }
};

export const SizesStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      inline: true,
      buttons: [
        {
          label: 'libellé du bouton sm 1',
          kind: 1,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton sm 2',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton sm 3',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        }
      ]
    },
    {
      size: 'md',
      inline: true,
      buttons: [
        {
          label: 'libellé du bouton md 1',
          kind: 1,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton md 2',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton md 3',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        }
      ]
    },
    {
      size: 'lg',
      inline: true,
      buttons: [
        {
          label: 'libellé du bouton lg 1',
          kind: 1,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton lg 2',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        },
        {
          label: 'libellé du bouton lg 3',
          kind: 2,
          disabled: false,
          id: '',
          title: ''
        }
      ]
    }
  ])
};

export const PrimaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [
      {
        label: 'libellé du bouton 1',
        kind: 1,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 2',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 3',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      }
    ]
  }
};

export const SecondaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [
      {
        label: 'libellé du bouton 1',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 2',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 3',
        kind: 2,
        disabled: false,
        id: '',
        title: ''
      }
    ]
  }
};

export const TertiaryStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    buttons: [
      {
        label: 'libellé du bouton 1',
        kind: 4,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 2',
        kind: 4,
        disabled: false,
        id: '',
        title: ''
      },
      {
        label: 'libellé du bouton 3',
        kind: 3,
        disabled: false,
        id: '',
        title: ''
      }
    ]
  }
};
