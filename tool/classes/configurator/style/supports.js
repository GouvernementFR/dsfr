const RECENT = {
  id: 'recent',
  filename: 'recent',
  module: '-recent'
};

const OUTDATED = {
  id: 'outdated',
  filename: 'outdated',
  module: '-outdated'
};

const LEGACY = {
  id: 'legacy',
  filename: 'legacy',
  module: '-legacy'
};

const SUPPORTS = [RECENT, OUTDATED, LEGACY];

module.exports = { SUPPORTS, RECENT, OUTDATED, LEGACY };
