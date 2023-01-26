// const { Instance } = import('../api/modules/register/instance');
// const { Toggle } = import('../action/toggle/toggle');
import { Instance } from '../api/modules/register/instance';
import { Toggle } from '../action/toggle/toggle';

// import SoundPlayer from './sound-player';
// import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('../api/modules/register/instance'); // SoundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Instance.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const toggle = new Toggle();
  expect(Instance).toHaveBeenCalledTimes(1);
});
