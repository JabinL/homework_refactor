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

rankTest('voyageRisk case4: voyage.length > 4,voyage.length <= 8 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result,3 );
});

rankTest('voyageRisk case5: voyage.length > 8, voyage.zone = china ', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result,8 );
});

rankTest('voyageRisk case6: voyage.length > 8 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result,4 );
});

rankTest('captainHistoryRisk case1: history.length < 5 vayage.zone !== china ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const history = [
    {
      zone: 'easndies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,6 );
});

rankTest('captainHistoryRisk case2: history.length < 5 vayage.zone === china history haschina ', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const history = [
    {
      zone: 'easndies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,4 );
});