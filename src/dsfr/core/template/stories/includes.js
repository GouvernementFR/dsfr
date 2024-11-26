/* eslint-disable no-undef */
locals.includeAttrs = function (attrs) {
  let html = '';
  for (const prop in attrs) {
    switch (attrs[prop]) {
      case '':
      case null:
        html += `${prop} `;
        break;

      case undefined:
        break;

      default:
        html += `${prop}="${attrs[prop]}" `;
    }
  }
  return html;
};

/* eslint-disable no-undef */
locals.includeClasses = function (classes) {
  if (classes !== undefined && classes.length > 0) return 'class="' + classes.join(' ') + '"';
  return '';
};
