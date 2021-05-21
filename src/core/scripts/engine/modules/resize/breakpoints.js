class Breakpoint {
  constructor (minWidth) {
    this.minWidth = minWidth;
  }

  test () {
    return window.matchMedia((`min-width: ${this.minWidth}em`)).matches;
  }
}

const BREAKPOINTS = {
  xs: new Breakpoint(0),
  sm: new Breakpoint(36),
  md: new Breakpoint(48),
  lg: new Breakpoint(62),
  xl: new Breakpoint(78)
};

export default BREAKPOINTS;
