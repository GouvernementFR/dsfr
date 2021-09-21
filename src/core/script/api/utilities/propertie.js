/**
 * Copy properties from multiple sources including accessors.
 *
 * @param {...objects} Multiple objects
 * @return {object} A new object
 *
 * @example
 *
 *     const obj1 = {
 *        key: 'value'
 *     };
 *     const obj2 = {
 *        get function01 () {
 *          return a-value;
 *        } 
 *        set function01 () {
 *          return a-value;
 *        }
 *     };
 *     mixProperties(obj1, obj2)
 */
const mixProperties = (...sources) => {
  const result = {};
  for (const source of sources) {
    const props = Object.keys(source);
    for (const prop of props) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop);
      Object.defineProperty(result, prop, descriptor);
    }
  }
  return result;
};

export { mixProperties };
