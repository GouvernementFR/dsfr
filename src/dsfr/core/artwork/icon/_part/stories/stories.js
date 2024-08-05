import { FrIconModel } from '../component/model/fr-icon-model.js';

export const warning = {
  args: {
    id: 'warning-icon',
    name: 'warning-fill'
  },
};

export const warningSm = {
  args: {
    id: 'warning-icon-sm',
    name: 'warning-fill',
    size: FrIconModel.schema.props.size.enum[0]
  },
};

export const warningLg = {
  args: {
    id: 'warning-icon-lg',
    name: 'warning-fill',
    size: FrIconModel.schema.props.size.enum[2]
  },
};
