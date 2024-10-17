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

export const FollowStory = {
  args: {}
};

export const SocialsStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSocials: true
  }
};

export const NewsletterButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasNewsletter: true,
    newsletterType: 'button'
  }
};

export const NewsletterFormStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasNewsletter: true,
    newsletterType: 'form'
  }
};

export const SocialsNewsletterButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'button'
  }
};

export const SocialsNewsletterFormStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form'
  }
};

export const SocialsNewsletterFormErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form',
    newsletterFormInputhasError: true
  }
};

export const SocialsNewsletterConfirmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'alert'
  }
};
