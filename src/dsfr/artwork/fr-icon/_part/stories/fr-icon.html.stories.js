import '../../../../../../dist/dsfr.css';
import '../../../../../../dist/utility/utility.css';
import { FrIcon } from '../component/html/fr-icon.js';
import { FrIconModel } from '../component/model/fr-icon-model.js';
import { schemaToArgTypes } from '@gouvfr/dsfr-kit';

export default {
  title: 'Core/FrIcon',
  tags: ['autodocs'],
  render: (args) => {
    const model = new FrIconModel(args);

    const icon = new FrIcon(model);
    return icon.html;
  },
  argTypes: schemaToArgTypes(FrIconModel.schema)
};

export { warning, warningSm, warningLg } from './stories.js';
