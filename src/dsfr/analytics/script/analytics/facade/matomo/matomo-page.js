import api from '../../../../api';
import { Page } from '../../collector/provider/page';
import { validateString, validateArray } from '../../utils/type-validator';

const NATIVE_REFS = [
  '#/context/page/path',
  '#/context/page/title',
  '#/context/page/referrer',
  '#/context/user/uid',
  '#/context/search/keyword',
  '#/context/search/category',
  '#/context/search/results'
];

const RESERVED_REFS = ['#/context/site/environment'];

const CONSENT_REFS = ['#/context/user/email'];

const toDimensionId = (id) => {
  const number = typeof id === 'string' && id.trim() !== '' ? Number(id) : id;
  return typeof number === 'number' && number > 0 && number % 1 === 0 ? number : null;
};

class MatomoPage extends Page {
  constructor (config, context, dimensions, provider) {
    super(config);
    this._context = context || {};
    this._dimensions = dimensions;
    this._provider = provider;
    this._customDimensions = [];
  }

  reset (clear = false) {
    super.reset(clear);
    this.customDimensions = this._dimensions;
  }

  get customDimensions () {
    return this._customDimensions;
  }

  set customDimensions (dimensions) {
    const validDimensions = validateArray(dimensions, 'customDimensions');
    if (validDimensions === null) return;
    this._customDimensions = validDimensions;
  }

  get layer () {
    const layer = super.layer;

    const resolved = this._customDimensions
      .filter((dimension) => {
        if (!dimension || typeof dimension !== 'object') {
          api.inspector.warn(`analytics dimension '${dimension}' is invalid, expecting an object with $ref or value and id, mapping ignored`);
          return false;
        }
        if (toDimensionId(dimension.id) === null) {
          api.inspector.warn(`analytics dimension id '${dimension.id}' is invalid, expecting a positive integer, mapping ignored`);
          return false;
        }
        const { $ref } = dimension;
        if (NATIVE_REFS.includes($ref)) {
          api.inspector.warn(`analytics dimension '${$ref}' is already sent natively, no need to map it, mapping ignored`);
          return false;
        }
        if (RESERVED_REFS.includes($ref)) {
          api.inspector.warn(`analytics dimension '${$ref}' is reserved and cannot be mapped, use another key`);
          return false;
        }
        if (CONSENT_REFS.includes($ref) && !this._provider.hasConsent) return false;
        return true;
      })
      .map(({ $ref, id, value }) => ({
        id: toDimensionId(id),
        value: validateString(
          $ref
            ? $ref.replace('#/context/', '').split('/').reduce((obj, key) => obj && obj[key], this._context)
            : value,
          'customDimensions.value'
        )
      }))
      .filter(({ value }) => value !== null && value !== '');

    if (resolved.length > 0) {
      layer.customDimensions = Object.fromEntries(
        resolved.map(({ id, value }) => [id, value])
      );
    }

    return layer;
  }
}

export { CONSENT_REFS, toDimensionId };
export default MatomoPage;
