const content = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>`;

const transcriptionArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant unique de la transcription',
    type: {
      value: 'string',
      required: true
    },
    table: { category: 'attributes' }
  },
  fullscreen: {
    control: 'text',
    description: 'Libellé du bouton plein écran',
    type: {
      value: 'string'
    }
  },
  fullscreenArialLabel: {
    control: 'text',
    description: 'Texte alternatif du bouton plein écran',
    type: {
      value: 'string'
    }
  },
  isExpanded: {
    control: 'boolean',
    description: 'Transcription ouverte par défaut',
    type: {
      value: 'string'
    }
  }
};

const transcriptionArgs = {
  fullscreen: 'Agrandir',
  fullscreenArialLabel: 'Agrandir la transcription',
  isExpanded: false,
  id: 'transcription-id'
};

const transcriptionProps = (args) => {
  const transcription = {
    id: args.id || transcriptionArgs.id,
    isExpanded: args.isExpanded || transcriptionArgs.isExpanded,
    fullscreen: args.fullscreen || transcriptionArgs.fullscreen,
    fullscreenArialLabel: args.fullscreenArialLabel || transcriptionArgs.fullscreenArialLabel,
    content: content
  };

  return transcription;
};

export { transcriptionArgTypes, transcriptionArgs, transcriptionProps };
