import api from '../../../api';
import { ASelector } from './action/a-selector';
import { AActionee } from './action/a-actionee';

api.internals.register(ASelector.A, AActionee);
