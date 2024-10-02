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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const IconStory = {
  tags: ['!dev'],
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

export const DisabledStory = {
  tags: ['!dev'],
  args: {
    disabled: true
  }
};

export const DownloadStory = {
  tags: ['!dev'],
  args: {
    label: 'Télécharger le document lorem ipsum sit dolores amet',
    href: 'img/image.jpg',
    download: true,
    detail: 'JPG – 61,88 ko'
  }
};

export const ExternalStory = {
  tags: ['!dev'],
  args: {
    blank: true
  }
};
