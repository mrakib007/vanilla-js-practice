//This is a simple game of snake,water and gun. Here user has to enter g,s or w and computer will enter a value of his own.
//User has to enter the number of time he wants to play.

let playTime = Number.parseInt(prompt("How many times you want to play?"));
let userCount = 0;
let computerCount = 0;

for (i = 0; i < playTime; i++) {
  function test() {
    let values = ["s", "w", "g"],
      valueToUse = values[Math.floor(Math.random() * values.length)];
    // alert(valueToUse)
    return valueToUse;
  }

  let randomValue = test();
  let userValue = prompt("Enter s,w or g");

  if (randomValue === userValue) {
    alert("you both entered the same value");
  } else if (randomValue === "s" && userValue === "w") {
    alert("Computer wins");
    computerCount++;
  } else if (randomValue === "w" && userValue === "s") {
    alert("You win");
    userCount++;
  } else if (randomValue === "s" && userValue === "g") {
    alert("You win");
    userCount++;
  } else if (randomValue === "g" && userValue === "s") {
    alert("Computer wins");
    computerCount++;
  } else if (randomValue === "w" && userValue === "g") {
    alert("Computer wins");
    computerCount++;
  } else if (randomValue === "g" && userValue === "w") {
    alert("You win");
    userCount++;
  }
}

if (userCount > computerCount) {
  alert("You won the game!");
} else if (userCount < computerCount) {
  alert("Computer won the game!");
} else if (userCount === computerCount) {
  alert("Draw!");
}
