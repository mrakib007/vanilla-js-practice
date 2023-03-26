let key = prompt("enter key you want to set");
let value = prompt('Enter value you want to set');

localStorage.setItem(key,value);
console.log(`The value of ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
    localStorage.removeItem(key);
}

if(key == 0){
    localStorage.clear();
}