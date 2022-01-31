import * as path from 'path';

class EJSLoader {
  constructor (src) {
    this.src = src;
  }

  async load () {
    const response = await fetch(this.src);
    const blob = await response.blob();
    const text = await blob.text();
    return text;
  }

  async render (args) {
    const template = await this.load();
    console.log(args);
    const fn = ejs.compile(template, {client: true, async: true});
    // const html = ejs.render(template, { ...args, prefix: 'fr' });
    const html = await fn ({ ...args, prefix: 'fr' }, null, (p, d) => {
      const loader = new EJSLoader(path.resolve(this.src, p));
      return await loader.render(d);
    });
    console.log(html);
    return { content: html };
  }

  async compile(template) {
    let promise = await new Promise((resolve, reject) => {
      const fn = ejs.compile(template, {client: true});

      this.server.listen(port, () => {
        resolve();
      });
    })
      .catch(err => {throw err});

    return promise
  }

}

export { EJSLoader };
