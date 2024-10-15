import ejsRenderer from '../../../../renderer.js';

const renderTranscription = (data) => ejsRenderer.render('transcription', data);

export { renderTranscription };
