let promise = new Promise(function(resolve,reject){
    alert('I am an alert in promise');
    resolve(07);
})

console.log('hello');
setTimeout(function(){
    console.log('this will run in 2 seconds');
},2000);
console.log('Hello 3');
console.log(promise);