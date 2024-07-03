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
    description: 'Attribut \'id\' de l\'accordéon',
    type: {
      value: 'string'
    }
  },
  buttonLabel: {
    control: 'text',
    description: 'Libellé du bouton d\'ouverture en mobile',
    type: {
      value: 'string',
      required: true
    }
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

  segment[`id${id}`] = `segment-${id}`;
  segment[`label${id}`] = `Segment ${id}: lorem ipsum`;
  let href = '';
  for (let i = 1; i <= id; i++) {
    href += `/segment${i}`;
  }
  segment[`href${id}`] = href;

  return segment;
};

const breadcrumbArgs = {
  id: '',
  buttonLabel: 'Voir le fil d\'arianne',
  segments: [
    getSegmentArgs(1),
    getSegmentArgs(2),
    getSegmentArgs(3),
    getSegmentArgs(4)
  ]
};

const breadcrumbProps = (args) => {
  const segments = [];

  for (let i = 0; i < 4; i++) {
    const segmentArgs = args.segments[i];
    const segmentBreadcrumbArgs = breadcrumbArgs.segments[i];
    const link = {
      id: Object.values(segmentArgs)[0] || undefined,
      label: Object.values(segmentArgs)[1] || Object.values(segmentBreadcrumbArgs)[1],
      href: Object.values(segmentArgs)[2] || Object.values(segmentBreadcrumbArgs)[2]
    };

    segments.push(link);
  }

  const breadcrumb = {
    id: args.id || undefined,
    button: args.buttonLabel || breadcrumbArgs.buttonLabel,
    segments: segments
  };

  console.log(breadcrumb)

  return breadcrumb;
};

export { breadcrumbArgTypes, breadcrumbArgs, breadcrumbProps };
