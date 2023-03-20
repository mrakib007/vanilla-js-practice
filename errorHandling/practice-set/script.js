const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + "Done success");
    };
    document.head.append(script);
  });
};

// load script with .then
// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js");
// a.then((value)=>{
//     console.log(value);
// })

//load script with async await;
// const main = async () =>{
//     console.log(new Date().getSeconds());
// let a = await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js");
// console.log(new Date);
// console.log(a);
// }
// main();



// let p = () => {
//   return new Promise((resolve, reject) => {
//     reject(new Error("This is thrown after three seconds"));
//   }, 3000);
// };

// let a = async () => {
//   try {
//     let c = await p();
//     console.log(c);
//   } catch (error) {
//     console.log(error, "This error is handled");
//   }
// };
// a();

let p1 = async() => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },2000)
    })
}
let p2 = async() => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20);
        },3000)
    })
}
let p3 = async() => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30);
        },4000)
    })
}

const run = async () =>{
    console.time('run')
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
    // console.log(a1,a2,a3);
    console.timeEnd('run');
}
run();
