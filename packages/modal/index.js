import api from './api.js';

import { Modal } from './src/scripts/modal/modal';
import { ModalsGroup } from './src/scripts/modal/modals-group';
import { FocusTrap } from './src/scripts/modal/focus-trap';

api.Modal = Modal;
api.ModalsGroup = ModalsGroup;
api.FocusTrap = FocusTrap;
