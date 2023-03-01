let arr = [45,55,26,24,71,96,44,59,73];
// array methods
//map creates a new array by performing operation on each array element.
let a = arr.map((value,index,array)=>{
    console.log(value,'value',index,'index');
    return value+index;
});
console.log(a);

//filter method
//filters an array with values that pass a test creates a new array.
//this doesn't change the original array.
let arr2 = [20,60,45,66,75,96,41,63,66,44,25,69,11];
let a2 = arr2.filter((a)=>{
    return a<30;
});
console.log(a2,'inside filter');

//reduce method
//this returns a single value.
//
let arr3 = [22,77,54,36,75,44,66,15,85,44,75];
let newArr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
});
console.log(newArr3,'reduce');
