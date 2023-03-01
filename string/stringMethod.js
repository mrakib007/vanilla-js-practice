let name = "rakib";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.slice(2,4));
console.log(name.replace("ra","sa"));

let friend = "shawon";
console.log(name.concat("is a friend of ",friend));

let friend2 = "   Patoary    ";
console.log(friend2.trim());
let fr = "Diya";
for(let i = 0; i<fr.length; i++){
    console.log(fr[i]);
}
//strings are immutable. You can not change the original string it returns a new string.