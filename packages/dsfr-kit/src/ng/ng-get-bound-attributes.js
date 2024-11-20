import lookup from './attributes-lookup.json';

export const ngGetBoundAttributes = (schema, element = null) => {
    const attributes = element ? schema?.[element]?.attributes : schema.element?.attributes;
    if (!attributes || !Array.isArray(attributes) || attributes.length === 0) return '';
    let boundAttributes = '';
    for (const attribute of attributes) {
        const bound = lookup[attribute] || (attribute.indexOf('data') === 0 ? attribute : `attr.${attribute}`);
        boundAttributes += ` [${bound}]="props.attributes['${attribute}']"`;
    }
    return boundAttributes;
}
