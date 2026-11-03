const updateFirstnames = (container) => {
  const inputs = container.querySelectorAll('input[name="given-name"], input[name^="additional-name-"]');
  const button = container.querySelector('button[onclick*="addFirstname("]');
  const firstnameLabel = button.getAttribute('data-firstname-label') || 'Prénom';
  const removeLabel = button.getAttribute('data-remove-firstname-label') || 'Supprimer le prénom';

  inputs.forEach((input, index) => {
    const number = index + 1;
    const label = Array.from(input.labels).find(label => label.classList.contains('<%= prefix %>-label'));
    if (label) {
      const text = Array.from(label.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const value = `${firstnameLabel} ${number}`;
      if (text) text.textContent = value;
      else label.prepend(value);
    }

    const removeButton = input.closest('.<%= prefix %>-fieldset__element').querySelector('button[onclick="removeFirstname(this.copy)"]');
    if (removeButton) {
      const label = `${removeLabel} ${number}`;
      removeButton.textContent = label;
      removeButton.title = label;
    }
  });
};
