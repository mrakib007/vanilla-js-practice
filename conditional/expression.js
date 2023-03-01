555;
'Rakib Hasan'; //These are not errors they are js
false; //valid js
console.log('operators in js');
let a = 45;
let b = 4;
console.log("a+b",a+b);
console.log(a**b);
console.log(a%b);
console.log(a--,"a");
console.log(a++,a--,++a);

console.log(++a,"++a");
console.log(a++,"a++");
console.log(a++,"a++");
console.log(a--,"a--");

//Assignments operator
let assignment = 6;
assignment += 5;
console.log(assignment);

// comparison operators
let compl = 6;
let comp2 = "6";
console.log("compl == comp2 is",compl == comp2)
console.log("compl != comp2 is",compl != comp2)
console.log("compl != comp2 is",compl === comp2)
console.log("compl != comp2 is",compl !== comp2)

// == and === is different because === also compares the type of the variables;


let x = 4;
let y = 5;
console.log(x>y);

// logical operators

console.log(x>y && x==y);
console.log(x>y && x||y);
console.log(!true);
console.log(!false);