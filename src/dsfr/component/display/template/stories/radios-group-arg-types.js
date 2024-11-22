const getradioProps = (id, label, pictogram, hint) => {
  const radio = {
    type: 'radio',
    inline: false,
    data: {
      id: `fr-radios-theme-${id}`,
      label: label,
      value: id,
      size: 'md',
      name: 'fr-radios-theme',
      rich: true,
      hint: hint,
      pictogram: {
        name: pictogram
      }
    }
  };

  return radio;
};

const radiosGroupProps = (args) => {
  const radiosGroup = {
    id: 'display-fieldset',
    legend: 'Choisissez un thème pour personnaliser l’apparence du site.',
    inline: false,
    choice: true,
    elements: [
      getradioProps('light', 'Thème clair', 'sun'),
      getradioProps('dark', 'Thème sombre', 'moon'),
      getradioProps('system', 'Système', 'system', 'Utilise les paramètres système')
    ]
  };

  return radiosGroup;
};

export { radiosGroupProps };
