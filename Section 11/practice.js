"use strict";

const checkDogs = function (dogsPavan, dogsPratik) {
  const dogs = dogsPavan.concat(dogsPratik);
  console.log(dogs);
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number${i + 1} is ${dog} year's old, And is Adult.!`);
    } else {
      console.log(
        `Dog number${i + 1} is ${dog} year's old, And is still a Puppy🐶`
      );
    }
  });
};

checkDogs([3, 6, 2, 5, 9], [4, 1, 13, 15, 3]);

//part two:

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAge.filter((age) => age >= 18);
  console.log(humanAge);
  console.log(adults);

  // const average =
  //   adults.reduce((average, age) => average + age, 0) / adults.length;
  const average = adults.reduce(
    (average, age, index, arr) => average + age / arr.length,
    0
  );

  return average;
};

calcAverageHumanAge([1, 2, 5, 6, 8, 9]);
const avg = calcAverageHumanAge([1, 2, 5, 6, 8, 9]);
console.log(avg);
