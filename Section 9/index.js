"use strict";
/***********Rest Pattern and Parameters************ */
const restaurent = {
  name: "Bhosalyanchi misal",
  location: "Karvenagar pune",
  categories: ["Maharashtrian", "Punjabi", "South Indian", "Snacks"],
  starterMenu: ["Misal", "Chole", "Dosa", "Poha"],
  mainMenu: ["Katakirr misal", "Chole Bhature", "Masala Dosa", " Tarri Poha"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order Received..!! 
    ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderMisal: "Misal",

  orderKatakirr: function (mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  },
};

const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [5, 6, 7, 8];

console.log(a, b, others);

const [puribhaji, wadabhaji, ...otherfood] = [
  ...restaurent.mainMenu,
  ...restaurent.starterMenu,
];
console.log(puribhaji, wadabhaji, otherfood);

//The rest Element must be the last element..

/****Objects**** */
const { sat, ...weekdays } = restaurent.openingHours;
console.log(sat, weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 45, 7, 8, 0, 32, 7);

const x = [24, 12, 143];
add(...x);

restaurent.orderKatakirr("Farsana", "Tikhat tarri", "mataki", "Kanda", "Dahi");
restaurent.orderKatakirr("Farsana");
