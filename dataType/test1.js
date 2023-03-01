let a = 'Rakib';
let b = 5;
console.log(a+b);
console.log(typeof a+b);
console.log(typeof(a+b));

const c = {
    name: 'rakib',
    sectoin : 1,
    isPrincipal: false,
}
c['friend'] = 'Shawon'
c['name'] = 'Rakku'
console.log(c);
c.name = 'sakib';
let d = {...c};
console.log(c);
console.log(d.section=5);

const dict = {
    appreciate: 'recognize the full worth of',
    node: 'state of freedom',
    children: 'aimless words',
}
console.log(dict.children);