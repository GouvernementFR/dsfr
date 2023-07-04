window.removeFirstname = (copy) => {
  const attrGivenName = '[name=given-name]';
  const givens = copy.parentNode.querySelectorAll(attrGivenName);
  copy.remove();
  if (givens.length) {
    const lastGiven = givens[givens.length - 1] !== copy.querySelector(attrGivenName) ? givens[givens.length - 1] : givens[givens.length - 2];
    lastGiven.focus();
  }
};
