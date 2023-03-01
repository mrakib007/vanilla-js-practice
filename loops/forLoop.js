let n = 12;
let sum = 0;
for(let i=0;i<n;i++){
    sum = sum+(i+1);
    console.log(sum);
}
console.log(sum);

let factorial = 1;
for(let i=1;i<6;i++){
    factorial = factorial*i;
    console.log(factorial)
}
console.log(factorial);

// for in loop
let obj = {
    Rakib: 60,
    Sakib: 40,
    Patoary: 100,
    Shawon: 90
}


//for in loop
for (let a in obj){
    console.log("Marks of" + a + "is" + obj[a]);
}
// for of 
for (let b of "Rakib"){
    console.log(b);
}

let c = [10,20,30,40,50,60,70];
for(let e of c){
    console.log(e);
}