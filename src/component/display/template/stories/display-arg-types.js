const body = `
<div id="fr-display" class="fr-display">
  <fieldset class="fr-fieldset" id="display-fieldset">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="display-fieldset-legend">
        Choisissez un thème pour personnaliser l’apparence du site.
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group fr-radio-rich">
            <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
            <label class="fr-label" for="fr-radios-theme-light">
                Thème clair
            </label>
            <div class="fr-radio-rich__pictogram">
                <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                    <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-decorative"></use>
                    <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-minor"></use>
                    <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-major"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group fr-radio-rich">
            <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
            <label class="fr-label" for="fr-radios-theme-dark">
                Thème sombre
            </label>
            <div class="fr-radio-rich__pictogram">
                <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                    <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-decorative"></use>
                    <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-minor"></use>
                    <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-major"></use>
                </svg>
            </div>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group fr-radio-rich">
            <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
            <label class="fr-label" for="fr-radios-theme-system">
                Système
                <span class="fr-hint-text">Utilise les paramètres système</span>
            </label>
            <div class="fr-radio-rich__pictogram">
                <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                    <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/system/system.svg#artwork-decorative"></use>
                    <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/system/system.svg#artwork-minor"></use>
                    <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/system/system.svg#artwork-major"></use>
                </svg>
            </div>
        </div>
    </div>
  </fieldset>
</div>
`;

const displayArgTypes = {};

const displayArgs = {};

const displayProps = (args) => {
  const display = {
    title: 'Paramètres d’affichage',
    body: body
  };

  return display;
};

export { displayArgTypes, displayArgs, displayProps };
