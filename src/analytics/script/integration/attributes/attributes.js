import api from '../../../api';
import Type from '../../analytics/action/type';
import { AttributeBinding } from './attribute-binding';

Object.values(Type)
  .filter(type => type.binding)
  .forEach(type => api.internals.register(api.internals.ns.attr.selector(`analytics-${type.id}`), AttributeBinding));

export default api;
