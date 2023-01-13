"use strict";
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const restaurent = {
  name: "Bhosalyanchi misal",
  location: "Karvenagar pune",
  categories: ["Maharashtrian", "Punjabi", "South Indian", "Snacks"],
  starterMenu: ["Misal", "Chole", "Dosa", "Poha"],
  mainMenu: ["Katakirr misal", "Chole Bhature", "Masala Dosa", " Tarri Poha"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 Enhanced object Literals
  openingHours,
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order Received..!! 
    ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderMisal: "Misal",
  //This is same as orderDelivery function
  orderKatakirr(mainIngrediant, ...otherIngredients) {
    console.log(mainIngrediant);
    console.log(otherIngredients);
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}

console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entries object

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} We open at ${open} and close at ${close}`);
}
