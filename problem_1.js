// * "scissors", "paper" --> "Player 1 won!"
// * "scissors", "rock" --> "Player 2 won!"
// * "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    console.log("player 1 won!");
  } else if (
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "rock" && p2 === "paper")
  ) {
    console.log("player 2 won!");
  } else {
    console.log("Draw!");
  }
};
rps("rock", "rock");
