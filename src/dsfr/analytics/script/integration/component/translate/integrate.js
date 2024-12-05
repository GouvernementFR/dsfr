import api from '../../../../api';
import { TranslateSelector } from './translate-selector';
import { TranslateActionee } from './translate-actionee';
import { TranslateButtonActionee } from './translate-button-actionee';
import { joinSelector } from '../../join-selector';

const integrateTranslate = (selector = '') => {
  api.internals.register(joinSelector(TranslateSelector.COLLAPSE, selector), TranslateActionee);
  api.internals.register(joinSelector(TranslateSelector.BUTTON, selector), TranslateButtonActionee);
};

export default integrateTranslate;
