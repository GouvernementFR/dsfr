import { renderLogo } from './logo';
import { logoArgs, logoArgTypes, logoProps } from './logo-arg-types';

const render = (args) => renderLogo({ logo: logoProps(args) });

export default {
  id: 'logo',
  title: 'DSFR/Component/Logo',
  render: render,
  argTypes: logoArgTypes,
  args: logoArgs
};

export const LogoStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md'
  }
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg'
  }
};

export const RepubliqueFrançaiseStory = {
  tags: ['autodocs', '!dev'],
  args: {
    title: 'République <br>Française'
  }
};

export const LongStory = {
  tags: ['autodocs', '!dev'],
  args: {
    title: 'Secrétaire d’État <br>chargé(e) de <br>l’égalité entre les <br>femmes et les <br>hommes et de la <br>lutte contre les <br>discriminations'
  }
};
