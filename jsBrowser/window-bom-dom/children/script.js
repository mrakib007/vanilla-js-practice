console.log('working');
console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = Array.from(document.body.childNodes);
console.log(arr);

console.log(document.body.children);
const arr2 = document.body.children;
for (const iterator of arr2) {
    console.log(iterator);
}
console.log(arr2[1].children[0].innerText);
console.log(arr2[1].children[1].innerText);
