"use strict";
/*In this file I have Practised Short Circuiting && and || operator.*/

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

//OR(||):
/* They can use any data types, return ANY data type, Short Circuiting*/
console.log(4 || "Sajan");
console.log("" || "Sajan");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurent.numGuests = 0;
const guests = restaurent.numGuests ? restaurent.numGuests : 10;
console.log(guests);

const guests1 = restaurent.numGuests || 10;
console.log(guests1);

//AND(&&
console.log("*******AND*********");
console.log(4 && "Sajan");
console.log("" && "Sajan");
console.log(true && 0);
console.log(undefined && null);

console.log(undefined && 0 && "" && "Hello" && 23 && null);

if (restaurent.orderKatakirr) {
  restaurent.orderKatakirr("Farsan", "Dahi");
}

restaurent.orderKatakirr && restaurent.orderKatakirr("Farsan", "Dahi");
