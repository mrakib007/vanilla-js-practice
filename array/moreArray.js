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
// console.log(num);
// console.log(numMore); //concat mode doesn't change the existing array but it returns a new array.

//sort method
let a = [55,6,77,7,6,22,10,57,41,53,88];
// a.sort();
// console.log(a); //sort method changes the main newArray. this method sorts numbers or anything in alphabetical order

let compare = (x,y) =>{
    return x - y;
}
a.sort(compare);
console.log(a);

//reverse function

// a.reverse();
// console.log(a);

//splice and slice method
//if you want to add new items in an array you can use splice method
//Returns deleted items and modifies source array;

// a.splice(2,3,1011,1022,1033);
// let deletedValues = a.splice(2,3,1011,1022,1033);
// console.log(a,"they are modified array");
// console.log(typeof(deletedValues));

//slice method
//**This doesn't modify original array */
let newNum = num.slice(3,6);
console.log(newNum);
