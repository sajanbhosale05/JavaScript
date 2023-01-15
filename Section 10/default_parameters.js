"use strict";
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengerS = 2,
  price = 5000 * numPassengerS
) {
  const booking = {
    flightNum,
    numPassengerS,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("AI001");
createBooking("AI001", undefined, 5);

//Passing Argument Value vs Reference
const flight = "AI1";

const sajan = {
  name: "Sajan Bhosale",
  passport: 2364655,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "AI2";
  passenger.name = "Mr." + passenger.name;
  if (passenger.passport === 2364655)
    console.log("Welcome to Air India..!! Have a Lovely Flight..!!");
  else console.log("Wrong PassPort..!!");
};

// checkIn(flight, sajan);
// console.log(flight);
// console.log(sajan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(sajan);
checkIn(flight, sajan);

//Note:There is no passing by reference in jS Only Pass By value..

/************First class And Higher Order Functions **********/

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [First, ...others] = str.split(" ");
  return [First.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(str);
  console.log(`${fn(str)}`);
  console.log(`${fn.name}`);
};

transformer("JavaScript is the best..!!", upperFirstWord);
transformer("JavaScript is the best..!!", oneWord);

const high5 = function () {
  console.log("👋");
};

["Sajan", "Pavan", "Pratik"].forEach(high5);

//Functions Returning Functions

const greet = function (greeting) {
  console.log(greeting);
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greet = function (greeting) {
//   console.log(greeting);
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};
const greeterHey = greet("Hey");
greeterHey("Sajan");
greeterHey("Pavan");

// greet("hello");
// greet("hello")("Pratik");
greetArr("Hello")("Sajan");

//The call and apply Methods
const AIR_INDIA = {
  airline: "AIR INDIA",
  iataCode: "AI",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const airtata = {
  airline: "AIR INDIA(TATA)",
  iataCode: "AIT",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

const book = AIR_INDIA.book;

AIR_INDIA.book(1, "Sajan Bhosale");
AIR_INDIA.book(11, "Pavan Kshirsagar");
AIR_INDIA.book(111, "Pratik BahirWade");

book.call(airtata, 2, "G N");
book.call(AIR_INDIA, 2, "G N");

console.log(AIR_INDIA.bookings);
console.log(airtata.bookings);

//Apply Method

let flightData = [1, "Sajan Bhosale"];
book.apply(airtata, flightData);
flightData = [2, "G Bhosale"];
book.apply(airtata, flightData);

//a better Way or an alternative for APPLY METHOD

book.call(airtata, ...flightData);

/************The bind Method************* */
