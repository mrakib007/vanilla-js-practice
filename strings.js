let name = "rakib";
console.log(name.length);
let i;
for(i = 0; i<name.length; i++){
    console.log(name[i]);
}

//Template literals
let boy = "rakib";
let boy2 = "sakib";
let girl = "mariyam";

let sentence = `${boy} is brother of ${boy2} and ${girl} is sister of ${boy}`
console.log(sentence);