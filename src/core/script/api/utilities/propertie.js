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
