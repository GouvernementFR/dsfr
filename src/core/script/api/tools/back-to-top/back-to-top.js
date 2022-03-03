const backToTop = (e) => {
  document.querySelector('a, button').focus();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  if (e !== undefined) e.preventDefault();
};

export { backToTop };
