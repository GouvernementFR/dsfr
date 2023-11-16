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
  html = html.replace('name=&quot;given-name&quot;', `name=&quot;additional-name-${button.firstnamesCount}&quot;`);
  html = html.replace('autocomplete=&quot;given-name&quot;', 'autocomplete=&quot;additional-name&quot;');
  copy.innerHTML = html;

  const wrapper = document.createElement('div');
  wrapper.classList = '<%= prefix %>-input-wrap <%= prefix %>-input-wrap--action';

  const removeButton = document.createElement('button');
  const labelRemoveButton = '<%= getText("label.remove-firstname", "name") %>';
  removeButton.classList = '<%= prefix %>-btn <%= prefix %>-btn--secondary <%= prefix %>-icon-delete-line';
  removeButton.innerHTML = labelRemoveButton;
  removeButton.title = labelRemoveButton;

  removeButton.setAttribute('onclick', 'removeFirstname(this.copy)');
  removeButton.copy = copy;

  wrapper.appendChild(copy.getElementsByTagName('input')[0]);
  wrapper.appendChild(removeButton);
  copy.getElementsByTagName('label')[0].after(wrapper);
  reference.parentNode.insertBefore(copy, reference);
  document.getElementById(`${id}-added-${button.firstnamesCount}`).focus();
};
