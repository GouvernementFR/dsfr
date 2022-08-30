import ref from '../../ref.js';
import { PasswordToggle } from './password/password-toggle.js';
import { Password } from './password/password.js';
import { PasswordSelector } from './password/password-selector.js';
import { PasswordInput } from './password/password-input.js';
import { PasswordLabel } from './password/password-label.js';

ref.password = {
  Password: Password,
  PasswordToggle: PasswordToggle,
  PasswordSelector: PasswordSelector,
  PasswordInput: PasswordInput,
  PasswordLabel: PasswordLabel
};

export default ref;
