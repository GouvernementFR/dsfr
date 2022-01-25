// Accordion.stories.js|jsx

// const fs = require('fs');
// const ejs = require('ejs');
// const template = require('../../../tool/utilities/template');
// const root = require('../../../tool/utilities/root');

// const templatePath = '/Users/zellerbaptiste/Code/dsfr/src/component/accordion/template/ejs/accordion.ejs';
// const template = fs.readFileSync(templatePath, {
//   encoding: 'utf8',
//   flag: 'r'
// });
// const accordionEjs = template('./template/accordion.ejs');
// const accordionEjs = require('./template/accordion.ejs');
// var accordionEjs = document.getElementById('users').innerHTML;
// const html = ejs.render(template, { id: 'test', label: 'test' });
// console.log('template', template);
// console.log(html);

// export default {
//   title: 'Composant/Accordéon (accordion)',
//   argTypes: {
//     title: { control: 'text' },
//     content: { control: 'text' }
//   }
// };

// const accordionContent = `<!-- données de test -->
//       <div>
//         <h4 class="fr-h4">Contenu </h4>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing, <a href="test" target="_blank">link test</a> incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
//         <ul>
//           <li>list item</li>
//           <li>list item</li>
//           <li>
//             list item
//             <ul>
//               <li>list item niveau 2</li>
//               <li>list item niveau 2</li>
//               <li>list item niveau 2</li>
//             </ul>
//           </li>
//         </ul>
//       </div>`;

// const accordionTemplate = (args) =>
// `<section class="fr-accordion">
//   <h3 class="fr-accordion__title">
//       <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-93">${args.title}</button>
//   </h3>
//   <div class="fr-collapse" id="accordion-93">
//     ${args.content}
//   </div>
// </section>
// `;

// export const Seul = accordionTemplate.bind({});
// Seul.args = {
//   title: 'Intitulé accordéon seul',
//   content: accordionContent
// };

// const accordionGroupTemplate = (args) =>
// `<ul class="fr-accordions-group">
//   <li>
//     <section class="fr-accordion">
//       <h3 class="fr-accordion__title">
//         <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-101">${args.title}</button>
//       </h3>
//       <div class="fr-collapse" id="accordion-101">
//         ${args.content}
//       </div>
//     </section>
//   </li>
//   <li>
//     <section class="fr-accordion">
//       <h3 class="fr-accordion__title">
//         <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-102">${args.title}</button>
//       </h3>
//       <div class="fr-collapse" id="accordion-102">
//         ${args.content}
//       </div>
//     </section>
//   </li>
//   <li>
//     <section class="fr-accordion">
//       <h3 class="fr-accordion__title">
//         <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-103">${args.title}</button>
//       </h3>
//       <div class="fr-collapse" id="accordion-103">
//         ${args.content}
//       </div>
//     </section>
//   </li>
//   <li>
//     <section class="fr-accordion">
//       <h3 class="fr-accordion__title">
//         <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-104">${args.title}</button>
//       </h3>
//       <div class="fr-collapse" id="accordion-104">
//         ${args.content}
//       </div>
//     </section>
//   </li>
// </ul>`;

// export const Groupe = accordionGroupTemplate.bind({});
// Groupe.args = {
//   title: 'Intitulé accordéon groupe',
//   content: accordionContent
// };
