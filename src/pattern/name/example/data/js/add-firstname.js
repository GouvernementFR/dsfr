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
const container = reference.parentNode;
container.insertBefore(copy, reference);
