import fetch from 'node-fetch';

// export const loaders = [
//   async () => ({
//     alertTemplate: await fetch('/alert.ejs').then((response) => {
//       if (response.ok) {
//         response.blob().then((blob) => {
//           blob.text().then((data) => {
//             return data;
//           });
//         });
//       } else {
//         console.log('Mauvaise réponse du réseau');
//       }
//     }),
//   }),
// ];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
