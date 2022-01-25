// // Header.stories.js|jsx

// export default {
//   title: 'Composant/En-tête (header)',
//   argTypes: {
//     labelLogo: { control: 'text' }
//   }
// };

// const headerTemplate = (args) =>
// `<header role="banner" class="fr-header">
//   <div class="fr-header__body">
//       <div class="fr-container">
//           <div class="fr-header__body-row">
//               <div class="fr-header__brand fr-enlarge-link">
//                   <div class="fr-header__brand-top">
//                       <div class="fr-header__logo">
//                           <a href="/" title="Accueil - [À MODIFIER - nom de l’entité (ministère , secrétariat d‘état, gouvernement)]">
//                               <p class="fr-logo">${args.labelLogo}</p>
//                           </a>
//                       </div>
//                       <div class="fr-header__navbar">
//                           <button class="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-422" aria-haspopup="menu" id="button-423" title="Menu">
//                               Menu
//                           </button>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
//   <div class="fr-header__menu fr-modal" id="modal-422" aria-labelledby="button-423">
//       <div class="fr-container">
//           <button class="fr-link--close fr-link" aria-controls="modal-422">Fermer</button>
//           <nav class="fr-nav" id="navigation-424" role="navigation" aria-label="Menu principal">
//               <ul class="fr-nav__list">
//                   <li class="fr-nav__item">
//                       <a class="fr-nav__link" href="#" target="_self">accès direct</a>
//                   </li>
//                   <li class="fr-nav__item">
//                       <a class="fr-nav__link" href="#" target="_self">accès direct</a>
//                   </li>
//                   <li class="fr-nav__item">
//                       <a class="fr-nav__link" href="#" target="_self">accès direct</a>
//                   </li>
//                   <li class="fr-nav__item">
//                       <a class="fr-nav__link" href="#" target="_self">accès direct</a>
//                   </li>
//               </ul>
//           </nav>
//       </div>
//   </div>
// </header>`;

// export const Minimal = headerTemplate.bind({});
// Minimal.args = {
//   labelLogo: 'Intitulé<br>officiel'
// };
