const { cmd } = require('./utils');
const parseRepoURL = require('parse-github-url');

class Remote {
  async load () {
    const remoteURL = await cmd('git config --get remote.origin.url');
    this.remote = parseRepoURL(remoteURL);
    const protocol = this.remote.protocol === 'http:' ? 'http:' : 'https:';
    const hostname = this.remote.hostname || this.remote.host;
    const repository = this.remote.repo;
    this._url = `${protocol}//${hostname}/${repository}`;
  }

  compare (from, to) {
    return `${this._url}/compare/${from}...${to}`;
  }

  pull (id) {
    return `${this._url}/pull/${id}`;
  }
}

const remote = new Remote();

module.exports = { remote };
