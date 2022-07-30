import api from './api.js';
import { PasswordToggle } from './script/password/password-toggle.js';
import { Password } from './script/password/password.js';
import { PasswordSelector } from './script/password/password-selector.js';
import { PasswordInput } from './script/password/password-input.js';
import { PasswordLabel } from './script/password/password-label.js';

api.password = {
  Password: Password,
  PasswordToggle: PasswordToggle,
  PasswordSelector: PasswordSelector,
  PasswordInput: PasswordInput,
  PasswordLabel: PasswordLabel
};

export default api;
