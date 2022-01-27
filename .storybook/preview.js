// import fetch from 'node-fetch';

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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'system',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['system', 'light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

// Function to obtain the intended theme
// const getTheme = (themeName) => {
//   console.log('themeName', themeName);
// }

// const withThemeProvider=(Story,context)=>{
//   const theme = getTheme(context.globals.theme);
//   return (
//       <Story {...context} />
//   )
// }
// export const decorators = [withThemeProvider];
