export const KeyCodes = {
  TAB: {
    id: 'tab',
    value: 9
  },
  ESCAPE: {
    id: 'escape',
    value: 27
  },
  END: {
    id: 'end',
    value: 35
  },
  HOME: {
    id: 'home',
    value: 36
  },
  LEFT: {
    id: 'left',
    value: 37
  },
  UP: {
    id: 'up',
    value: 38
  },
  RIGHT: {
    id: 'right',
    value: 39
  },
  DOWN: {
    id: 'down',
    value: 40
  }
};

export const getKeyCode = (keyCode) => Object.values(KeyCodes).filter(entry => entry.value === keyCode)[0];
