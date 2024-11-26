import { renderTranscription } from './transcription';
import { transcriptionArgs, transcriptionArgTypes, transcriptionProps } from './transcription-arg-types';

const render = (args) => renderTranscription({ transcription: transcriptionProps(args) });

export default {
  id: 'transcription',
  title: 'DSFR/Component/Transcription',
  render: render,
  argTypes: transcriptionArgTypes,
  args: transcriptionArgs
};

export const TranscriptionStory = {
  tags: ['autodocs'],
  args: {}
};
