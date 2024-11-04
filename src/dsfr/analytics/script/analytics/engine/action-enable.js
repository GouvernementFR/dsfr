export const ActionEnable = {
  ENABLE: {
    entries: ['enable', 'enabled', 'true', 'yes', '1', true],
    value: true,
    output: true
  },
  DISABLE: {
    entries: ['disable', 'disabled', 'false', 'no', '0', false],
    value: false,
    output: false
  },
  REDUCE: {
    entries: ['reduce'],
    value: 'reduce',
    output: false
  }
};
