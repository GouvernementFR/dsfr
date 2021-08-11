const _color = (color) => `\x1b[${color}m`;
const _end = '\x1b[0m';

const _log = (cr, args) => {
  const chunks = args.map((item, index) => { return index % 2 === 1 ? item : _color(item); });
  if (cr) chunks.unshift('\n\r');
  chunks.push(_end);
  console.log.apply(null, chunks);
};

const log = (color, msg, cr) => {
  _log(cr, [color, msg]);
};

log.info = (msg, cr) => {
  _log(cr, [36, msg]);
};

log.error = (msg, cr) => {
  _log(cr, [31, msg]);
};

log.file = (filename, filesize, cr) => {
  _log(cr, [38, filename, 33, filesize]);
};

log.section = (msg, cr) => {
  _log(cr, [34, `# ${msg.toUpperCase()} #`]);
};

module.exports = log;
