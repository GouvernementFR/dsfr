import { radiosGroupArgs, radiosGroupArgTypes, radiosGroupProps, getRadiosGroupData } from './radios-group-arg-types';
import { renderFieldset } from '../../../form/template/stories/fieldset';

const render = (args) => renderFieldset({ fieldset: radiosGroupProps(args) });

export default {
  id: 'radios-group',
  title: 'DSFR/Component/Radio/Radios-Group',
  render: render,
  argTypes: radiosGroupArgTypes,
  args: radiosGroupArgs
};

export const RadiosGroupStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    elements: getRadiosGroupData()
  }
};

export const HintStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    disabled: true,
    elements: getRadiosGroupData()
  }
};

export const StatusValidStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'valid',
    elements: getRadiosGroupData()
  }
};

export const StatusErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    status: 'error',
    elements: getRadiosGroupData()
  }
};

export const SizeMDGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md',
    elements: getRadiosGroupData()
  }
};

export const SizeSMGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getRadiosGroupData()
  }
};

export const InlineGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true,
    elements: getRadiosGroupData()
  }
};

export const RadiosRichGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    elements: getRadiosGroupData()
  }
};

export const RadiosRichHintGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
};

export const RadiosRichInlineGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    inline: true,
    elements: getRadiosGroupData()
  }
};

export const RadiosRichInlineHintGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    inline: true,
    hint: 'Texte de description additionnel',
    elements: getRadiosGroupData()
  }
};

export const RadiosRichNoImageGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    elements: getRadiosGroupData()
  }
};

export const RadiosRichNoImageInlineGroupStory = {
  tags: ['autodocs', '!dev'],
  args: {
    rich: true,
    hasPictogram: false,
    inline: true,
    elements: getRadiosGroupData()
  }
};
