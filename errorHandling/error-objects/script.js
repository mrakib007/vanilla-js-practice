try {
  let age = prompt("enter your age");
  age = Number.parseInt(age);
  if(age>120){
    console.log('this is probably not true');
  }
  // Rakib;
//   console.log(Rakib);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log('The script is running');