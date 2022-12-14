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
copy.innerHTML = copy.innerHTML.replace(/<%= id %>/g, `<%= id %>-added-${this.firstnamesCount}`).replace('name=&quot;given-name&quot;', `name=&quot;additional-name-${this.firstnamesCount}&quot;`).replace('autocomplete=&quot;given-name&quot;', 'autocomplete=&quot;additional-name&quot;');

const wrapper = document.createElement('div');
wrapper.classList = '<%= prefix %>-input-wrap <%= prefix %>-input-wrap--action';

const removeButton = document.createElement('button');
const labelRemoveButton = '<%= getText("label.remove-firstname", "name") %>';
removeButton.classList = '<%= prefix %>-btn <%= prefix %>-btn--tertiary <%= prefix %>-icon-delete-line';
removeButton.innerHTML = labelRemoveButton;
removeButton.title = labelRemoveButton;
removeButton.setAttribute('onclick', `document.getElementById('<%= id %>-added-${this.firstnamesCount}').closest('.<%= prefix %>-fieldset__element').remove(); this.closest('.<%= prefix %>-fieldset__element').remove()`);

wrapper.appendChild(copy.getElementsByTagName('input')[0]);
wrapper.appendChild(removeButton);
copy.getElementsByTagName('label')[0].after(wrapper);
reference.parentNode.insertBefore(copy, reference);
document.getElementById(`<%= id %>-added-${this.firstnamesCount}`).focus();
