import { uploadArgs, uploadArgTypes, uploadProps } from './upload-arg-types';
import { renderUpload } from './upload';

const render = (args) => renderUpload({ upload: uploadProps(args) });

export default {
  id: 'upload',
  title: 'DSFR/Component/Upload',
  render: render,
  argTypes: uploadArgTypes,
  args: uploadArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
