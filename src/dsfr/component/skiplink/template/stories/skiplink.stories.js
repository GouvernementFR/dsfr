import { renderSkiplink } from './skiplink';
import { skiplinkArgs, skiplinkArgTypes, skiplinkProps } from './skiplink-arg-types';

const render = (args) => renderSkiplink({ skiplink: skiplinkProps(args) });

export default {
  id: 'skiplink',
  title: 'DSFR/Component/Skiplink',
  render: render,
  parameters: {
    docs: {
      description: {
        component: 'Appuyez sur la touche tab pour faire apparaitre les liens d\'évitement.'
      }
    }
  },
  argTypes: skiplinkArgTypes,
  args: skiplinkArgs
};

export const SkiplinkStory = {
  tags: ['autodocs'],
  args: {}
};
