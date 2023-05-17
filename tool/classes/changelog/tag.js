const { cmd, niceDate } = require('./utils');
const semver = require('semver');
const { remote } = require('./remote');
const { Commit } = require('./commit');

const DIVIDER = '---';

class Tags {
  constructor (current = null) {
    this._current = current;
    this._majors = [];
  }

  async load () {
    await remote.load();

    const format = `%(refname:short)${DIVIDER}%(creatordate:short)`;
    this.tags = (await cmd(`git tag -l --format=${format}`))
      .trim()
      .split('\n')
      .map(content => this.formatedTag(content))
      .filter(tag => tag.isValid)
      .sort(this.sortTags);

    if (this._current !== null) this.tags.unshift(new Tag(this._current, new Date().toISOString().substring(0, 10), true));

    for (let i = 0; i < this.tags.length; i++) {
      const tag = this.tags[i];
      const previous = i + 1 < this.tags.length ? this.tags[i + 1] : null;
      await tag.getCommits(previous);
    }

    console.log(`0 / ${this.totalCommits}`);
    let loaded = 0;

    for (const tag of this.tags) {
      await tag.load();
      loaded += tag.commits.length;
      console.log(`${loaded} / ${this.totalCommits}`);

      if (!this._majors.some(major => major.append(tag))) {
        const major = new Major(tag.major);
        major.append(tag);
        this._majors.push(major);
      }
    }

    // console.log(this._majors[1].minors);
  }

  get totalCommits () {
    return this.tags.map(tag => tag.commits.length).reduce((partialSum, a) => partialSum + a, 0);
  }

  get majors () {
    return this._majors;
  }

  formatedTag (content) {
    const [tag, date] = content.split(DIVIDER);
    return new Tag(tag, date);
  };

  sortTags (a, b) {
    return semver.rcompare(a.version, b.version);
  }
}

class Tag {
  constructor (tag, date, isHead = false) {
    this.tag = tag;
    this.date = date;
    this.niceDate = niceDate(date);
    this._isHead = isHead;
    this._version = this.inferSemver();

    switch (true) {
      case semver.valid(this.version) === null:
      case this.tag.indexOf('unpublish') > -1:
        this._isValid = false;
        break;

      default:
        this._isValid = true;
        this._major = semver.major(this._version);
        this._minor = semver.minor(this._version);
        this._patch = semver.patch(this._version);
    }
  }

  get isValid () {
    return this._isValid;// && semver.satisfies(this.version, '>=1.8.0 ');
  }

  get version () {
    return this._version;
  }

  get href () {
    return this._href;
  }

  get commits () {
    return this._commits;
  }

  get major () {
    return this._major;
  }

  get minor () {
    return this._minor;
  }

  get patch () {
    return this._patch;
  }

  async getCommits (previous) {
    this._previous = previous;
    const pv = previous ? previous.version : '0.0.0';
    this._isMajor = Boolean(semver.diff(this.version, pv) === 'major');
    this._isMinor = Boolean(['minor', 'preminor'].includes(semver.diff(this.version, pv)));
    this._diff = this._isHead ? 'HEAD' : this.tag;
    if (previous) {
      this._diff += `...${previous.tag}`;
      this._href = remote.compare(previous.tag, this.tag);
    }

    const log = await cmd(`git log ${this._diff} --pretty=oneline`);
    this.log = log;
    this._commits = log.split('\n').filter(line => line).map(line => new Commit(line.split(' ')[0]));
  }

  async load () {
    for (const commit of this._commits) await commit.load();
    this._commits = this._commits.filter(commit => commit.isValid);
  }

  inferSemver () {
    const tag = this.tag.replace('v', '');
    switch (true) {
      case /^v?\d+$/.test(tag):
        return `${tag}.0.0`;

      case /^v?\d+\.\d+$/.test(tag):
        return `${tag}.0`;

      default:
        return tag;
    }
  }
}

class Major {
  constructor (major) {
    this._major = major;
    this._title = `DSFR v${major}`;
    this._minors = [];
  }

  get title () {
    return this._title;
  }

  get minors () {
    return this._minors;
  }

  append (tag) {
    if (tag.major !== this._major) return false;

    if (!this._minors.some(minor => minor.append(tag))) {
      const minor = new Minor(tag.major, tag.minor);
      minor.append(tag);
      this._minors.push(minor);
    }

    return true;
  }
}

class Minor {
  constructor (major, minor) {
    this._major = major;
    this._minor = minor;
    this._title = `v${major}.${minor}`;
    this._tags = [];
  }

  get title () {
    return this._title;
  }

  get tags () {
    return this._tags;
  }

  append (tag) {
    if (tag.major !== this._major || tag.minor !== this._minor) return false;
    this._tags.push(tag);
    return true;
  }
}

module.exports = { Tags };
