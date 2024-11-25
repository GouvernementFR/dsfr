const footer = `<div class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">Libellé bouton</button>
<button class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left fr-btn--secondary">Libellé bouton</button>
</div>`;

const body = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>`;

const modalArgTypes = {
  id: {
    control: 'text',
    description: 'Identifiant unique de la modale',
    type: {
      value: 'string',
      required: true
    }
  },
  title: {
    control: 'text',
    description: 'Titre de la modale',
    type: {
      value: 'string'
    }
  },
  icon: {
    control: 'text',
    description: 'Nom de l\'icône associée au titre',
    type: {
      value: 'string'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille de la modale',
    options: ['sm', 'md', 'lg']
  },
  top: {
    control: 'boolean',
    description: 'Positionnement de la modale en haut en mobile',
    type: {
      value: 'string'
    }
  },
  concealingBackdrop: {
    control: 'boolean',
    description: 'Fermeture au clic à l\'exterieur de la modale',
    type: {
      value: 'boolean'
    }
  },
  markup: {
    control: { type: 'select' },
    description: 'Type de balise HTML',
    options: ['div', 'dialog']
  },
  footer: {
    control: 'boolean',
    description: 'Modale avec footer',
    type: {
      value: 'boolean'
    }
  }
};

const modalArgs = {
  id: 'modal',
  markup: 'dialog',
  title: 'Titre de la modale',
  size: 'md',
  icon: 'info-line',
  concealingBackdrop: true,
  top: false,
  footer: false
};

const modalProps = (args) => {
  const modal = {
    id: args.id || modalArgs.id,
    markup: args.markup || modalArgs.markup,
    title: args.title || modalArgs.title,
    icon: args.icon || undefined,
    size: args.size || modalArgs.size,
    top: args.top || modalArgs.top,
    concealingBackdrop: args.concealingBackdrop,
    footer: args.footer === true ? footer : undefined,
    body: body
  };

  return modal;
};

export { modalArgTypes, modalArgs, modalProps };
