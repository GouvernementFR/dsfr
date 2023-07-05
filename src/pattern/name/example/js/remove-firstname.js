window.removeFirstname = (copy) => {
  const attrGivenName = '[name=given-name]';
  const fieldsetElements = copy.parentNode.querySelectorAll('.fr-fieldset__element');
  if (copy.nextSibling.querySelector(attrGivenName)) {
    copy.nextSibling.querySelector(attrGivenName).focus();
  } else {
    if (fieldsetElements.length) {
      fieldsetElements[fieldsetElements.length - 1].querySelector('button').focus();
    }
  }
  copy.remove();
};
