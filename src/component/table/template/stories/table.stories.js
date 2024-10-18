import { renderTable } from './table';
import { tableArgs, tableArgTypes, tableProps, getSelectableTableArgs, getComplexTableArgs, getComplexTableCaptionDetails } from './table-arg-types';

const render = (args) => renderTable({ table: tableProps(args) });

export default {
  id: 'table',
  title: 'DSFR/Component/Table',
  render: render,
  argTypes: tableArgTypes,
  args: tableArgs
};

export const TableStory = {
  tags: ['autodocs'],
  args: {}
};

export const SizeSMStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
};

export const SizeLGStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg'
  }
};

export const VerticalBordersStory = {
  tags: ['autodocs', '!dev'],
  args: {
    bordered: true
  }
};

export const NoScrollStory = {
  tags: ['autodocs', '!dev'],
  args: {
    noScroll: true
  }
};

export const SelectableTableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    table: getSelectableTableArgs()
  }
};

export const ComplexTableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    bordered: true,
    captionDetail: getComplexTableCaptionDetails(),
    table: getComplexTableArgs()
  }
};
