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
