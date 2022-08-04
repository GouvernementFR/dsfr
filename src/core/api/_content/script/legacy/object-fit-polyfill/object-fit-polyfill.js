/**
 * Polyfill pour IE11 qui ne supporte pas object-fit. On met l'image en background sur l'élément img et un svg vide en source
 */

class ObjectFitPolyfill {
  constructor ($selectors) {
    for (let i = 0; i < $selectors.length; i++) {
      const images = [];// document.querySelectorAll($selectors[i]); TODO: erreur sur IE11
      let img;
      for (let j = 0; j < images.length; j++) {
        img = images[i];
        (img.runtimeStyle || img.style).background = 'url("' + img.src + '") no-repeat 50%/cover';
        img.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + img.width + '\' height=\'' + img.height + '\' %3E%3C/svg%3E';
      }
    }
  }
}

export { ObjectFitPolyfill };
