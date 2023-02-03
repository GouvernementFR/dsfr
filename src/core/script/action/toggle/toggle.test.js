import { jest, beforeEach, it, expect } from '@jest/globals';

import { Instance } from '../../api/modules/register/instance';
import { Toggle } from '../../action/toggle/toggle';

jest.mock('../../api/modules/register/instance'); // Instance is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  console.log('Instance', Instance);
  Instance.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const toggle = new Toggle();
  expect(Instance).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(Instance).not.toHaveBeenCalled();

  const toggle = new Toggle();
  // Constructor should have been called again:
  expect(Instance).toHaveBeenCalledTimes(1);
});
