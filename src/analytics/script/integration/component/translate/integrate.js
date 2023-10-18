import api from '../../../../api';
import { TranslateSelector } from './translate-selector';
import { TranslateActionee } from './translate-actionee';
import { TranslateButtonActionee } from './translate-button-actionee';

const integrateTranslate = () => {
  api.internals.register(TranslateSelector.COLLAPSE, TranslateActionee);
  api.internals.register(TranslateSelector.BUTTON, TranslateButtonActionee);
};

export default integrateTranslate;
