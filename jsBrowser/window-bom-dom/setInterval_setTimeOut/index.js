document.write("hello");
const sum = (x,y) => {
    console.log(x+y);
    x+y;
}
setTimeout(sum,1000,1,2);

// setInterval(sum,1000,1,2);


// let a = setTimeout(function(){
//     alert('I am inside set timeout');
// },3000);
// console.log(a);
// let b = prompt("do you want  to run the set timeout?");
// if(b==="n"){
//     clearTimeout(a);
// }
// console.log(a);