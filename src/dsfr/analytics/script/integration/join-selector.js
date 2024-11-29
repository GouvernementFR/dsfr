export const joinSelector = (selectors, join) => selectors.split(',').map(selector => `${selector}${join}`).join(',');
