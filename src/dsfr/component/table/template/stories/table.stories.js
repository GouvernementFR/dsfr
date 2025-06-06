import { uniqueId } from '../../../../core/template/stories/unique-id';
import { renderTable } from './table';
import { tableArgs, tableArgTypes, tableProps, getSelectableTableArgs, getComplexTableArgs, getComplexTableCaptionDetails, getMiscellaneousTableArgs, getFixedColTableArgs } from './table-arg-types';

const render = (args) => renderTable({ table: tableProps(args) });

export default {
  id: 'table',
  title: 'DSFR/Component/Table',
  render: render,
  argTypes: tableArgTypes,
  args: tableArgs
};

export const TableStory = {
  tags: ['!autodocs'],
  args: {
    id: uniqueId('table')
  }
};

export const DefaultStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table')
  }
};

export const SizeSMStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    size: 'sm'
  }
};

export const SizeLGStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    size: 'lg'
  }
};

export const VerticalBordersStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    bordered: true
  }
};

export const NoScrollStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    noScroll: true
  }
};

export const FixedColumnStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    table: getFixedColTableArgs()
  }
};

export const FixedColumnFromMDStory = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        story: 'La première colonne est fixe à partir du breakpoint `md`. Existe aussi avec les breakpoints `sm` et `lg`'
      }
    }
  },
  args: {
    id: uniqueId('table'),
    table: getFixedColTableArgs('md')
  }
};

export const SelectableTableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    table: getSelectableTableArgs()
  }
};

export const ComplexTableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    bordered: true,
    captionDetail: getComplexTableCaptionDetails(),
    table: getComplexTableArgs()
  }
};

export const MiscellaneousTableStory = {
  tags: ['autodocs', '!dev'],
  args: {
    id: uniqueId('table'),
    table: getMiscellaneousTableArgs()
  }
};
