let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((value1)=>{
    console.log(response.status);
    return value1.json();
}).then((value2)=>{
    console.log(value2);
})