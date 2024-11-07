import svg from '../../../../core/example/media/sample/svg.ejs?raw';

const contentArgTypes = {
  size: {
    control: { type: 'select' },
    description: 'Taille du contenu média',
    options: ['sm', 'md', 'lg']
  },
  caption: {
    control: 'text',
    description: 'Texte de description ou source',
    type: {
      value: 'string'
    }
  },
  hasLink: {
    control: 'boolean',
    description: 'Ajoute un lien à la suite du texte de description'
  },
  linkLabel: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'Libellé du lien',
    type: {
      value: 'string'
    }
  },
  linkHref: {
    if: { arg: 'hasLink', eq: true },
    control: 'text',
    description: 'URL de destination du lien',
    type: {
      value: 'string'
    }
  },
  type: {
    control: { type: 'select' },
    description: 'Type de contenu',
    options: ['img', 'svg', 'video']
  },
  imgRatio: {
    if: { arg: 'type', eq: 'img' },
    control: { type: 'select' },
    description: 'Ratio de l’image',
    options: ['32x9', '16x9', '3x2', '4x3', '1x1', '3x4', '2x3']
  },
  vidRatio: {
    if: { arg: 'type', eq: 'video' },
    control: { type: 'select' },
    description: 'Ratio de la vidéo',
    options: ['16x9', '4x3', '1x1']
  },
  img: {
    if: { arg: 'type', eq: 'img' },
    control: { type: 'object' },
    description: 'Image',
    table: { disable: true }
  },
  svg: {
    if: { arg: 'type', eq: 'svg' },
    control: { type: 'object' },
    description: 'SVG',
    table: { disable: true }
  },
  vid: {
    if: { arg: 'type', eq: 'video' },
    control: { type: 'object' },
    description: 'Vidéo',
    table: { disable: true }
  }
};

const contentArgs = {
  size: 'md',
  caption: 'Description / Source',
  hasLink: false,
  linkLabel: 'Libellé du lien',
  linkHref: '#',
  type: 'img',
  imgRatio: '16x9',
  vidRatio: '16x9',
  img: {
    src: 'img/placeholder.16x9.png',
    alt: 'unknown'
  },
  vid: {
    src: 'https://www.youtube.com/embed/HyirpmPL43I',
    title: '[À MODIFIER - titre de la vidéo]',
    attributes: {
      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: ''
    }
  },
  svg: svg
};

const contentProps = (args) => {
  const content = {
    size: args.size || contentArgs.size,
    caption: args.caption || contentArgs.caption
  };

  if (args.hasLink) {
    content.link = {
      label: args.linkLabel || contentArgs.linkLabel,
      href: args.linkHref || contentArgs.linkHref
    };
  }

  switch (args.type) {
    case 'img':
      content.img = args.img || contentArgs.img;
      content.img.ratio = args.imgRatio || contentArgs.imgRatio;
      content.img.classes = args.classes || contentArgs.classes;
      break;
    case 'svg':
      content.svg = args.svg || contentArgs.svg;
      break;
    case 'video':
      content.vid = args.vid || contentArgs.vid;
      content.vid.ratio = args.vidRatio || contentArgs.vidRatio;
      break;
    default:
      break;
  }

  return content;
};

export { contentArgTypes, contentArgs, contentProps };
