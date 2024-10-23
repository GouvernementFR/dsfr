import { renderLink } from './link';
import { linkArgs, linkArgTypes, linkProps } from './link-arg-types';

const render = (args) => renderLink({ link: linkProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'link',
  title: 'DSFR/Component/Link',
  render: render,
  argTypes: linkArgTypes,
  args: linkArgs
};

export const LinkStory = {
  args: {}
};

export const IconStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hasIcon: true,
      icon: 'arrow-left-line',
      iconPlace: 'left'
    },
    {
      hasIcon: true,
      icon: 'arrow-right-line',
      iconPlace: 'right'
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

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true
  }
};

export const DownloadStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Télécharger le document lorem ipsum sit dolores amet',
    href: 'img/image.jpg',
    download: true,
    detail: 'JPG – 61,88 ko'
  }
};

export const ExternalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    blank: true
  }
};

export const BackToTopStory = {
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Haut de page',
    href: '#top',
    hasIcon: true,
    icon: 'arrow-up-fill',
    iconPlace: 'left'
  }
};
