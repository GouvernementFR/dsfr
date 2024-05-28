import '../../../../../../dist/dsfr.css';
import '../../../../../../dist/utility/utility.css';
import { FrIcon } from '../component/react/fr-icon.jsx';
import { FrIconModel } from '../component/model/fr-icon-model.js';
import { schemaToArgTypes, schemaToArgs } from '@gouvfr/dsfr-kit';

console.log(FrIconModel.schema.title);

export default {
  title: 'DSFR/Core/FrIcon',
  tags: ['autodocs'],
  component: FrIcon,
  argTypes: schemaToArgTypes(FrIconModel.schema),
  args: schemaToArgs(FrIconModel.schema)
};

export { warning, warningSm, warningLg } from './stories.js';
