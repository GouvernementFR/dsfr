const fs = require('fs');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');

const utilityColorDir = 'src/dsfr/utility/colors';
const moduleVariableDir = 'src/module/color/variable';

const generateColors = async () => {
  const colorsSettingPath = root(`${utilityColorDir}/_setting.scss`);
  const decisionsPath = root(`${moduleVariableDir}/_decisions.scss`);
  const setsPath = root(`${moduleVariableDir}/_sets.scss`);

  const items = [];
  const families = [];

  const sets = await readSassFile(setsPath);
  const setsObj = convertSassStringToJs(sets);
  const tints = parseSets(setsObj);

  const decisions = await readSassFile(decisionsPath);
  const decisionsObj = convertSassStringToJs(decisions);

  const colorsSetting = await readSassFile(colorsSettingPath);
  const colorsObj = convertSassStringToJs(colorsSetting);
  const settingDecisions = colorsObj.color.decisions;

  for (const context in settingDecisions) {
    for (const usage of settingDecisions[context]) {
      const data = decisionsObj[context][usage];

      for (const family in data) {
        const hover = data[family].includes('hover');
        if (!families.includes(family)) families.push(family);

        for (const tint of tints[family]) {
          const item = {
            colorClass: `fr-${context}-${usage}--${tint}`,
            tint: tint,
            usage: usage,
            context: context,
            family: family,
            hover: hover === true
          };

          items.push(item);
        }
      }
    }
  }

  const json = {
    items: items,
    decisions: settingDecisions,
    families: families
  };

  const jsonPath = root('.config/colors.json');
  createFile(jsonPath, JSON.stringify(json));
};

const parseSets = (data) => {
  const sets = {};
  for (const family in data) {
    const tints = [];
    for (const tint in data[family]) {
      tints.push(tint);
    }

    sets[family] = tints;
  }

  return sets;
};

const convertSassStringToJs = (sassString) => {
  let cleanString = sassString
    .replace(/\s+/g, ' ').trim() // Supprimer les espaces inutiles et les retours à la ligne
    .replace(/\$[a-zA-Z0-9-_]+:\s*/, '') // Enlever les CSS var
    .replace(/;/g, '') // Enlever les points-virgules
    .replace(/\(hover:\s*true\)/g, 'hover') // Remplacer l'attribut hover par une entrée supplementaire dans le tableau
    .replace(/\s*\(\s*/g, '{') // Remplacer les parenthèses ouvrantes par des accolades ouvrantes
    .replace(/\s*\)\s*/g, '}') // Remplacer les parenthèses fermantes par des accolades fermantes
    .replace(/([a-zA-Z0-9-_]+):/g, '"$1":'); // Ajouter des guillemets autour des clés

  // Gérer les objets imbriqués et les valeurs spécifiques
  cleanString = cleanString.replace(/:\s*([a-zA-Z0-9-_ ]+)(\s*\(\s*.+?\s*\))?/g, (match, values) => {
    const items = values.trim().split(' '); // Diviser par des espaces
    const resultArray = items.map(item => `"${item}"`); // Mettre chaque élément entre guillemets

    return `: [${resultArray.join(', ')}]`; // Retourner les valeurs sous forme de tableau
  });

  // Convertir la chaîne modifiée en objet JavaScript
  try {
    const json = JSON.parse(cleanString);
    return json;
  } catch (error) {
    console.error('Erreur lors de la conversion de la chaîne Sass en objet JS :', error);
    return null;
  }
};

const readSassFile = async (dir) => {
  try {
    const data = fs.readFileSync(dir, 'utf8');
    return data;
  } catch (error) {
    console.log('Erreur lors de la lecture du fichier Sass :', error);
  }
};

module.exports = { generateColors };
