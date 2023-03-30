import api from '../../../api';
import Type from '../../analytics/action/type';
import { AttributeActionee } from './attribute-actionee';

Object.values(Type)
  .filter(type => type.attributed)
  .forEach(type => api.internals.register(api.internals.ns.attr.selector(`analytics-${type.id}`), AttributeActionee));

export default api;
