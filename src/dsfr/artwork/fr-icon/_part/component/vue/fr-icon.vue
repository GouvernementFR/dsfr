<template src="./fr-icon.html"></template>
<script>
import { computed, shallowReactive } from 'vue'
import { FrIconModel } from '../model/fr-icon-model.js';
import { vSetupProps, vSchemaToDefineProps } from '@gouvfr/dsfr-kit/vue';

export default {
  name: 'FrIcon',
  props: vSchemaToDefineProps(FrIconModel.schema),
  setup: (props) => vSetupProps(props, FrIconModel, shallowReactive, computed)
};
</script>
