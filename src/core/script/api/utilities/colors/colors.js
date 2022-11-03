class Colors {
  getColor (context, use, tint, options = {}) {
    const option = getOption(options);
    const decision = `--${context}-${use}-${tint}${option}`;
    return getComputedStyle(document.documentElement).getPropertyValue(decision).trim() || null;
  }
}

const getOption = (options) => {
  switch (true) {
    case options.hover:
      return '-hover';
    case options.active:
      return '-active';
    default:
      return '';
  }
};

const colors = new Colors();

export default colors;
