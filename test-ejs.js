const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const content = fs.readFileSync(path.resolve(__dirname, 'src/component/alert/template/ejs/alert.ejs'), {
  encoding: 'utf8',
  flag: 'r'
});

console.log(content);

const fn = ejs.compile(content, { root: path.resolve(__dirname, 'src') });

// console.log(ejs.render(content, { alert: { title: 'title' } }));
const html = fn({ alert: { title: 'title' } });

console.log(html);
