const Status = {
  CONNECTED: {
    id: 'connected',
    value: 'connecté',
    isConnected: true,
    isDefault: true
  },
  ANONYMOUS: {
    id: 'anonymous',
    value: 'anonyme',
    isConnected: false,
    isDefault: true
  },
  GUEST: {
    id: 'guest',
    value: 'invité',
    isConnected: false
  }
};

export default Status;
