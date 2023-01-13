"use strict";
//Maps In JavaScript
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

const rest = new Map();

rest.set("name", "Katakirr Misal");
rest.set(1, "Karve Nagar Pune");
console.log(rest.set(2, "Maharashtra, India"));

rest
  .set("categories", ["Marathi", "Punjabi", "South", "gujrati"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are Open😊")
  .set(false, "We are Closed😑");

console.log(rest.get(false));
console.log(rest.get(1));
console.log(rest.get("2"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest.has(2));
// rest.clear();
console.log(rest);
console.log(rest.size);
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest.size);
console.log(rest.get(arr));

//Iterating Map's:

const question = new Map([
  ["qustion", "What is the best pogramming Language in the world..?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct🥳"],
  [false, "Try again..!!"],
]);
console.log(question);

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}:${value}`);
  }
}

const answer = 3;
console.log(answer);
console.log(
  question.get("correct") === answer ? question.get(true) : question.get(false)
);

console.log([...question]);
console.log([...question.entries()]);
console.log(question.keys());
console.log(question.values());
