let num = [1,2,3,4,5];
let b = num.toString();
console.log(num,b);
let c = num.join("-");
console.log(c, typeof(c));
num.pop(); //this method changes the original array; doesn't return a new array;
console.log(num);
let r = num.pop();
console.log(r,"r");
num.push(7);
console.log(num);
let x = num.shift();
console.log(x,num);
let y = num.unshift(78); //shift and unshift updates the original array
console.log(y,num);