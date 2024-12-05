export const startAtDomContentLoaded = (callback) => {
  if (document.readyState !== 'loading') window.requestAnimationFrame(callback);
  else document.addEventListener('DOMContentLoaded', callback);
};

export const startAuto = (callback) => {
  // detect
  startAtDomContentLoaded(callback);
};
