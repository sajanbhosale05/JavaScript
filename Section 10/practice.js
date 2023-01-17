"use strict";
const poll = {
  question: "What is your favourite programming language.?",
  options: ["0:JavaScript", "1:Python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")}\n(Write option Number)`
      )
    );
    console.log(answer);

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const btnPoll = document.getElementById("answer");

btnPoll.addEventListener("click", poll.registerNewAnswer.bind(poll));

//Practice part 2=>
(function () {
  const header = document.querySelector("h1");
  header.style.color = "black";

  //this is because of closures
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "yellow";
  });
})();

