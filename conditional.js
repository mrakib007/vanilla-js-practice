let a = prompt("Hey, what's your age?");
console.log(typeof a);
a= Number.parseInt(a);

if(a>0){
    alert('this is valid code');
}
else if(a<100){
    alert('This age is too much');
}
else{
    alert('This is invalid age');
}

console.log("You can",age<18 ? "not drive" : "drive");
//the upper line also means if else