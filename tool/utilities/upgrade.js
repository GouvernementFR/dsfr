const { spawn } = require('child_process');
const log = require('./log');

const upgradeNexus = async () => {
  return new Promise((resolve, reject) => {
  const cp = spawn('yarn', ['upgrade-nexus']);
    cp.stdout.setEncoding('utf8');
    cp.stdout.on('data', data => log.info(data));
    cp.stderr.on('data', data => log.error(data));
    cp.on('error', error => reject(error));
    cp.on('close', exitCode => {
      log.info('Exit code:', exitCode);
      resolve(exitCode);
    });
  });
};

module.exports = { upgradeNexus };
