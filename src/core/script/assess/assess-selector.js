import ns from '../api/utilities/namespace.js';

export const AssessSelector = {
  ASSESS_FILE: `${ns.attr.selector('assess-file')}`,
  DETAIL: `${ns.attr.selector('assess-file')} [class$="__detail"], ${ns.attr.selector('assess-file')} [class*="__detail "]`
};
