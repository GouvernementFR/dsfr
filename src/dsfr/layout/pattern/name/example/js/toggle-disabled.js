window.toggleDisabled = (checkbox, id) => {
  const fieldset = document.getElementById(id);
  if (checkbox.checked) fieldset.setAttribute('disabled', '');
  else {
    fieldset.removeAttribute('disabled');
    fieldset.querySelector('input, button').focus();
  }
};
