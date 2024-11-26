export const querySelectorAllArray = (element, selectors) => Array.prototype.slice.call(element.querySelectorAll(selectors));

export const queryParentSelector = (element, selectors) => {
  const parent = element.parentElement;
  if (parent.matches(selectors)) return parent;
  if (parent === document.documentElement) return null;
  return queryParentSelector(parent, selectors);
};
