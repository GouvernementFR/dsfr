import { ModelContext } from '../model/model-context.js';

export const ngGetProps = (component, ModelConstructor) => {
    const inputs = {};
    Object.keys(ModelConstructor.schema.props).forEach(key => inputs[key] = component[key]);
    const model = new ModelConstructor( inputs, ModelContext.ANGULAR);
    return model.props;
}
