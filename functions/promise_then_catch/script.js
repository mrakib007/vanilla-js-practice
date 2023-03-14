let p1 = new Promise((resolve,reject)=>{
    console.log('promise is pending');
    setTimeout(()=>{
        console.log("I am a promise and I am resolved");
        resolve(true);
    },3000);
});
let p2 = new Promise((resolve,reject)=>{
    console.log('promise is pending');
    setTimeout(()=>{
        console.log("I am a promise and I am rejected");
        reject(new Error("I am an error"));
    },4000);
});
// console.log(p1,p2)
p1.then((value)=>{
    console.log(value);
})
// p2.catch((error)=>{
//     console.log('some error happened',error);
// })

p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})