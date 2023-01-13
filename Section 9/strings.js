"use strict";
//Working with strings

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

const airline = "Tap air India";

// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("Sajan".length);

console.log(airline.lastIndexOf("a"));

console.log(airline.indexOf("air"));

console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You Got a middle Seat");
  else console.log("You are lucky..!!");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Sajan"));
console.log(typeof new String("Sajan"));

console.log(typeof new String("Sajan").slice(1));

//Working with Strings Part-2:
//.toLowerCase()
//.toUpperCase()

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const passanger = "saJan";
const passNameLower = passanger.toLowerCase();
const correctPassName = passNameLower[0].toUpperCase() + passNameLower.slice(1);

console.log(correctPassName);

//CheckEmail
const email = "abc@xyz.com";

const loginEmail = "abc@Xyz.com";

let correctEmail = loginEmail.toLowerCase().trim();
// correctEmail = correctEmail.trim();
console.log(correctEmail);

//Replacing
const pricIN = "500*";
const pricUS = pricIN.replace("*", "$").replace("$", "*");
console.log(pricUS);

const announcement = `All the passanger's come to Boarding Door 23. Boarding Door 23..!!`;

// console.log(announcement.replace("Door", "Gate"));
// console.log(announcement.replaceAll("Door", "Gate"));
console.log(announcement.replace(/Door/g, "Gate"));

//Replace Method is also Case sensitive..!!

//Booleans
const plane = "Airbus A320neo";

console.log(plane.includes("A320"));
console.log(plane.includes("Boing"));
console.log(plane.startsWith("Boing"));
console.log(plane.startsWith("Air"));
console.log(
  plane.startsWith("Air") && plane.endsWith("neo")
    ? "Part of Neo Airbus Family"
    : "Not a part of neo Airbus Family"
);

const checkBaggage = function (items) {
  if (
    items.toLowerCase().includes("knife") ||
    items.toLowerCase().includes("lighter")
  ) {
    console.log("You are having restricted stuff");
  } else {
    console.log("Welcome to Air India..!!");
  }
};

checkBaggage("I have a laptop,food and a pocket KnIfe");
checkBaggage("laptop and Camera");
checkBaggage("Snacks and Colddrink and LigHter");

//Part 3
//Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Sajan Sanjay Bhosale".split(" "));

const [firstName, lastName] = "Sajan Bhosale".split(" ");
console.log(firstName, lastName);

const arr = ["Mr.", firstName, lastName].join(" ");

console.log(arr);
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(namesUpper.join(" "));
  }
};
capitalizeName("jessica devias");
capitalizeName("jonas devias");

const message = "Go to gate 24..!!";
console.log(message.padStart(25, "+"));
console.log("Sajan".padStart(25, "+"));
console.log("Sajan".padEnd(25, "+"));
console.log("Sajan".padStart(10, "+").padEnd(25, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1165464216440));
console.log(maskCreditCard(44654654546551351));
console.log(maskCreditCard("446546545465513511545554455454545454548770"));

//repeate method

const message2 = "Bad weather... all Departures are Delayed...!!";

console.log(message2.repeat(5));
