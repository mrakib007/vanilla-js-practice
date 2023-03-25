console.log(document.cookie);
document.cookie = "Name=Rakib007";
document.cookie = "Name=Rakib0007";
document.cookie = "Name=Rakib";
let key = prompt("enter your key");
let value = prompt("enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

//encodeURIComponent let us set special characters as cookie; we have to use decodeURIComponent for decoding that.
