import { inputsGroupArgs, inputsGroupArgTypes, inputsGroupProps } from './inputs-group-arg-types';
import { renderFieldset } from '../../../../form/template/stories/fieldset';
import { uniqueId } from '../../../../../core/template/stories/unique-id';

const render = (args) => renderFieldset({ fieldset: inputsGroupProps(args) });

export default {
  id: 'inputs-group',
  title: 'DSFR/Component/Input/Inputs-Group',
  render: render,
  argTypes: inputsGroupArgTypes,
  args: inputsGroupArgs
};

const inputsData = (id, count = 3) => {
  const inputs = [];
  for (let i = 0; i < count; i++) {
    inputs.push(
      {
        label: `Libellé ${i}`,
        id: `${id}-${i}`,
        name: `input${i}`,
        hint: '',
        disabled: false
      }
    );
  }
  return inputs;
};

export const InputsGroupStory = {
  tags: ['!autodocs'],
  args: {
    inputs: inputsData(uniqueId('input'))
  }
};

export const DefaultGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inputs: inputsData(uniqueId('input'))
  }
};

export const InlineGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    inputs: inputsData(uniqueId('input'))
  }
};

export const InlineMDStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'Passe en inline à partir du breakpoint MD'
      }
    }
  },
  args: {
    inline: 'md',
    inputs: inputsData(uniqueId('input'))
  }
};

export const SizeModifiersStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'Il existe plusieurs modificateurs de tailles : <br> - `fr-fieldset__element--inline-grow` : grandit au maximum <br> - `fr-fieldset__element--number` : taille d\'un petit nombre (80px) <br> - `fr-fieldset__element--postal` : taille d\'un code postal (240px) <br> - `fr-fieldset__element--year` : taille d\'une année (112px)'
      }
    }
  },
  args: {
    inputs: [
      {
        id: `input-${uniqueId('input')}-0`,
        label: 'Numéro',
        name: 'street-number',
        modifier: 'number',
        inline: true
      },
      {
        id: `input-${uniqueId('input')}-1`,
        label: 'Rue',
        name: 'street-name',
        inline: true,
        grow: true
      },
      {
        id: `input-${uniqueId('input')}-2`,
        label: 'Code postal',
        name: 'street-name',
        modifier: 'postal'
      },
      {
        id: `input-${uniqueId('input')}-3`,
        label: 'Année',
        name: 'year',
        modifier: 'year'
      }
    ],
    elementsType: 'input'
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true,
    inputs: inputsData(uniqueId('input'))
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    inputs: inputsData(uniqueId('input'))
  }
};

export const SuccessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    inputs: inputsData(uniqueId('input'))
  }
};
