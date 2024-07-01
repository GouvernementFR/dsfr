import { renderUpload } from './upload';
import { uploadArgs, uploadArgTypes, uploadProps } from './upload-arg-types';

const render = (args) => renderUpload({ upload: uploadProps(args) });

export default {
  id: 'upload',
  title: 'DSFR/Component/Upload',
  render: render,
  argTypes: uploadArgTypes,
  args: uploadArgs
};

export const ControlsStory = {
  // tags: ['!dev'],
  args: {}
};

// export const DefaultStory = {
//   tags: ['!dev'],
//   args: {}
// };

// export const DisabledStory = {
//   tags: ['!dev'],
//   args: {
//     disabled: true
//   }
// };

// export const MultipleStory = {
//   tags: ['!dev'],
//   args: {
//     disabled: true
//   }
// };
