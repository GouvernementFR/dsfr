import { EJSLoader } from './ejs-loader';

export default {
  title: 'Composant/Alerte (alert)',
};

const loader = new EJSLoader('/views/component/alert/template/ejs/alert.ejs');

const alertTemplate = (args, data) => {
  console.log('tpl', data.loaded, args);
  return data.loaded.content;
};

export const Alert = alertTemplate.bind({});
Alert.args = {
  alert: {
    title: 'Un titre',
    text: 'un texte'
  }
};
Alert
  .loaders = [
    async (data) => await loader.render(data.args)
  ];
