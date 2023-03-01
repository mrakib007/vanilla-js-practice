//delete is not a method it's an operator
let num = [1,2,3,4,5,6,7,8,9];
let numMore = [11,12,13,14,15,16,17,18,19]
// console.log(num.length);
// delete num[0];
// console.log(num);
// console.log(num.length);
//delete operator doesn't change the length of the num array.

let newArray= num.concat(numMore);
console.log(newArray);
console.log(num);
console.log(numMore); //concat mode doesn't change the existing array but it returns a new array.
