
const returnFirstTwoDrivers = function first(array){
  return [array[0], array[1]];
};

const returnLastTwoDrivers = function first(array){
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function third(num){
  return function fourth(num){
    return (num * 5);
  };
};

const fareDoubler()