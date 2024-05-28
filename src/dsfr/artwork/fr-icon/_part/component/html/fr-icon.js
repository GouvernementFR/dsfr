import { Component } from '@gouvfr/dsfr-kit/html.js';

class FrIcon extends Component {
  get html () {
    return `<span ${this.attributes}></span>`;
  }
}

export { FrIcon };
