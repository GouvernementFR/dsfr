const dispatch = (node, type, detail = null, bubbles = true, cancelable = false) => {
  const options = { bubbles: bubbles === true, cancelable: cancelable === true };
  if (detail) options.detail = detail;
  const event = new CustomEvent(type, options);
  node.dispatchEvent(event);
};

const rootDispatch = (type, detail = null, bubbles = false, cancelable = false) => dispatch(document.documentElement, type, detail, bubbles, cancelable);

export { dispatch, rootDispatch };
