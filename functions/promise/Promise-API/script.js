let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1");
    },1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value2");
        reject("value2");
    },2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value3");
    },3000);
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })
// let promise_all = Promise.all([p1,p2,p3]);
// let promise_all = Promise.allSettled([p1,p2,p3]);
// let promise_all = Promise.race([p1,p2,p3]);
// let promise_all = Promise.resolve(6);
let promise_all = Promise.reject(new Error("hey"));
// let promise_all = Promise.any([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})