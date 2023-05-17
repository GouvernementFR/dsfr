/**
 * Return an object of query params or null
 *
 * @method
 * @name searchParams
 * @param {string} url - an url
 * @returns {Object} object of query params or null
 */

const searchParams = (url) => {
  if (url && url.search) {
    const params = new URLSearchParams(window.location.search);
    const entries = params.entries();
    return Object.fromEntries(entries);
  }
  return null;
};

export default searchParams;
