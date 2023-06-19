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
let html = copy.innerHTML;
html = html.replace(/<%= id %>/g, `<%= id %>-added-${this.firstnamesCount}`);
html = html.replace('name=&quot;given-name&quot;', `name=&quot;additional-name-${this.firstnamesCount}&quot;`);
html = html.replace('autocomplete=&quot;given-name&quot;', 'autocomplete=&quot;additional-name&quot;');
copy.innerHTML = html;

const wrapper = document.createElement('div');
wrapper.classList = '<%= prefix %>-input-wrap <%= prefix %>-input-wrap--action';

const removeButton = document.createElement('button');
const labelRemoveButton = '<%= getText("label.remove-firstname", "name") %>';
removeButton.classList = '<%= prefix %>-btn <%= prefix %>-btn--tertiary <%= prefix %>-icon-delete-line';
removeButton.innerHTML = labelRemoveButton;
removeButton.title = labelRemoveButton;

removeButton.setAttribute('onclick', `<%- include('remove-firstname.js') %>`);

wrapper.appendChild(copy.getElementsByTagName('input')[0]);
wrapper.appendChild(removeButton);
copy.getElementsByTagName('label')[0].after(wrapper);
reference.parentNode.insertBefore(copy, reference);
document.getElementById(`<%= id %>-added-${this.firstnamesCount}`).focus();
