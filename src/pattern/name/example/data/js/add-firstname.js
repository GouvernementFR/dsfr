if (this.firstnamesCount === undefined) this.firstnamesCount = 1;
else this.firstnamesCount++;

const getFieldsetElement = (node) => {
  const parent = node.parentNode;
  if (parent.className.indexOf('<%= prefix %>-fieldset__element') > -1) return parent;
  return getFieldsetElement(parent);
};

const firstname = getFieldsetElement(document.getElementById('<%= id %>'));

const reference = getFieldsetElement(this);

const copy = firstname.cloneNode(true);
copy.classList.add('<%= prefix %>-fieldset__element--inline', '<%= prefix %>-fieldset__element--inline-grow');
copy.innerHTML = copy.innerHTML.replace(/<%= id %>/g, `<%= id %>-added-${this.firstnamesCount}`).replace('name=&quot;given-name&quot;', `name=&quot;additional-name-${this.firstnamesCount}&quot;`).replace('autocomplete=&quot;given-name&quot;', 'autocomplete=&quot;additional-name&quot;');

const removeField = reference.cloneNode(true);
removeField.classList.add('<%= prefix %>-fieldset__element--inline');

const removeButton = removeField.getElementsByTagName('button')[0];
const labelRemoveButton = '<%= getText("label.remove-firstname", "name") %>';
removeButton.classList = '<%= prefix %>-btn <%= prefix %>-btn--tertiary <%= prefix %>-icon-delete-line';
removeButton.innerHTML = labelRemoveButton;
removeButton.title = labelRemoveButton;
removeButton.setAttribute('onclick', `document.getElementById('<%= id %>-added-${this.firstnamesCount}').closest('.<%= prefix %>-fieldset__element').remove(); this.closest('.<%= prefix %>-fieldset__element').remove()`);

const container = reference.parentNode;
container.insertBefore(removeField, reference);
container.insertBefore(copy, removeField);
