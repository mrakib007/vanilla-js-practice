//take input form use and add this input to an array.
// let arr = [20,55,10,63,44,63,77,14];
let arr = [2,3,4,5];
// let a = prompt("enter a number")
//prompt doesn't work in vs code. It will work just fine in the browser console

// a = Number.parseInt();
// arr.push(a);

let n = arr.filter((x)=>{
    return x%10 == 0;
});
console.log(n);

let x = arr.map((a)=> {
    return a*a;
});
console.log(x);

let multi = arr.reduce((x1,x2)=>{
    return x1*x2;
},2);
console.log(multi);