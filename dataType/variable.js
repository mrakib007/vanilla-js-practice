let a = 55;
console.log(a);
a = 'Rakib';
console.log(a);

//here a gives two outputs 
let c = 3;
c= 'Rakib';
console.log(c);

{
    let a = 1000;
    console.log(a);
}

//let can be used in blocks. but we can't declare it twice in a single block . but we can change it's value

const rakib = 'react';
// rakib = 5;  this is error because we can't change const values

{
    const rakib = 'lll'
    console.log(rakib);
}

let d = null;
console.log(d);
console.log(rakib);
