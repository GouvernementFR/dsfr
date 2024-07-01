import ejsRenderer from '../../../../renderer.js';

const renderTag = (data) => ejsRenderer.render('tag.ejs', data);

const renderTagsGroup = (data) => ejsRenderer.render('tags-group.ejs', data);

export { renderTag, renderTagsGroup };
