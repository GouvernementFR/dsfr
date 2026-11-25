window.removeFirstname = (copy) => {
  const container = copy.parentNode;
  const nextControl = copy.nextElementSibling.querySelector('input,button');
  copy.remove();
  window.updateFirstnames(container);
  nextControl.focus();
};
