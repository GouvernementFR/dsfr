export const deepFreeze = (object) => {
  if (Object.isFrozen(object)) return object;
  Object.entries(object).forEach(([key, value]) => {
    switch (typeof value) {
      case 'object':
      case 'function':
        if (Array.isArray(value)) {
          object[key] = Object.freeze(value.map(item => deepFreeze(item)));
          break;
        }
        object[key] = deepFreeze(object[key]);
        break;
    }
  });
  return Object.freeze(object);
}
