const rankTest = require('ava');
const { voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating} = require('../src/rank');


rankTest('voyageRisk case1: voyage.length < 0', t => {
  const voyage = {
    zone: 'west-indies',
    length: 3,
  };
  const result = voyageRisk(voyage);
  t.is(result,1 );
});

