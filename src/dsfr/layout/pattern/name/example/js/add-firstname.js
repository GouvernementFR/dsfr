const getFieldsetElement = (node) => {
  const parent = node.parentNode;
  if (parent.className.indexOf('<%= prefix %>-fieldset__element') > -1) return parent;
  return getFieldsetElement(parent);
};

window.addFirstname = (button, id) => {
  button.firstnamesCount = (button.firstnamesCount + 1) || 1;

  const firstname = getFieldsetElement(document.getElementById(id));
  const reference = getFieldsetElement(button);

  const copy = firstname.cloneNode(true);
  let html = copy.innerHTML;
  const regexp = new RegExp(id, 'g');
  html = html.replace(regexp, `${id}-added-${button.firstnamesCount}`);
  copy.innerHTML = html;

  const input = copy.getElementsByTagName('input')[0];
  input.name = `additional-name-${button.firstnamesCount}`;
  input.autocomplete = `section-name${button.firstnamesCount} additional-name`;

  const wrapper = document.createElement('div');
  wrapper.classList = '<%= prefix %>-input-wrap <%= prefix %>-input-wrap--action';

  const removeButton = document.createElement('button');
  removeButton.classList = '<%= prefix %>-btn <%= prefix %>-btn--secondary <%= prefix %>-icon-delete-line';
  removeButton.type = 'button';

  removeButton.setAttribute('onclick', 'removeFirstname(this.copy)');
  removeButton.copy = copy;

  wrapper.appendChild(input);
  wrapper.appendChild(removeButton);
  copy.getElementsByTagName('label')[0].after(wrapper);
  reference.parentNode.insertBefore(copy, reference);
  updateFirstnames(reference.parentNode);
  document.getElementById(`${id}-added-${button.firstnamesCount}`).focus();
};
