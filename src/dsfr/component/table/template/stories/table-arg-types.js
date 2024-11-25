const tableHeaderDetails = `
  <p class='fr-table__detail'>Nombre de lignes sélectionnées</p>
`;

const tableHeaderButtons = `
  <ul
      class='fr-btns-group fr-btns-group--right fr-btns-group--inline-md fr-btns-group--icon-left'
  >
      <li>
          <button
              id='table-header-button-primary-7842'
              class='fr-btn fr-icon-settings-5-line fr-btn--icon-left fr-btn--secondary'
          >
              Action groupée
          </button>
      </li>
      <li>
          <button
              id='table-header-button-secondary-7843'
              class='fr-btn fr-icon-settings-5-line fr-btn--icon-left fr-btn--secondary'
          >
              Action groupée
          </button>
      </li>
  </ul>
`;

const tableHeaderSegmented = `
  <fieldset class='fr-segmented fr-segmented--no-legend'>
      <legend class='fr-segmented__legend'>Type d&#39;affichage</legend>
      <div class='fr-segmented__elements'>
          <div class='fr-segmented__element'>
              <input
                  value='1'
                  checked
                  type='radio'
                  id='table-header-segmented-table-7845'
                  name='table-header-segmented-table'
              />
              <label
                  class='fr-icon-table-line fr-label'
                  for='table-header-segmented-table-7845'
              >
                  Tableau
              </label>
          </div>
          <div class='fr-segmented__element'>
              <input
                  value='2'
                  type='radio'
                  id='table-header-segmented-list-7846'
                  name='table-header-segmented-table'
              />
              <label
                  class='fr-icon-list-unordered fr-label'
                  for='table-header-segmented-list-7846'
              >
                  Liste
              </label>
          </div>
      </div>
  </fieldset>
`;

const tableFooterSelect = `
  <div class='fr-table__footer--start'>
      <p class='fr-table__detail'>215 lignes</p>
      <div class='fr-select-group'>
          <label class='fr-sr-only fr-label' for='table-footer-select-7847'>
              Nombre de lignes par page
          </label>
          <select class='fr-select' aria-describedby='table-footer-select-7847-messages' id='table-footer-select-7847' name='table-footer-select-7847'>
              <option value='' selected disabled hidden>Nombre de lignes par page</option>
              <option value='4'>4 lignes par page</option>
              <option value='10'>10 lignes par page</option>
              <option value='20'>20 lignes par page</option>
          </select>
          <div class='fr-messages-group' id='table-footer-select-7847-messages' aria-live='polite'>
          </div>
      </div>
  </div>
`;

const tableFooterPagination = `
  <div class='fr-table__footer--middle'>
      <nav role='navigation' class='fr-pagination' aria-label='Pagination' data-fr-analytics-page-total='3'>
          <ul class='fr-pagination__list'>
              <li>
                  <a class='fr-pagination__link fr-pagination__link--first' id='table-footer-pagination-7851' title='Première page' aria-disabled='true' role='link'>
                      Première page
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label' id='table-footer-pagination-7852' title='Précédente' aria-disabled='true' role='link'>
                      Précédente
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link' id='table-footer-pagination-7848' aria-current='page' title='Page 1'>
                      1
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link' id='table-footer-pagination-7849' href='#' title='Page 2'>
                      2
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link fr-hidden fr-unhidden-lg' id='table-footer-pagination-7850' href='#' title='Page 3'>
                      3
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label' id='table-footer-pagination-7853' href='#' title='Suivante'>
                      Suivante
                  </a>
              </li>
              <li>
                  <a class='fr-pagination__link fr-pagination__link--last' id='table-footer-pagination-7854' href='#' title='Dernière page'>
                      Dernière page
                  </a>
              </li>
          </ul>
      </nav>
  </div>
`;

