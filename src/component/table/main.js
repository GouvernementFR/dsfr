import api from './index.js';

api.register(api.table.TableSelector.TABLE, api.table.Table);
api.register(api.table.TableSelector.ELEMENT, api.table.TableElement);
api.register(api.table.TableSelector.CAPTION, api.table.TableCaption);

export default api;
