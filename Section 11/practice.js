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
