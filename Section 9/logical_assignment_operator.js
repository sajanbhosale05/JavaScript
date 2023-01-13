const rest1 = {
  name: "Misal",
  numGuests: 50,
};

const rest2 = {
  name: "Pavbhaji",
  owner: "Gouri",
};

//OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log("OR Assignment", rest1, rest2);

//Nullish Assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log("Nullish Assignment", rest1, rest2);

// rest1.owner = rest1.owner && "<XYZ";
// rest2.owner = rest2.owner && "<XYZ";
rest1.owner &&= "<XYZ";
rest2.owner &&= "<XYZ";

console.log(rest1);
console.log(rest2);
