<template src="./fr-icon.html"></template>
<script>
import { computed, shallowReactive } from 'vue'
import { FrIconModel } from '../model/fr-icon-model.js';
import { setupProps, vSchemaToDefineProps } from '@gouvfr/dsfr-kit/vue';

export default {
  name: 'FrIcon',
  props: vSchemaToDefineProps(FrIconModel.schema),
  setup: (props) => setupProps(props, FrIconModel, shallowReactive, computed)
};
</script>
