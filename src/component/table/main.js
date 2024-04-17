import api from './index.js';

api.internals.register(api.table.TableSelector.TABLE, api.table.Table);
api.internals.register(api.table.TableSelector.ELEMENT, api.table.TableElement);
api.internals.register(api.table.TableSelector.CAPTION, api.table.TableCaption);
api.internals.register(api.table.TableSelector.ROW, api.table.TableRow);
api.internals.register(api.table.TableSelector.ROW_SELECT, api.table.TableRowSelect);
api.internals.register(api.table.TableSelector.COL_SELECT, api.table.TableColSelect);

export default api;
