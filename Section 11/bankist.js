"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Sajan Bhosale",
  movements: [20000, 4500, -400, 300000, -650, -130, 70, 130000],
  interestRate: 2, // %
  pin: 1111,
};

const account2 = {
  owner: "Gouri N",
  movements: [50000, 34000, -150, -790, -3210, -1000, 85000, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Pavan Kshirsager",
  movements: [20000, -200, 3400, -300, -20, 50, 4000, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Pratik Bahirwade",
  movements: [4300, 10000, 7000, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type 
    movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//Creating Usernames
const createUser = function (account) {
  account.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUser(accounts);

//display balance
const calcBalanceDisplay = function (accounts) {
  const balance = accounts.movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
  );
  accounts.balance = balance;
  labelBalance.textContent = `₹${balance}`;
};

const updateUI = function (account) {
  //DISPLAY MOVEMENTS OF CURRENT ACCOUNT
  displayMovements(currentAccount.movements);
  //DISPLAY BALANCE OF CURRENT ACCOUNT
  calcBalanceDisplay(currentAccount);
  //DISPLAY SUMMERY OF CURRENT ACCOUNT
  calcDisplaySummery(currentAccount.movements);
};

// calcBalanceDisplay(account1.movements);
const calcDisplaySummery = function (movement) {
  const incomes = movement
    .filter((movement) => movement > 0)
    .reduce((accumulator, movement) => accumulator + movement, 0);

  const expenses = movement
    .filter((movement) => movement < 0)
    .reduce((accumulator, movement) => accumulator + movement, 0);
  labelSumIn.textContent = `₹${incomes}`;
  labelSumOut.textContent = `₹${Math.abs(expenses)}`;

  const interest = movement
    .filter((movement) => movement > 0)
    .map((deposits) => (deposits * currentAccount.interestRate) / 100)
    .reduce((accumulator, interest) => accumulator + interest, 0);

  labelSumInterest.textContent = `₹${interest}`;
};

//Find Method:
//find method work same as slice method but dont return array but a very first find(element satiesfying condition)
// const fDeposit = account1.movements.find((movement) => movement > 0);
// console.log(fDeposit);
// console.log(account1.movements);

// const account = accounts.find((acc) => acc.owner === "Sajan Bhosale");
// console.log(account);

//Implementing Authentication:
let currentAccount;
btnLogin.addEventListener("click", function (event) {
  //This will prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //DISPLAY WELCOME MESSAGE
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //CLEAR INPUTS
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //Updating UI
    updateUI(currentAccount);
  } else {
    alert(
      "Wrong Username/Password.. Please try again with correct credential's"
    );
  }
});

//Implementing Transfer Money:

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (account) => account.username === inputTransferTo.value
  );
  // console.log(receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
  inputTransferTo.blur();
  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Updating UI
    updateUI(currentAccount);
  } else {
    alert(`Transaction Failed..!!⚠️ Please check if \n
      1.You have enough balance \n
      2.Receiver's name is valid \n
      3.Ammount is greater than zero \n
      Note:You cannot transfer money to self account`);
  }

  console.log(-amount, receiverAcc);
});

//Let's go and build all the remaining things
