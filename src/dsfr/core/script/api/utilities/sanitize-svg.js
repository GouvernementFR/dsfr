/**
 * Allowed SVG/HTML elements for inline SVG content.
 * Only standard SVG presentational and structural elements are permitted.
 */
const ALLOWED_TAGS = new Set([
  'svg', 'g', 'defs', 'symbol', 'use', 'title', 'desc', 'style',
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
const DANGEROUS_CSS = /@import|expression\s*\(|url\s*\(\s*['"]?\s*(?:javascript|data|vbscript):|behavior\s*:|-moz-binding/i;

const CSS_ESCAPE_REGEXP = /^-?\d|^-$|[^a-zA-Z0-9_-]/g;

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
          continue;
        }
        if (URL_ATTRIBUTES.has(name) && !isAllowedUrlAttributeValue(attr.value)) {
          child.removeAttribute(attr.name);
          continue;
        }
        if (name === 'style') {
          const sanitizedStyle = sanitizeCssContent(attr.value);
          if (sanitizedStyle) child.setAttribute(attr.name, sanitizedStyle);
          else child.removeAttribute(attr.name);
        }
      }

      if (tag === 'style') {
        const sanitizedStyleContent = sanitizeCssContent(child.textContent);
        if (!sanitizedStyleContent) {
          element.removeChild(child);
          continue;
        }
        child.textContent = sanitizedStyleContent;
      }

      sanitizeElement(child);
    }
  }
}

/**
 * Remove CSS payloads commonly used for script execution.
 * Returns an empty string when the CSS contains dangerous patterns.
 *
 * @param {string} css
 * @returns {string}
 */
function sanitizeCssContent (css) {
  const content = String(css || '').trim();
  if (!content) return '';
  if (DANGEROUS_CSS.test(content)) return '';
  return content;
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
      continue;
    }
    if (URL_ATTRIBUTES.has(name) && !isAllowedUrlAttributeValue(attr.value)) {
      svg.removeAttribute(attr.name);
    }
  }
  sanitizeElement(svg);
  return svg;
}

/**
 * Validate URL-valued attributes for inline SVG usage.
 * Allows same-document fragments (#id) and same-origin URLs only.
 *
 * @param {string} value
 * @returns {boolean}
 */
function isAllowedUrlAttributeValue (value) {
  const url = String(value || '').trim();
  if (!url) return true;
  if (url.charAt(0) === '#') return true;
  return isSameOrigin(url);
}

/**
 * Check whether a URL is same-origin as the current page.
 * Non-empty relative URLs are considered same-origin.
 *
 * @param {string} url
 * @returns {boolean}
 */
function isSameOrigin (url) {
  if (!url) return false;
  try {
    const link = document.createElement('a');
    link.href = url;

    const protocol = (link.protocol || window.location.protocol).toLowerCase();
    if (protocol !== 'http:' && protocol !== 'https:') return false;

    const hostname = link.hostname || window.location.hostname;
    const port = link.port || (protocol === 'https:' ? '443' : '80');
    const currentPort = window.location.port || (window.location.protocol === 'https:' ? '443' : '80');

    return protocol === window.location.protocol && hostname === window.location.hostname && port === currentPort;
  } catch (e) {
    return false;
  }
}

/**
 * Escape a CSS identifier safely.
 * Uses native CSS.escape when available, with an IE11-compatible fallback.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeCssIdentifier (value) {
  const input = String(value || '');
  if (window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(input);
  }

  return input.replace(CSS_ESCAPE_REGEXP, character => `\\${character}`);
}

export { sanitizeSvg, isSameOrigin, escapeCssIdentifier };
