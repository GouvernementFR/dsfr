const { spawn } = require('child_process');

const MONTH_NAMES = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const niceDate = (string) => {
  const date = new Date(string);
  const dayNum = date.getUTCDate();
  const day = dayNum === 1 ? '1er' : dayNum;
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

const GITMOJIS = {
  ':bug:': '🐛',
  ':sparkles:': '✨'
};

const gitmoji = (string) => {
  for (const code in GITMOJIS) string = string.replace(code, GITMOJIS[code]);
  return string;
};

module.exports = { cmd, niceDate, gitmoji };
