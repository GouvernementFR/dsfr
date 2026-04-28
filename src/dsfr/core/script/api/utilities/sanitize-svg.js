/**
 * Allowed SVG/HTML elements for inline SVG content.
 * Only standard SVG presentational and structural elements are permitted.
 */
const ALLOWED_TAGS = new Set([
  'svg', 'g', 'defs', 'symbol', 'use', 'title', 'desc',
  'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon',
  'text', 'tspan', 'textpath', 'image', 'clippath', 'mask',
  'lineargradient', 'radialgradient', 'stop', 'pattern', 'marker',
  'filter', 'fegaussianblur', 'fecolormatrix', 'feblend', 'fecomposite',
  'feflood', 'femerge', 'femergenode', 'feoffset', 'view', 'switch'
]);

/**
 * Attributes that must not start with "javascript:" or "data:" (URL-type attributes).
 */
const URL_ATTRIBUTES = new Set([
  'href', 'xlink:href', 'src', 'action', 'formaction'
]);

const DANGEROUS_PROTOCOL = /^\s*(?:javascript|data|vbscript)\s*:/i;

/**
 * Recursively sanitize an SVG element in-place:
 * - removes elements not in ALLOWED_TAGS
 * - removes all event-handler attributes (on*)
 * - removes dangerous protocol values from URL attributes
 *
 * @param {Element} element
 */
function sanitizeElement (element) {
  for (const child of Array.from(element.childNodes)) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = child.tagName.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) {
        element.removeChild(child);
        continue;
      }
      // Remove dangerous attributes
      for (const attr of Array.from(child.attributes)) {
        const name = attr.name.toLowerCase();
        if (name.startsWith('on')) {
          child.removeAttribute(attr.name);
          continue;
        }
        if (URL_ATTRIBUTES.has(name) && DANGEROUS_PROTOCOL.test(attr.value)) {
          child.removeAttribute(attr.name);
        }
      }
      sanitizeElement(child);
    }
  }
}

/**
 * Sanitize an SVG DOM element and return it.
 * Mutates the element in-place.
 *
 * @param {SVGElement} svg
 * @returns {SVGElement}
 */
function sanitizeSvg (svg) {
  // Remove dangerous attributes on the root <svg> element itself
  for (const attr of Array.from(svg.attributes)) {
    const name = attr.name.toLowerCase();
    if (name.startsWith('on')) {
      svg.removeAttribute(attr.name);
      continue;
    }
    if (URL_ATTRIBUTES.has(name) && DANGEROUS_PROTOCOL.test(attr.value)) {
      svg.removeAttribute(attr.name);
    }
  }
  sanitizeElement(svg);
  return svg;
}

/**
 * Check whether a URL is same-origin as the current page.
 * Relative URLs are always considered same-origin.
 *
 * @param {string} url
 * @returns {boolean}
 */
function isSameOrigin (url) {
  if (!url) return false;
  try {
    const parsed = new URL(url, window.location.href);
    return parsed.origin === window.location.origin;
  } catch {
    return false;
  }
}

export { sanitizeSvg, isSameOrigin };
