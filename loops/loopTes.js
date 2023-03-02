let randomNum = Math.floor((Math.random() * 100) + 1);
let myGuess = 0;
let guess;

do{
  guess = Number(prompt("Enter your guess number"));
  if(guess === randomNum){
    console.log("Congraulatoins! You entered the correct number");
    console.log("You took", myGuess);
  }else if(guess>randomNum){
    console.log("Your guess is greater than the random number");
    console.log("guess left", (100-myGuess));
  }else if(guess<randomNum){
    console.log("Your guess is lesser than the random number");
    console.log("guess left", (100-myGuess));
  }
  myGuess++;
}while(myGuess != randomNum);
console.log("chance taken",myGuess);