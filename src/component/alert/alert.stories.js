/* global ejs */
// import ejs from 'ejs';
// import { storiesOf } from '@storybook/html';
// import alertTemplate from './template/ejs/alert.ejs';

// const template = fetch('/alert.ejs')
//   .then((response) => {
//     if (response.ok) {
//       response.blob().then((blob) => {
//         blob.text().then((data) => {
//           loadTemplate(data);
//         });
//       });
//     } else {
//       console.log('Mauvaise réponse du réseau');
//     }
//   })
//   .catch(function (error) {
//     console.log(
//       "Il y a eu un problème avec l'opération fetch: " + error.message
//     );
//   });

// const fn = ejs.compile(str, { client: true });
// fn(data, null, function (path, d) {
//   // include callback
//   // path -> 'file'
//   // d -> {person: 'John'}
//   // Put your code here
//   // Return the contents of file as a string
// }); // returns rendered string

// const ejs;

// function loadTemplate(data) {}

export default {
  title: 'Composant/Alerte (alert)',
  argTypes: {
    title: { control: 'text' }
  }
};

// const people = ['geddy', 'neil', 'alex'];
// const html = ejs.render(alertTemplate, { id: 'un uid', type: 'error' });

// eslint-disable-next-line no-undef
// const html = ejs.render('<div><%= people.join(", "); %></div>', {
//   people: people
// });
// With jQuery:
// $('#output').html(html);
// Vanilla JS:
// document.getElementById('output').innerHTML = html;

// console.log('ejs', ejs);
// console.log('html', html);

const alertTemplate = (args, loaders) => `
<p>${args.title}</p><div class="wrapper">${loaders.alertTemplate}</div>`;

// storiesOf('Alerte', module)
// .add('with text', () => alertTemplate({ id: 'an id', type: 'warning' }));

export const Alert = alertTemplate.bind({});
Alert.args = {
  title: 'Un titre'
};
Alert.loaders = [
  async () => ({
    alertTemplate: await fetch('/alert.ejs').then((response) => {
      if (response.ok) {
        response.blob().then((blob) => {
          blob.text().then((template) => {
            const html = ejs.render(template, { alert: { id: 'un id', type: 'info', title: 'Information Covid', text: 'Information : cliquer sur la croix pour fermer l\'alerte' } });
            const wrapper = document.querySelector('.wrapper');
            wrapper.insertAdjacentHTML('beforeend', html);
            return html;
          });
        });
      } else {
        console.log('Mauvaise réponse du réseau');
      }
    })
  })
];
