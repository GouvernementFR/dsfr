class Colors {
  getColors (context, use, tint, options = {}) {
    const option = getOption(options) || '';
    const cssVar = `--${context}-${use}-${tint}${option}`;
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || null;
  }
}

function getOption (options) {
  if (options.hover) {
    return '-hover';
  } else if (options.active) {
    return '-active';
  }
}

const colors = new Colors();

export default colors;
