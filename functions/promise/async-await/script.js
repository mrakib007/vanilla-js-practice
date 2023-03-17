async function rakib(){
let weatherToday = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('25 degree');
    },2000);
})
let weatherKallyanpur = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('28 degree');
    },5000);
})

// weatherToday.then(alert);
// weatherKallyanpur.then(alert);

console.log('please wait while we are fetching todays weather');
let w = await weatherToday;
console.log('todays weather' + w);

console.log('fetching kallyanpur weather, please wait');
let kW = await weatherKallyanpur;
console.log('kallyanpur weather today' + kW);

return [w,kW];
}
console.log('weather report');

let sakib = async () => {
    console.log('this function is waiting');
}

const main1 = async () =>{
let a = await rakib();
let b = await sakib();

console.log(a,b,'a,b');
}
main1();

