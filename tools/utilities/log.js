const log = (color, msg, cr) => {
  const chunks = [];
  if (cr) chunks.push('\n\r');
  chunks.push(`\x1b[${color}m`);
  chunks.push(msg);
  chunks.push('\x1b[0m');

  console.log.apply(null, chunks);
};

module.exports = log;
