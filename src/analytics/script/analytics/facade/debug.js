class Debug {
  get debugger () {
    return window._oEa;
  }

  get isActive () {
    if (!this.debugger) return false;
    return this.debugger._dbg === '1';
  }

  set isActive (value) {
    if (!this.debugger || this.isActive === value) return;
    this.debugger.debug(value ? 1 : 0);
  }
}

const debug = new Debug();

export default debug;
