import { validateString } from './type-validator';

const findAccessor = (instance, key) => {
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, key);
    if (descriptor) return descriptor;
    proto = Object.getPrototypeOf(proto);
  }
  return undefined;
};

const restore = (target, source) => {
  Object.keys(target).forEach(key => delete target[key]);
  Object.assign(target, source);
};

const setContext = (instance, section, key, value) => {
  const accessor = findAccessor(instance, key);
  if (accessor && typeof accessor.set === 'function') {
    instance[key] = value;
    instance._config[key] = instance[key];
    return;
  }
  if (validateString(value, `${section}.${key}`) !== null) instance._config[key] = value;
};

const getContext = (instance, key) => {
  const accessor = findAccessor(instance, key);
  if (accessor && typeof accessor.get === 'function') return instance[key];
  return instance._config[key];
};

export { restore, setContext, getContext };
