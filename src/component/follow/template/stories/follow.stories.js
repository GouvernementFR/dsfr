import { renderFollow } from './follow';
import { followArgs, followArgTypes, followProps } from './follow-arg-types';

const render = (args) => renderFollow({ follow: followProps(args) });

export default {
  id: 'follow',
  title: 'DSFR/Component/Follow',
  render: render,
  argTypes: followArgTypes,
  args: followArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SocialsStory = {
  tags: ['!dev'],
  args: {
    hasSocials: true
  }
};

export const NewsletterButtonStory = {
  tags: ['!dev'],
  args: {
    hasNewsletter: true,
    newsletterType: 'button'
  }
};

export const NewsletterFormStory = {
  tags: ['!dev'],
  args: {
    hasNewsletter: true,
    newsletterType: 'form'
  }
};

export const SocialsNewsletterButtonStory = {
  tags: ['!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'button'
  }
};

export const SocialsNewsletterFormStory = {
  tags: ['!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form'
  }
};

export const SocialsNewsletterFormErrorStory = {
  tags: ['!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form',
    newsletterFormInputhasError: true
  }
};

export const SocialsNewsletterConfirmStory = {
  tags: ['!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'alert'
  }
};
