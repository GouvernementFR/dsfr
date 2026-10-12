const $indeterminates = document.querySelectorAll('[id*="indeterminate"]');
for (const $indeterminate of $indeterminates) {
  $indeterminate.indeterminate = true;
}
