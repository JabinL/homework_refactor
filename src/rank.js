function calculateResultByLengthOfVoyage(voyage, tmp, count) {
  return voyage.length > tmp ? count : 0;
}

function calculateResultByZoneOfVoyage(voyage, count) {
  return [
    'china',
    'east-indies',
  ].includes(voyage.zone) ? count : 0;
}

function calculateResultByLengthOfHistory(history, tmp, count) {
  return history.length > tmp ? count : 0;
}
function voyageRisk (voyage) {

  let result = 1;
  result += calculateResultByLengthOfVoyage(voyage, 4, 2);
  result += calculateResultByLengthOfVoyage(voyage, 8, voyage.length - 8);
  result += calculateResultByZoneOfVoyage(voyage, 4)
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor(voyage, history) {
  let result = 2;

  result += calculateResultByZoneOfVoyage(voyage, 1)

  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result += calculateResultByLengthOfHistory(history, 10, 1);
    result += calculateResultByLengthOfVoyage(voyage, 12, 1);
    result += calculateResultByLengthOfVoyage(voyage, 18, -1);
  } else {
    result += calculateResultByLengthOfHistory(history, 8, 1);
    result += calculateResultByLengthOfVoyage(voyage, 14, -1);

  }
  return result;
}

function getRating(vpf, vr, chr) {
  return vpf * 3 > vr + chr * 2 ? 'A' : 'B';
}

function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);

  return getRating(vpf, vr, chr)

}

module.exports = {
  voyageRisk,
  captainHistoryRisk,
  voyageProfitFactor,
  rating,


};

const voyage = {
  zone: 'west-indies',
  length: 10,
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
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
