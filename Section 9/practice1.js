"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [goalK, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
//3
const players1Final = [...players1, "Thiago", "Countinho", "Periscic"];

//4
const {
  odds: { team1, x: draw, team2 },
} = game;

//5
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} Goals Were Scored..!!`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(game.scored);
printGoals(...game.scored);
//6
team1 < team2 && console.log("Team 1 is more Likely to win..!!");
team1 > team2 && console.log("Team 2 is more Likely to win..!!");

//Lecture 2
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${player}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const tStr = team === "x" ? "draw" : `Victory ${game[team]}`;
  console.log(`Odd of ${tStr} ${odd}`);
}

//Coding Challange 2:

const gameEvents = new Map([
  [17, "⚽ Goal"],
  [36, "🔁 Substitube"],
  [47, "⚽ Goal"],
  [61, "🔁 Substitube"],
  [64, "🟨 Yellow card"],
  [69, "😡 Red card"],
  [70, "🔁 Substitube"],
  [72, "🔁 Substitube"],
  [76, "⚽ Goal"],
  [80, "⚽ Goal"],
  [92, "🟨 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
const time = [...gameEvents.keys()].pop();

console.log(
  `An Event happened on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min}:${event}`);
}

//Part-4
/*  
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const outPut = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${outPut.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
