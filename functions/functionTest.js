let marks = {
    Rakib: 90,
    Sakib: 80,
    Patwary: 75,
    Shawon: 81,
}

// problem 1
for (let i = 0;i< Object.keys(marks).length; i++){
    console.log('The marks of '+Object.keys(marks)[i]+ 'is ' + marks[Object.keys(marks)[i]]);
}

// problem 2

for (let key in marks){
    console.log("The marks of "+ key + "is "+ marks[key])
}

//problem 3
let cn = 4;
let i ;
while (i != cn){
    // i = prompt("Enter a number");
    // console.log('try again');
}
console.log("You entered a correct number");

// problem 4
const mean = (a,b,c,d) =>{
    return (a+b+c+d)/4;
}
console.log(mean(1,2.3,4));

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));
  console.log(object1[Object.keys(object1)[0]]);

//   The Object.keys() static method returns an array of 
// a given object's own enumerable string-keyed property names.
