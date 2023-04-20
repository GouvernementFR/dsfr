const { cmd, gitmoji } = require('./utils');
const { remote } = require('./remote');
const log = require('../../utilities/log');

class Commit {
  constructor (sha) {
    this._sha = sha;
  }

  get subject () {
    return this._subject;
  }

  get details () {
    return this._details;
  }

  get id () {
    return this._id;
  }

  get href () {
    return this._href;
  }

  get jira () {
    return false; // this._jira;
  }

  get isValid () {
    return this._isValid;
  }

  async load () {
    const gitLog = await cmd(`git log --format=%B -n 1 ${this._sha}`);
    const lines = gitLog.split('\n');
    const subject = lines[0].trim();
    const regex = /\(#(\d+)\)/;
    const id = subject.match(regex);
    if (Array.isArray(id) && id.length >= 2) {
      this._id = id[1];
      this._href = remote.pull(this._id);
    }
    const idsRegex = /DS-\d+/g;
    const ids = subject.match(idsRegex);
    if (Array.isArray(ids) && ids.length > 0) {
      this._jira = ids.map(id => `[${id}](<https://gouvfr.atlassian.net/browse/${id}>)`).join(',');
    }

    this._subject = gitmoji(subject.replace(regex, '').replace(/\[DS-[DS-\d, ]+]/g, '').trim());
    this._details = lines.slice(1).join('\n').trim();
    this._details = this._details.replace(/^#{1,6}\s/g, '').replace(/\n#{1,6}\s/g, '');

    switch (true) {
      case this._subject.match(/chore.+DSFR/) !== null:
      case this._subject.match(/chore.+changelog/) !== null:
      case this._subject.match(/chore.+incrémentation/) !== null:
      case this._subject.match(/chore.+incémentation/) !== null:
      case this._subject.match(/^((..|.|(:\w+:))\s*)?(build|chore|ci|doc|docs|feat|feature|fix|perf|refactor|revert|style|test)(\(.*\))?/i) === null:
        this._isValid = false;
        log.error(this._subject, true);
        break;

      default:
        this._isValid = true;
        log.info(this._subject, true);
    }
  }
}

module.exports = { Commit };
