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
