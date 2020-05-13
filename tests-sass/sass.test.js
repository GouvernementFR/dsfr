const Path = require('path');
const SassTrue = require('sass-true');
const Glob = require('glob');

describe('Sass', () => {
  const sassTestFiles = Glob.sync(
    Path.resolve(process.cwd(), 'packages/**/tests/_sass-tests.scss')
  );

  sassTestFiles.forEach(file => {
    SassTrue.runSass({ file }, { describe, it })
  });
});
