/////////////////////////////////////////////////
/////////////////////////////////////////////////
// *******LECTURES*******

//*************Methods************* */

let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(1)); //slice method returns new array having elements from the index passed
console.log(arr.slice(1, 4)); //slice method having 2 parameter's returns new array having elements ranging between the index passed.
console.log(arr.slice(-1)); //this will return last element of the array
console.log(arr.slice()); //will return shallow copy of the array

//Method splice:

// console.log("Output of splice method", arr.splice(-2)); //this method will return a new array from the index passed and original array will loose the elements..
console.log("Original array", arr);

//
arr.splice(2, 2); //arr.splice(index, number of elements) will return number of elements from the index.

//Reverse Method

console.log("Original array", arr);
console.log("Reversed array", arr.reverse());
console.log("Original array", arr); //reverse method can mutate the array too

//Concat method:
const arr2 = ["S", "A", "J", "A", "N"];
const universal = arr.concat(arr2);
console.log(universal);

//join method
console.log(arr2.join("_"));
// console.log(arr2);

//
const arrayDum = [10, 20, 30, 40, 50];

//at Method
console.log(arrayDum[0]);
console.log(arrayDum.at(0)); //Line number 49 and 50 generates same results
console.log(arrayDum.at(-1));
//at method also works on Strings
console.log("Sajan".at(0));
//

//looping the arrays using forEach:
const movements = [200, -200, 340, -300, -20, 50, 400, -460];

//Usinf forOf loop:=>
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Achievement${i + 1}:${movement} Kamaya..`);
  } else {
    console.log(`Kand${i + 1}:${Math.abs(movement)} ka Kata`);
  }
}
//Using forEach loop
console.log("********forEach Loop********");

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Achievement${index + 1}:${movement} Kamaya..`);
  } else {
    console.log(`Kand${index + 1}:${Math.abs(movement)} ka Kata`);
  }
});
//Break statement do not work in forEach loop
//forEach with Maps and Set'S
const currencies = new Map([
  ["RUPEE", "Indian Rupee"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
//args[value=the current value,key=current key,map=the entire map]
//set
const currenciesUnq = new Set(["RUPEE", "EUR", "GBP", "EUR"]);

console.log(currenciesUnq);

currenciesUnq.forEach(function (value, _, set) {
  console.log(`${value}:${value}`);
});

//MAP:FILTER:REDUCE  Methods

//1.Map:
//This method is another method that is used to loop over array.
//In it iteration it applies a callback method we have defined. While doing it created new array with result
const rupToeur = 2;
/*CallBack function*/
// const movEur = movements.map(function (mov) {
//   return mov * rupToeur;
// });

/*Arrow function*/
const movEur = movements.map((mov) => {
  return mov * rupToeur;
});

console.log(movements);
console.log(movEur);

const mvDesc = movements.map(
  (movment, index, arr) =>
    `Movement ${index + 1}: You ${
      movment > 0 ? "deposited" : "Withdrawn"
    } ${Math.abs(movment)}`
);

console.log(mvDesc);
//2. Filter:
//filter returns a new array containing the array elements that passed a specified test condition
//All other elements will be filtered out(Excluded) from the result array
const deposits = movements.filter(function (movement) {
  return movement > 0;
});

console.log(deposits);

const withdrawals = movements.filter((movement) => movement < 0);

console.log(withdrawals);

//3.Reduce
//reduce returns all array elements down to one single value Eg. Adding all array elements together.

const balance = movements.reduce(function (accumulator, curEle, index, arr) {
  console.log(`Iteration ${index}: ${accumulator}`);
  return accumulator + curEle;
}, 0);

console.log(balance);

//same using for of

// for (curEle of movements) {
//   let balance = 0;
//   console.log(balance, curEle);
//   balance += curEle;
//   console.log(balance);
// }

const calcBalance = function (movements) {
  const balance = movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
  );
};

//Maximum value of movements

const maxMov = movements.reduce(function (accumulator, movement) {
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements[0]);

console.log(maxMov);
