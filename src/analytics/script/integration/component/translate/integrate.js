import api from '../../../../api';
import { TranslateSelector } from './translate-selector';
import { TranslateActionee } from './translate-actionee';

const integrateTranslate = () => {
  api.internals.register(TranslateSelector.COLLAPSE, TranslateActionee);
};

export default integrateTranslate;
