import { uniqueId } from '../../../../core/template/stories/unique-id';
import { renderForm } from './form';
import { formArgs, formArgTypes, formProps, fieldsetElementsData } from './form-arg-types';
import { renderMessage } from './message';

const render = (args) => renderForm({ form: formProps(args) });
const renderOnlyMessage = (args) => renderMessage({ message: args });
const renderOnlyMessages = (argsArray) => argsArray.map(args => renderOnlyMessage(args)).join('\n\n');

export default {
  id: 'form',
  title: 'DSFR/Component/Form',
  render: render,
  argTypes: formArgTypes,
  args: formArgs
};

export const FormStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    elementsType: 'input',
    inputsData: fieldsetElementsData('input', uniqueId('input'))
  }
};

export const InlineStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    elementsType: 'input',
    inputsData: fieldsetElementsData('input', uniqueId('input'))
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
    elementsType: 'input',
    inputsData: fieldsetElementsData('input', uniqueId('input'))
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
    inputsData: [
      {
        id: `input-${uniqueId('input')}-1`,
        label: 'Numéro',
        name: 'street-number',
        modifier: 'number',
        inline: true
      },
      {
        id: `input-${uniqueId('input')}-2`,
        label: 'Rue',
        name: 'street-name',
        inline: true,
        grow: true
      },
      {
        id: `input-${uniqueId('input')}-3`,
        label: 'Code postal',
        name: 'street-name',
        modifier: 'postal'
      },
      {
        id: `input-${uniqueId('input')}-4`,
        label: 'Année',
        name: 'year',
        modifier: 'year'
      }
    ],
    elementsType: 'input'
  }
};

export const ValidStory = {
  tags: ['autodocs', '!dev'],
  args: {
    elementsType: 'input',
    inputsData: fieldsetElementsData('input', uniqueId('input')),
    status: 'valid'
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    elementsType: 'input',
    inputsData: fieldsetElementsData('input', uniqueId('input')),
    status: 'error'
  }
};

export const MessagesStandaloneStory = {
  tags: ['autodocs', '!dev'],
  render: () => renderOnlyMessages([
    {
      type: 'error',
      text: 'Message d\'erreur'
    },
    {
      type: 'warning',
      text: 'Message d\'avertissement'
    },
    {
      type: 'info',
      text: 'Message d\'information'
    },
    {
      type: 'valid',
      text: 'Message de succès'
    }
  ])
};
