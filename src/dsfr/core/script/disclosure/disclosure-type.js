export const DisclosureType = {
  EXPAND: {
    id: 'expanded',
    ariaState: true,
    ariaControls: true,
    canConceal: true,
    canDisable: true,
    requirePrimary: true
  },
  SELECT: {
    id: 'selected',
    ariaState: true,
    ariaControls: true,
    canConceal: false,
    canDisable: true,
    requirePrimary: true
  },
  OPENED: {
    id: 'opened',
    ariaState: false,
    ariaControls: true,
    canConceal: true,
    canDisable: false,
    requirePrimary: false
  }
};
