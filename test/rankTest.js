const rankTest = require('ava');
const { voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating} = require('../src/rank');


rankTest('voyageRisk case1: voyage.length < 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 3,
  };
  const result = voyageRisk(voyage);
  t.is(result,1 );
});

rankTest('voyageRisk case2: voyage.length < 4, voyage.zone = china ', t => {
  const voyage = {
    zone: 'china',
    length: 3,
  };
  const result = voyageRisk(voyage);
  t.is(result,5 );
});


rankTest('voyageRisk case3: voyage.length > 4,voyage.length <= 8, voyage.zone = china ', t => {
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result,7 );
});


