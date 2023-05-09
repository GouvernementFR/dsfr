module.exports = async (page, scenario, vp, isReference) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./puppet/clickAndHoverHelper')(page, scenario);

  console.log('page', page);
  console.log('scenario', scenario);
  console.log('vp', vp);
  console.log('isReference', isReference);
};
