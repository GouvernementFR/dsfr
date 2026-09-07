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

export const LabelledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    labelled: true,
    id: 'search-labelled',
    inputId: 'search-input-labelled',
    inputLabel: 'Rechercher un xxx'
  }
};

export const ErrorStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: 'search-error',
    inputId: 'search-input-error',
    status: 'error',
    errorMessage: 'Message d\'erreur'
  }
};
