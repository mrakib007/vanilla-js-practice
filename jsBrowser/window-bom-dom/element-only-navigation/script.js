const changeBodyBlue = () =>{
    document.body.firstElementChild.style.background = "green";
}
//this function changes color
changeBodyBlue();
let b = document.body;
console.log("First child of b is ",b.firstChild);
console.log("First Element child of b is ",b.firstElementChild);