const tableFooterButtons = `
  <div class='fr-table__footer--end'>
      <ul class='fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-md'>
          <li>
              <button id='table-footer-button-primary-7855' class='fr-btn'>Action tableau</button>
          </li>
          <li>
              <button id='table-footer-button-secondary-7856' class='fr-btn fr-btn--secondary'>Action tableau</button>
          </li>
      </ul>
  </div>
`;

const srOnlyCellSelect = '<span class="fr-sr-only">Sélectionner</span>';

const getCheckbox = (id) => {
  return `
    <div class='fr-checkbox-group fr-checkbox-group--sm'>
        <input name='row-select' id='table-select-checkbox--${id}' type='checkbox'>
        <label class='fr-label' for='table-select-checkbox--${id}'>
            Sélectionner la ligne ${id + 1}
        </label>
    </div>
  `;
};

const tableArgTypes = {
  caption: {
    control: 'text',
    description: 'Titre du tableau',
    type: {
      value: 'string',
      required: true
    },
    table: {
      category: 'caption'
    }
  },
  captionDetail: {
    control: 'text',
    description: 'Description précise du tableau',
    type: {
      value: 'string'
    },
    table: {
      category: 'caption'
    }
  },
  noCaption: {
    control: 'boolean',
    description: 'Cache le texte de la caption',
    table: {
      category: 'caption'
    }
  },
  captionBottom: {
    if: { arg: 'noCaption', eq: false },
    control: 'boolean',
    description: 'Positionne la caption en bas',
    table: {
      category: 'caption'
    }
  },
  bordered: {
    control: 'boolean',
    description: 'ajoute des séparateurs entre chaque ligne',
    table: {
      category: 'variant'
    }
  },
  noScroll: {
    control: 'boolean',
    description: 'Désactive le scroll horizontal',
    table: {
      category: 'variant'
    }
  },
  size: {
    control: { type: 'select' },
    description: 'Taille des espacements du tableau',
    options: ['sm', 'md', 'lg'],
    table: {
      category: 'variant'
    }
  },
  hasHeader: {
    control: 'boolean',
    description: 'Affiche un exemple d\'en-tête du tableau',
    table: {
      category: 'header'
    }
  },
  hasHeaderSegmented: {
    if: { arg: 'hasHeader', eq: true },
    control: 'boolean',
    description: 'Affiche un contrôle segmenté dans l\'en-tête du tableau',
    table: {
      category: 'header'
    }
  },
  hasHeaderDetails: {
    if: { arg: 'hasHeader', eq: true },
    control: 'boolean',
    description: 'Affiche un detail dans l\'en-tête du tableau',
    table: {
      category: 'header'
    }
  },
  hasHeaderButtons: {
    if: { arg: 'hasHeader', eq: true },
    control: 'boolean',
    description: 'Affiche des boutons d\'actions dans l\'en-tête du tableau',
    table: {
      category: 'header'
    }
  },
  hasFooter: {
    control: 'boolean',
    description: 'Affiche un exemple de pied de page du tableau',
    table: {
      category: 'footer'
    }
  },
  hasFooterSelect: {
    if: { arg: 'hasFooter', eq: true },
    control: 'boolean',
    description: 'Affiche le nombre d\'éléments par page dans le pied de page du tableau',
    table: {
      category: 'footer'
    }
  },
  hasFooterPagination: {
    if: { arg: 'hasFooter', eq: true },
    control: 'boolean',
    description: 'Affiche la pagination dans le pied de page du tableau',
    table: {
      category: 'footer'
    }
  },
  hasFooterButtons: {
    if: { arg: 'hasFooter', eq: true },
    control: 'boolean',
    description: 'Affiche des boutons d\'actions dans le pied de page du tableau',
    table: {
      category: 'footer'
    }
  },
  table: {
    control: 'object',
    description: 'contenu du tableau',
    type: {
      value: 'array'
    },
    table: { category: 'table' }
  }
};

