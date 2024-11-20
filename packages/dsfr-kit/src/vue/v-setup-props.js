

export const vSetupProps = (props, Model, reactive, computed) => {
  props = reactive(props);
  return{
    props: computed(() => new Model(props).props),
  };
};
