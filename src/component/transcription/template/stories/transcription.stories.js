import { renderTranscription } from './transcription';
import { transcriptionArgs, transcriptionArgTypes, transcriptionProps } from './transcription-arg-types';

const render = (args) => renderTranscription({ transcription: { ...transcriptionProps(args), attributes: { style: 'margin-bottom: 300px' } } });

export default {
  id: 'transcription',
  title: 'DSFR/Component/Transcription',
  render: render,
  argTypes: transcriptionArgTypes,
  args: transcriptionArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};
