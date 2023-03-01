let num = [22,24,55,4,29,99,100,105];
for(let i = 0; i < num.length; i++){
    console.log(num[i],'classic for loop');
    // console.log(num[i]*num[i],'classic for loop multiplication');
}
num.forEach((element)=>{
    console.log(element*element,'for each loop');
})

//array.from
let name = "rakib";
let arr = Array.from(name);
console.log(arr);

for (let i of num){
    console.log(i);
}

for(let item in num){
    console.log(item,'for in loop',num[item]," is the value");
}