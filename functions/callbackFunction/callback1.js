//sync programming 
// let a = prompt("what is your name?");
// let b = prompt("what is your age?");
// let c =  prompt("what is your favorite color?");
// console.log(a+ "is" +b+ "years old"+ c + "favorite color");

// async programming 
// console.log('start')
// setTimeout(function(){
//     console.log("hey I am good");
// },3000)
// console.log('end');

//callbacks
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("loaded script with src" + src);
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error Loading"+ src);
        callback(new Error("Link has some error"));
    }
    document.body.appendChild(script);
}

function goodMorning(error,src){
    if(error){
        console.log(error);
        return;
    }
    alert('good Morning' + src);
}
function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    alert("hello world"+ src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",hello);
// loadScript("https://cdn.jsdelivr.net/npm/bootstrkjhkjhkjap@5.0.2/dist/js/bootstrap.bundle.min.js",hello);