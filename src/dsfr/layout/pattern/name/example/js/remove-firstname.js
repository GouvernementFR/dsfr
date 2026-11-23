window.removeFirstname = (copy) => {
  const container = copy.parentNode;
  const nextControl = copy.nextElementSibling.querySelector('input,button');
  copy.remove();
  updateFirstnames(container);
  nextControl.focus();
};
