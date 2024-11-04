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
  args: {}
};

export const AuthorlessStory = {
  tags: ['autodocs', '!dev'],
  args: {
    author: null
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
    image: null
  }
};

export const AccentStory = {
  tags: ['autodocs', '!dev'],
  args: {
    accent: 'green-menthe'
  }
};
