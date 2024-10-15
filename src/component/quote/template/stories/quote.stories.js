import { renderQuote } from './quote';
import { quoteArgs, quoteArgTypes, quoteProps } from './quote-arg-types';

const render = (args) => renderQuote({ quote: quoteProps(args) });

export default {
  id: 'quote',
  title: 'DSFR/Component/Quote',
  render: render,
  argTypes: quoteArgTypes,
  args: quoteArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const AuthorlessStory = {
  tags: ['!dev'],
  args: {
    author: null
  }
};

export const SourcelessStory = {
  tags: ['!dev'],
  args: {
    sources: []
  }
};

export const ImagelessStory = {
  tags: ['!dev'],
  args: {
    image: null
  }
};

export const AccentStory = {
  tags: ['!dev'],
  args: {
    accent: 'green-menthe'
  }
};
