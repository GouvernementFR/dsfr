const getSegmentArgTypes = (id) => {
  const segment = {};

  const table = {
    table: {
      category: `segment${id}`
    }
  };

  segment[`label${id}`] = {
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string',
      required: true
    },
    ...table
  };

  segment[`href${id}`] = {
    control: 'text',
    description: 'URL du lien',
    type: {
      value: 'string'
    }
  };

  segment[`id${id}`] = {
    control: 'text',
    description: 'Attribut \'id\' du lien',
    type: {
      value: 'string'
    },
    ...table
  };

  return segment;
};

const breadcrumbArgTypes = {
  id: {
    control: 'text',
    description: 'Attribut \'id\' du collapse du fil d\'arianne',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'attributes'
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Tag html des boutons (default: a)',
    options: ['a', 'button']
  },
  segments: [
    getSegmentArgTypes(1),
    getSegmentArgTypes(2),
    getSegmentArgTypes(3),
    getSegmentArgTypes(4)
  ]
};

const getSegmentArgs = (id) => {
  const segment = {};

  segment.id = `segment-${id}`;
  segment.label = `Segment ${id}: lorem ipsum`;
  segment.href = '#';

  return segment;
};

const breadcrumbArgs = {
  id: 'breadcrumb',
  markup: 'a',
  segments: [
    {
      id: 'segment-0',
      label: 'Accueil',
      href: '/#'
    },
    getSegmentArgs(1),
    getSegmentArgs(2),
    getSegmentArgs(3)
  ]
};

const breadcrumbProps = (args) => {
  const segments = [];

  for (let i = 0; i < 4; i++) {
    const segmentArgs = args.segments[i];
    const segmentBreadcrumbArgs = breadcrumbArgs.segments[i];
    const link = {
      id: segmentArgs.id || undefined,
      label: segmentArgs.label || segmentBreadcrumbArgs.label,
      href: segmentArgs.href || segmentBreadcrumbArgs.href,
      markup: args.markup
    };

    segments.push(link);
  }

  const breadcrumb = {
    id: args.id || undefined,
    button: 'Voir le fil d\'arianne',
    segments: segments
  };

  return breadcrumb;
};

export { breadcrumbArgTypes, breadcrumbArgs, breadcrumbProps };
