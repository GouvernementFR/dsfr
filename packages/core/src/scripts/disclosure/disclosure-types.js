export const DISCLOSURE_TYPES = {
  expand: {
    id: 'expanded',
    ariaState: true,
    ariaControls: true,
    canConceal: true
  },
  select: {
    id: 'selected',
    ariaState: true,
    ariaControls: true,
    canConceal: false
  },
  opened: {
    id: 'opened',
    ariaState: false,
    ariaControls: true,
    canConceal: true
  }
};
