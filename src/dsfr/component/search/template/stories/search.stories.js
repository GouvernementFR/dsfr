import { renderSearch } from './search';
import { searchArgs, searchArgTypes, searchProps } from './search-arg-types';

const render = (args) => renderSearch({ search: searchProps(args) });

export default {
  id: 'search',
  title: 'DSFR/Component/Search',
  render: render,
  argTypes: searchArgTypes,
  args: searchArgs
};

export const SearchStory = {
  tags: ['!autodocs'],
  args: {}
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'search-md',
    inputId: 'search-input-md'
  }
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg',
    id: 'search-lg',
    inputId: 'search-input-lg'
  }
};
