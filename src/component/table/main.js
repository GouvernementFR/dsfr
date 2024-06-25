import api from './index.js';

api.internals.register(api.table.TableSelector.TABLE, api.table.Table);
api.internals.register(api.table.TableSelector.TABLE_WRAPPER, api.table.TableWrapper);
api.internals.register(api.table.TableSelector.ELEMENT, api.table.TableElement);
api.internals.register(api.table.TableSelector.CAPTION, api.table.TableCaption);
api.internals.register(api.table.TableSelector.ROW, api.table.TableRow);

export default api;
