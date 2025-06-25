import { renderSidemenu } from './sidemenu';
import { sidemenuArgs, sidemenuArgTypes, sidemenuProps, getItemArgs } from './sidemenu-arg-types';

const render = args => renderSidemenu({ sidemenu: sidemenuProps(args) });

export default {
  id: 'sidemenu',
  title: 'DSFR/Component/Sidemenu',
  render: render,
  argTypes: sidemenuArgTypes,
  args: sidemenuArgs
};

export const SidemenuStory = {
  tags: ['autodocs'],
  args: {}
};

export const LinkSidemenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    items: [getItemArgs('01'), getItemArgs('02', 'link', true), getItemArgs('03')]
  }
};

export const SubmenuSidemenuStory = {
  tags: ['autodocs', '!dev'],
  args: {
    items: [
      {
        ...getItemArgs('sous-niveau 01', 'menu', true),
        items: [getItemArgs('1-1'), getItemArgs('1-2', 'link', true), getItemArgs('1-3')]
      },
      getItemArgs('sous-niveau 02'),
      getItemArgs('sous-niveau 03')
    ]
  }
};
