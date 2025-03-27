import { uploadArgs, uploadArgTypes, uploadProps } from './upload-arg-types';
import { renderUpload } from './upload';
import { uniqueId } from '../../../../core/template/stories/unique-id';

const render = (args) => renderUpload({ upload: uploadProps(args) });

export default {
  id: 'upload',
  title: 'DSFR/Component/Upload',
  render: render,
  argTypes: uploadArgTypes,
  args: uploadArgs
};

export const UploadStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('upload')
  }
};

export const MultipleStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('upload'),
    multiple: true,
    label: 'Ajouter des fichiers'
  }
};

export const DisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('upload'),
    disabled: true
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('upload'),
    status: 'error'
  }
};

export const ValidStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('upload'),
    status: 'valid'
  }
};
