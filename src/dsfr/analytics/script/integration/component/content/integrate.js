import api from '../../../../api';
import { ContentSelector } from './content-selector';
import { ContentActionee } from './content-actionee';
import { joinSelector } from '../../join-selector';

const integrateContent = (selector = '') => {
  api.internals.register(joinSelector(ContentSelector.CONTENT, selector), ContentActionee);
};

export default integrateContent;
