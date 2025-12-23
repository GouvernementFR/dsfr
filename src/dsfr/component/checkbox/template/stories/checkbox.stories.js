import { checkboxArgs, checkboxArgTypes, checkboxProps } from './checkbox-arg-types';
import { renderCheckbox } from './checkbox';

const render = (args) => renderCheckbox({ checkbox: checkboxProps(args) });

export default {
  id: 'checkbox',
  title: 'DSFR/Component/Checkbox',
  render: render,
  argTypes: checkboxArgTypes,
  args: checkboxArgs
};

export const CheckboxStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'checkbox-default'
  }
};

export const IndeterminateStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'checkbox-indeterminate'
  },
  decorators: [
    (Story) => {
      const script = document.createElement('script');
      script.src = '/js/checkbox/init-indeterminate.js';
      script.type = 'module';
      document.head.appendChild(script);

      return Story();
    }
  ]
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'checkbox-sm',
    size: 'sm'
  }
};
