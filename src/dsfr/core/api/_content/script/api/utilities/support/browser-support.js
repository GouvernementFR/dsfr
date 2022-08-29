const supportLocalStorage = () => {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};

const supportAspectRatio = () => {
  if (!window.CSS) return false;
  return CSS.supports('aspect-ratio: 16 / 9');
};

export { supportLocalStorage, supportAspectRatio };
