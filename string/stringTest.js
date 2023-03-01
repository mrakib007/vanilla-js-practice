const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"


const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 1));
// Expected output: false

console.log(str1.startsWith('Sat', 0));
// Expected output: true

// another example of string slice method
let str2 = "Please give me 1000 taka";
let amount = str2.slice("please give".length);
let amount2 = str2.slice(13);
console.log(amount);
console.log(amount2);

//Replacing a character
let friend = "Mehrab";
friend[3] = "R";
console.log(friend);
//The string won't change because we can't change string directly. They are immutable.

