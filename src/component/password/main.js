import api from './index.js';

api.internals.register(api.password.PasswordSelector.INPUT, api.password.PasswordInput);
api.internals.register(api.password.PasswordSelector.PASSWORD, api.password.Password);
api.internals.register(api.password.PasswordSelector.TOOGLE, api.password.PasswordToggle);
api.internals.register(api.password.PasswordSelector.LABEL, api.password.PasswordLabel);

export default api;
