import { Disclosure } from './disclosure';

class DisclosureButton {
  constructor (element, disclosure) {
    this.element = element;
    this.disclosure = disclosure;
    this.hasAttribute = this.element.hasAttribute(this.disclosure.attributeName);
    this.element.addEventListener('click', this.click.bind(this));

    switch (this.disclosure.type) {
      case Disclosure.EXPAND:
        this.observer = new MutationObserver(this.mutate.bind(this));
        this.observe();
        break;
    }
  }

  observe () {
    this.observer.observe(this.element, { attributes: true });
  }

  click (e) {
    console.log('click');
    this.disclosure.change(this.hasAttribute);
  }

  mutate (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === this.disclosure.attributeName) this.disclosure.change(this.disclosed); // TODO
    });
  }

  apply (value) {
    if (!this.hasAttribute) return;
    if (this.observer) this.observer.disconnect();
    this.element.setAttribute(this.disclosure.attributeName, value);
    if (this.observer) this.observe();
  }

  get disclosed () {
    return this.element.getAttribute(this.disclosure.attributeName) === 'true';
  }
}

export { DisclosureButton };
