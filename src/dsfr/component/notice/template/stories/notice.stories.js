import { renderNotice } from './notice';
import { noticeArgs, noticeArgTypes, noticeProps } from './notice-arg-types';

const render = (args) => renderNotice({ notice: noticeProps(args) });

const commonArgs = {
  desc: 'Texte de description lorem ipsum sit consectetur adipiscing elit.',
  hasLink: true,
  blank: true,
  dismissible: true
};

export default {
  id: 'notice',
  title: 'DSFR/Component/Notice',
  render: render,
  argTypes: noticeArgTypes,
  args: noticeArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const InfoStory = {
  tags: ['!dev'],
  args: {
    type: 'info',
    title: 'Titre du bandeau d\'information importante',
    ...commonArgs
  }
};

export const WarningStory = {
  tags: ['!dev'],
  args: {
    type: 'warning',
    title: 'Titre du bandeau d\'avertissement',
    ...commonArgs
  }
};

export const AlertStory = {
  tags: ['!dev'],
  args: {
    type: 'alert',
    title: 'Titre du bandeau d\'alerte',
    ...commonArgs
  }
};

export const OrangeStory = {
  tags: ['!dev'],
  args: {
    type: 'weather-orange',
    title: 'Vigilance météo orange',
    desc: 'Texte de description lorem ipsum sit consectetur adipiscing elit.',
    hasLink: true,
    blank: true
  }
};

export const RedStory = {
  tags: ['!dev'],
  args: {
    type: 'weather-red',
    title: 'Vigilance météo rouge',
    ...commonArgs
  }
};

export const PurpleStory = {
  tags: ['!dev'],
  args: {
    type: 'weather-purple',
    title: 'Vigilance météo violette',
    ...commonArgs
  }
};

export const AttackStory = {
  tags: ['!dev'],
  args: {
    type: 'attack',
    title: 'Attentat en cours',
    ...commonArgs
  }
};

export const WitnessStory = {
  tags: ['!dev'],
  args: {
    type: 'witness',
    title: 'Appel à témoins',
    ...commonArgs
  }
};

export const CyberattackStory = {
  tags: ['!dev'],
  args: {
    type: 'cyberattack',
    title: 'Cyber-attaque',
    ...commonArgs
  }
};
