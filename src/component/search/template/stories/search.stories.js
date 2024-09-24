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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const LgtStory = {
  tags: ['!dev'],
  args: {
    size: 'lg'
  }
};
