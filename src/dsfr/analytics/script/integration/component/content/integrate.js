import api from '../../../../api';
import { ContentSelector } from './content-selector';
import { ContentActionee } from './content-actionee';

const integrateContent = () => {
  api.internals.register(ContentSelector.CONTENT, ContentActionee);
};

export default integrateContent;
