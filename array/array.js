let marks = [91,80,85,65,83,null,false,"Not Present"]; //number type value and other types of values;
console.log(marks);
console.log(marks[2]); //detects 85. Because counting starts from index 0;
console.log(marks.length);
marks[8] = 55; //adding a new value to the array;
console.log(marks[9]);//This will be undefined because this doesn't exist;
// for loop to access all materials in an array
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}
marks[2] = 96;//changing the value of an element of an array;
console.log(marks,'changed');
console.log(typeof(marks));//array is object type data.
