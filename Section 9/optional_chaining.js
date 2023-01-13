"use strict";
//Optional Chaining(?)
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

if (restaurent.openingHours && restaurent.openingHours.mon)
  console.log(restaurent.openingHours.mon.open);

//With optional chaining..
console.log(restaurent.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = restaurent.openingHours[day]?.open ?? "closed";
  console.log(`On ${day},We open at ${open}`);
}

//Methods
console.log(restaurent.order?.(0, 1) ?? "Method does Not exist");
console.log(restaurent.orderKatakirr?.(0, 1) ?? "Method does Not exist");

const users = [];
console.log(users[0]?.name ?? "User does not exist");

if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");
