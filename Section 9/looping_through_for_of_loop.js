"use strict";
// console.log("File Connected..!!");
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

const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
//simple for of loop
for (const item of menu) {
  console.log(item);
}

//for of loop With index..
for (const item of menu.entries()) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}

//Using Destructuring with index
for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1}:${ele}`);
}
