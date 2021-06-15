import api from '../api.js';
import { NAVIGATION_CLASS } from './navigation/navigation-selectors.js';
import { Navigation } from './navigation/navigation.js';

api.Collapse.register(NAVIGATION_CLASS, Navigation);
