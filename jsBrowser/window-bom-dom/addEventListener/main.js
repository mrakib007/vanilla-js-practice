let x = function(e){
    alert('Hello World 1');
    console.log(e.clientX);
}
let y = function(e){
    alert('Hello World 2');
}

btn.addEventListener('click',x)
btn.addEventListener('click',y);


let a = prompt('what is your favorite number?');

if(a=="2"){
    btn.removeEventListener('click',x);
}