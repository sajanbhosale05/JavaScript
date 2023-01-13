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

const ordersSet = new Set(["Misal", "Misal", "chole", "dosa", "Poha"]);

console.log(new Set("Sajan"));
console.log(ordersSet.size);
console.log(ordersSet.has("Misal"));
console.log(ordersSet.has("Chole"));
ordersSet.add("Pani Puri");
ordersSet.add("Pani Puri");
ordersSet.delete("Pani Puri");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

const staff = ["Wastad", "Maushi", "Bandya", "Wastad"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(["Wastad", "Maushi", "Bandya", "Wadhapi"]).size);

console.log(new Set("Sajan Sanjay Bhosale").size);
