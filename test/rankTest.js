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

rankTest('captainHistoryRisk case3: history.length < 5 vayage.zone === china history not haschina ', t => {
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
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,5 );
});

rankTest('captainHistoryRisk case4: history.length > =5 vayage.zone !== china ', t => {
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
    {
      zone: 'west-asia',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,2 );
});

rankTest('captainHistoryRisk case5: history.length > =5 vayage.zone === china ', t => {
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
    {
      zone: 'west-asia',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,0 );
});

rankTest('captainHistoryRisk case5: history.length > =5 vayage.zone === china history not haschina', t => {
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
      zone: 'canada',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-asia',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result,2 );
});

rankTest(
    "rating case 1 Voyage length is 10 and zone is west-indies. History length is 4",
    (t) => {
      //given
      const voyage = {
        zone: "west-indies",
        length: 10,
      };
      const history = [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];

      //when
      const result = rating(voyage, history);

      //then
      t.is("B", result);
    }
);

rankTest(
    "rating case2 Voyage length is 5 and zone is west-indies. History length is 4",
    (t) => {
      //given
      const voyage = {
        zone: "east-indies",
        length: 5,
      };
      const history = [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];

      //when
      const result = rating(voyage, history);

      //then
      t.is("B", result);
    }
);

rankTest(
    "rating case3 Voyage length is 5 and zone is east-indies. History length is 4",
    (t) => {
      //given
      const voyage = {
        zone: "east-indies",
        length: 5,
      };
      const history = [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];

      //when
      const result = rating(voyage, history);

      //then
      t.is("B", result);
    }
);

rankTest(
    "rating case4 Voyage length is 2 and zone is china. History length is 8",
    (t) => {
      //given
      const voyage = {
        zone: "china",
        length: 2,
      };
      const history= [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];
      //when
      const result = rating(voyage, history);
      //then
      t.is("A", result);
    }
);

rankTest(
    "rating case5 Voyage length is 2 and zone is china. History length is 12",
    (t) => {
      //given
      const voyage = {
        zone: "china",
        length: 2,
      };
      const history = [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];
      //when
      const result = rating(voyage, history);
      //then
      t.is("A", result);
    }
);

rankTest(
    "rating case6 Voyage length is 20 and zone is china. History length is 12",
    (t) => {
      //given
      const voyage = {
        zone: "china",
        length: 20,
      };
      const history = [
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
        {
          zone: "east-indies",
          profit: 5,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
        {
          zone: "west-indies",
          profit: 15,
        },
        {
          zone: "china",
          profit: -2,
        },
        {
          zone: "west-africa",
          profit: 7,
        },
      ];
      //when
      const result = rating(voyage, history);
      //then
      t.is("B", result);
    }
);
