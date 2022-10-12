const fieldset = document.getElementById('<%= id %>');
if (this.checked) fieldset.setAttribute('disabled', '');
else fieldset.removeAttribute('disabled');
