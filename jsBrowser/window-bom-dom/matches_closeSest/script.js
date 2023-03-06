let id1 = document.getElementById("id1");
let span1 = document.getElementById("span1");
console.log(id1);
console.log(id1.matches('.class'));
console.log(id1.matches(".box"));
console.log(span1.closest(".box"));
console.log(id1.contains(span1));