const { spawn } = require('child_process');

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const niceDate = (string) => {
  const date = new Date(string);
  const day = date.getUTCDate();
  const month = MONTH_NAMES[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};

const cmd = (string, onProgress) => {
  const [cmd, ...args] = string.trim().split(' ');
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args);
    let data = '';

    child.stdout.on('data', buffer => {
      data += buffer.toString();
      if (onProgress) {
        onProgress(data.length);
      }
    });
    child.stdout.on('end', () => resolve(data));
    child.on('error', reject);
  });
};

module.exports = { cmd, niceDate };
