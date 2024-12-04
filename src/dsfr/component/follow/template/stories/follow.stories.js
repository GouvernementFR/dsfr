import { renderFollow } from './follow';
import { followArgs, followArgTypes, followProps } from './follow-arg-types';
import { uniqueId } from '../../../../core/template/stories/unique-id';

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
    id: uniqueId('follow'),
    hasNewsletter: true,
    newsletterType: 'button',
    newsletterButtonId: uniqueId('newsletter-button')
  }
};

export const NewsletterFormStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('follow'),
    hasNewsletter: true,
    newsletterType: 'form',
    newsletterFormInputId: uniqueId('newsletter-input'),
    newsletterFormButtonId: uniqueId('newsletter-button')
  }
};

export const SocialsNewsletterButtonStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('follow'),
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'button',
    newsletterButtonId: uniqueId('newsletter-button')
  }
};

export const SocialsNewsletterFormStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('follow'),
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form',
    newsletterFormInputId: uniqueId('newsletter-input'),
    newsletterFormButtonId: uniqueId('newsletter-button')
  }
};

export const SocialsNewsletterFormErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('follow'),
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'form',
    newsletterFormInputhasError: true,
    newsletterFormInputId: uniqueId('newsletter-input'),
    newsletterFormButtonId: uniqueId('newsletter-button')
  }
};

export const SocialsNewsletterConfirmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('follow'),
    hasSocials: true,
    hasNewsletter: true,
    newsletterType: 'alert',
    newsletterAlertId: uniqueId('newsletter-alert')
  }
};