const getSimpleTableArgs = (col = 4, row = 4) => {
  const content = 'Lorem ipsum dolor sit ame';
  const thead = Array.from(Array(1), () => []);
  const tbody = Array.from(Array(row), () => []);

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (r === 0) thead[0].push({ content: 'th' + c });
      tbody[r].push({ content });
    }
  }

  return { thead, tbodies: [tbody] };
};

const getSelectableTableArgs = () => {
  const table = getSimpleTableArgs();

  table.thead.forEach((row) => {
    row.unshift({
      attributes: {
        role: 'columnheader'
      },
      classes: ['fr-cell--fixed'],
      content: srOnlyCellSelect
    });
  });

  table.tbodies.forEach((tbody) => {
    tbody.forEach((row, index) => {
      row.unshift({
        markup: 'th',
        attributes: { scope: 'row' },
        classes: ['fr-cell--fixed'],
        content: getCheckbox(index)
      });
    });
  });

  return table;
};

const getComplexTableArgs = () => {
  return {
    thead: [
      [
        { attributes: { role: 'columnheader', rowspan: 2, id: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: 'Horaires' }, { content: 'Lundi', attributes: { id: 'complex-thead-0-col-1' } }, { content: 'Mardi', attributes: { id: 'complex-thead-0-col-2' } }, { attributes: { colspan: 2, id: 'complex-thead-0-col-3' }, content: 'Mercredi & Jeudi<br>Exemple de 2 cellules fusionnées dans le Header' }, { content: 'Vendredi', attributes: { id: 'complex-thead-0-col-4' } }], [{ attributes: { headers: 'complex-thead-0-col-1', id: 'complex-thead-1-col-0' }, content: 'Groupes 1 & 2' }, { attributes: { headers: 'complex-thead-0-col-2', id: 'complex-thead-1-col-1' }, content: 'Groupes 1 & 2' }, { attributes: { headers: 'complex-thead-0-col-3', id: 'complex-thead-1-col-2' }, content: 'Groupe 1' }, { attributes: { headers: 'complex-thead-0-col-3', id: 'complex-thead-1-col-3' }, content: 'Groupe 2' }, { attributes: { headers: 'complex-thead-0-col-4', id: 'complex-thead-1-col-4' }, content: 'Groupes 1 & 2' }
      ]
    ],
    tbodies: [
      [
        [
          { markup: 'th', attributes: { id: 'complex-row-0', headers: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: '8h' }, { attributes: { headers: 'complex-row-0 complex-thead-0-col-1 complex-thead-1-col-1' }, content: 'Français' }, { attributes: { headers: 'complex-row-0 complex-thead-0-col-2 complex-thead-1-col-2' }, content: 'Mathématiques' }, { attributes: { headers: 'complex-row-0 complex-thead-0-col-3 complex-thead-1-col-3' }, content: 'LV1' }, { attributes: { headers: 'complex-row-0 complex-thead-0-col-3 complex-thead-1-col-4' }, content: 'Histoire - Géographie' }, { attributes: { headers: 'complex-row-0 complex-thead-0-col-4 complex-thead-1-col-4' }, content: 'EPS' }], [{ markup: 'th', attributes: { id: 'complex-row-1', headers: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: '9h' }, { attributes: { colspan: 5, headers: 'complex-row-1 complex-thead-0-col-1 complex-thead-0-col-2 complex-thead-0-col-3 complex-thead-0-col-4 complex-thead-1-col-1 complex-thead-1-col-2 complex-thead-1-col-3 complex-thead-1-col-4 complex-thead-1-col-4' }, content: 'Etude dirigée Exemple de colspan sur toute la ligne' }], [{ markup: 'th', attributes: { id: 'complex-row-2', headers: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: '10h' }, { attributes: { headers: 'complex-row-2 complex-thead-0-col-1 complex-thead-1-col-1' }, content: 'Mathématiques' }, { attributes: { headers: 'complex-row-2 complex-thead-0-col-2 complex-thead-1-col-2' }, content: 'Histoire - Géographie' }, { attributes: { rowspan: 2, headers: 'complex-row-2 complex-row-3 complex-thead-0-col-3 complex-thead-1-col-3' }, content: 'Arts appliqués' }, { attributes: { headers: 'complex-row-2 complex-thead-0-col-3 complex-thead-1-col-4' }, content: 'LV2' }, { attributes: { headers: 'complex-row-2 complex-thead-0-col-4 complex-thead-1-col-4' }, content: 'Sciences' }], [{ markup: 'th', attributes: { id: 'complex-row-3', headers: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: '11h' }, { attributes: { headers: 'complex-row-3 complex-thead-0-col-1 complex-thead-1-col-1' }, content: 'Français' }, { attributes: { headers: 'complex-row-3 complex-thead-0-col-2 complex-thead-1-col-2' }, content: 'EPS' }, { attributes: { headers: 'complex-row-3 complex-thead-0-col-3 complex-thead-1-col-4' }, content: 'Histoire - Géographie' }, { attributes: { headers: 'complex-row-3 complex-thead-0-col-4 complex-thead-1-col-4' }, content: 'Physique - Chimie' }], [{ markup: 'th', attributes: { id: 'complex-row-4', headers: 'complex-thead-0-col-0' }, classes: ['fr-cell--fixed'], content: '12h' }, { attributes: { headers: 'complex-row-4 complex-thead-0-col-1 complex-thead-1-col-1' }, content: 'Sciences' }, { attributes: { headers: 'complex-row-4 complex-thead-0-col-2 complex-thead-1-col-2' }, content: 'LV1' }, { attributes: { colspan: 2, headers: 'complex-row-4 complex-thead-0-col-3 complex-thead-1-col-3 complex-thead-1-col-4' }, content: 'EPS Exemple de colspan sur 2 cellules' }, { attributes: { headers: 'complex-row-4 complex-thead-0-col-4 complex-thead-1-col-4' }, content: 'LV2' }
        ]
      ]
    ]
  };
};

const getMiscellaneousTableArgs = () => {
  return {
    thead: [
      [
        {
          attributes: {
            role: 'columnheader'
          },
          classes: [
            'fr-cell--fixed'
          ],
          content: '<span class="fr-sr-only">Sélectionner</span>'
        },
        {
          content: '<span class="fr-cell__title">Titre par défaut</span>'
        },
        {
          content: '<div class="fr-cell__title">Titre par défaut</div><div class="fr-cell__desc">Texte par défaut</div>'
        },
        {
          content: '<div class="fr-cell--sort"><span class="fr-cell__title">Titre par défaut</span> <button type="button" id="table-miscellaneous-thead-sort-asc-desc"  class="fr-btn--sort fr-btn fr-btn--sm">Trier</button></div>'
        },
        {
          content: '<button aria-sort="descending" type="button" id="table-miscellaneous-thead-sort-descending"  class="fr-btn--sort fr-btn fr-btn--sm">Trier</button>'
        },
        {
          content: '<span class="fr-cell__desc">Texte par défaut</span> <button aria-describedby="table-miscellaneous-thead-tooltip" type="button" id="table-default-button-3"  class="fr-ml-2v fr-btn--tooltip fr-btn fr-btn--sm">Texte par défaut</button><span class="fr-tooltip fr-placement" id="table-miscellaneous-thead-tooltip" role="tooltip">Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</span>'
        },
        {
          content: '<button aria-sort="ascending" type="button" id="table-miscellaneous-thead-sort-ascending"  class="fr-btn--sort fr-btn fr-btn--sm">Trier</button>'
        },
        {
          content: '<p id="table-miscellaneous-thead-badge"  class="fr-badge fr-badge--info">Libellé par défaut</p>'
        },
        {
          content: '<span class="fr-cell__desc">Texte par défaut</span>'
        },
        {
          content: '<span class="fr-cell__title">Titre par défaut</span>'
        },
        {
          content: '<span class="fr-cell__title">Titre par défaut</span><span class="fr-cell__desc fr-ml-2v">Texte par défaut</span>'
        },
        {
          content: '<span class="fr-icon-arrow-right-s-line fr-icon--sm" aria-hidden="true"></span>Texte par défaut'
        }
      ]
    ],
    tbodies: [
      [
        [
          {
            markup: 'th',
            attributes: {
              scope: 'row'
            },
            classes: [
              'fr-cell--fixed'
            ],
            content: '<div class="fr-checkbox-group fr-checkbox-group--sm"><input name="row-select" checked="true" id="table-miscellaneous-select-row-checkbox-1" type="checkbox"><label class="fr-label" for="table-miscellaneous-select-row-checkbox-1">  Sélectionner la ligne 1 : Titre par défaut  </label></div><span class="fr-cell__title">Titre par défaut</span>'
          },
          {
            content: 'Texte par défaut'
          },
          {
            content: '<p class="fr-mb-2v fr-badge fr-badge--sm fr-badge--info">Libellé par défaut</p><div class="fr-cell__title fr-mb-2v">Titre par défaut</div><div class="fr-cell__desc">Texte par défaut</div>'
          },
          {
            content: '<p class="fr-mr-2v fr-badge fr-badge--sm fr-badge--success">Libellé par défaut</p>Texte par défaut'
          },
          {
            content: 'Texte par défaut'
          },
          {
            content: '<div class="fr-input-group" id="input-group-6"><label class="fr-label" for="text-input-text-1"></label><input class="fr-input" aria-describedby="text-input-text-1-messages" id="text-input-text-1"  type="text"><div class="fr-messages-group" id="text-input-text-1-messages" aria-live="polite"></div></div>'
          },
          {
            content: '30,00&nbsp;€'
          },
          {
            content: '<p class="fr-badge fr-badge--info">Libellé par défaut</p>'
          },
          {
            content: '<button type="button" id="table-default-button-7"  class="fr-btn fr-btn--sm fr-btn--secondary">Libellé bouton</button>'
          },
          {
            content: '<a class="fr-tag" href="#">Libellé par défaut</a>'
          },
          {
            content: '<a id="link-8" download="true" href="/example/img/image.jpg"  class="fr-link fr-link--download">Lien de Téléchargement <span class="fr-link__detail">JPG – 61,88 Ko</span></a>'
          },
          {
            content: '<svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px"><use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-decorative"></use><use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-minor"></use><use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-major"></use></svg>'
          }
        ],
        [
          {
            markup: 'th',
            attributes: {
              scope: 'row'
            },
            classes: [
              'fr-cell--fixed'
            ],
            content: '<div class="fr-checkbox-group fr-checkbox-group--sm"><input name="row-select" id="table-miscellaneous-select-row-checkbox-2" type="checkbox"><label class="fr-label" for="table-miscellaneous-select-row-checkbox-2">  Sélectionner la ligne 2 : Titre par défaut  </label></div><span class="fr-cell__title">Titre par défaut</span>'
          },
          {
            content: 'Texte par défaut'
          },
          {
            content: '<p class="fr-mb-2v fr-badge fr-badge--sm fr-badge--info">Libellé par défaut</p><div class="fr-cell__title fr-mb-2v">Titre par défaut</div><div class="fr-cell__desc">Texte par défaut</div>'
          },
          {
            content: '<p class="fr-mr-2v fr-badge fr-badge--sm fr-badge--success">Libellé par défaut</p>Texte par défaut'
          },
          {
            content: 'Texte par défaut'
          },
          {
            content: '<div class="fr-input-group" id="input-group-10"><label class="fr-label" for="text-input-text-2"></label><input class="fr-input" aria-describedby="text-input-text-2-messages" id="text-input-text-2"  type="text"><div class="fr-messages-group" id="text-input-text-2-messages" aria-live="polite"></div></div>'
          },
          {
            content: '30,00&nbsp;€'
          },
          {
            content: '<p class="fr-badge fr-badge--info">Libellé par défaut</p>'
          },
          {
            content: '<button type="button" id="table-default-button-11"  class="fr-btn fr-btn--sm fr-btn--secondary">Libellé bouton</button>'
          },
          {
            content: '<a class="fr-tag" href="#">Libellé par défaut</a>'
          },
          {
            content: '<a id="link-12" download="true" href="/example/img/image.jpg"  class="fr-link fr-link--download">Lien de Téléchargement <span class="fr-link__detail">JPG – 61,88 Ko</span></a>'
          },
          {
            content: '<svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px"><use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-decorative"></use><use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-minor"></use><use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/leaf.svg#artwork-major"></use></svg>'
          }
        ]
      ]
    ]
  };
};

const getComplexTableCaptionDetails = () => `
  (Résumé) Emploi du temps horaire des Groupes 1 et 2, le matin des jours de la semaine ouvrée (Lundi au Vendredi) :
  <ul>
    <li>la première colonne représente le planning de la journée de Lundi pour les groupes 1 et 2,</li>
    <li>la deuxième colonne représente le planning de la journée de Mardi pour les groupes 1 et 2,</li>
    <li>la troisième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 1,</li>
    <li>la quatrième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 2,</li>
    <li>la cinquième colonne représente le planning de la journée de Vendredi pour les groupes 1 et 2.</li>
  </ul>
`;

const tableArgs = {
  caption: 'Titre du tableau (caption)',
  noCaption: false,
  captionBottom: false,
  bordered: false,
  noScroll: false,
  hasHeader: false,
  hasHeaderSegmented: true,
  hasHeaderDetails: true,
  hasHeaderButtons: true,
  hasFooter: false,
  hasFooterSelect: true,
  hasFooterPagination: true,
  hasFooterButtons: true,
  size: 'md',
  table: getSimpleTableArgs()
};

const tableProps = (args) => {
  const wrapper = {
    size: args.size || tableArgs.size,
    table: {
      caption: args.caption || tableArgs.caption,
      captionDetail: args.captionDetail || tableArgs.captionDetail,
      thead: args.table.thead || tableArgs.table.thead,
      tbodies: args.table.tbodies || tableArgs.table.tbodies,
      id: args.id || undefined
    }
  };

  if (args.noCaption === true) {
    wrapper.noCaption = args.noCaption;
  }

  if (args.captionBottom === true) {
    wrapper.captionBottom = args.captionBottom;
  }

  if (args.bordered === true) {
    wrapper.bordered = args.bordered;
  }

  if (args.noScroll === true) {
    wrapper.noScroll = args.noScroll;
  }

  if (args.hasHeader === true) {
    let tableHeader = '';

    if (args.hasHeaderSegmented === true) {
      tableHeader += tableHeaderSegmented;
    };

    if (args.hasHeaderDetails === true) {
      tableHeader += tableHeaderDetails;
    };

    if (args.hasHeaderButtons === true) {
      tableHeader += tableHeaderButtons;
    };

    wrapper.header = tableHeader;
  }

  if (args.hasFooter === true) {
    let tableFooter = '';

    if (args.hasFooterSelect === true) {
      tableFooter += tableFooterSelect;
    };

    if (args.hasFooterPagination === true) {
      tableFooter += tableFooterPagination;
    };

    if (args.hasFooterButtons === true) {
      tableFooter += tableFooterButtons;
    };

    wrapper.footer = tableFooter;
  }

  return wrapper;
};

export { tableArgTypes, tableArgs, tableProps, getSelectableTableArgs, getComplexTableArgs, getComplexTableCaptionDetails, getMiscellaneousTableArgs };
