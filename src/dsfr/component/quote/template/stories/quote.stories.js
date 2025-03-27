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

export const QuoteStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {}
};

export const AuthorlessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasAuthor: false
  }
};

export const SourcelessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    sources: []
  }
};

export const ImagelessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    hasImage: false
  }
};

export const AccentStory = {
  tags: ['autodocs', '!dev'],
  args: {
    accent: 'green-menthe'
  }
};
