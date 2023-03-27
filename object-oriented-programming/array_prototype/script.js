let a = {
    name : 'Rakib',
    language: 'Bangla',
    run: () =>{
        alert('self run');
    }
}
console.log(a);

let p = {
    run: () =>{
        alert('run');
    }
}

p.__proto__ = {
    name2: 'Jack'
}

a.__proto__ = p; //setting p as a proto in a
a.run();
console.log(a.name2);