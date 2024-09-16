const { spawn } = require('child_process');

const buildStorybook = async () => {
  return new Promise((resolve, reject) => {
    const child = spawn('sh', ['-c', 'cd dsfr-sb && yarn install && yarn build-storybook'], { stdio: 'inherit' });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error('Storybook build failed'));
      }
    });
  });
};

exports.buildStorybook = buildStorybook;
