//  Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

const rps = (p1, p2) => {
  if (p1 !== "Rock" && p1 !== "Paper" && p1 !== "Scissors") {
    return "Invalid input for p1";
  }

  if (p2 !== "Rock" && p2 !== "Paper" && p2 !== "Scissors") {
    return "Invalid input for p2";
  }

  if (p1 === p2) {
    return "It's a draw";
  }

  if (
    (p1 === "Rock" && p2 === "Scissors") ||
    (p1 === "Paper" && p2 === "Rock") ||
    (p1 === "Scissors" && p2 === "Paper")
  ) {
    return "The winner is p1";
  } else {
    return "The winner is p2";
  }
};
