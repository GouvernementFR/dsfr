window.removeFirstname = (copy) => {
  copy.nextSibling.querySelector('input,button').focus();
  copy.remove();
};
