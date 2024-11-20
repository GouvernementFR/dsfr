import '../../../../../../../dist/dsfr.css';
import '../../../../../../../dist/utility/utility.css';
import FrIcon from '../component/vue/fr-icon.vue';
import { FrIconModel } from '../component/model/fr-icon-model.js';
import { docStory } from '@gouvfr/dsfr-kit/src/stories';

export default {
  title: 'DSFR/Artwork/FrIcon',
  tags: ['autodocs'],
  ...docStory(FrIcon, FrIconModel.schema)
};

export { warning, warningSm, warningLg } from './stories.js';
