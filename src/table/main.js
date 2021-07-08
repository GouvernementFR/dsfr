import api from './index';

api.register(api.table.TableSelectors.TABLE, api.table.Table);
api.register(api.table.TableSelectors.ELEMENT, api.table.TableElement);
api.register(api.table.TableSelectors.CAPTION, api.table.TableCaption);

export default api;
