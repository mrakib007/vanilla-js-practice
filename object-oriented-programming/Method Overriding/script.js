class Employee{
    constructor(name){
        console.log(`${name} Employees constructor is here`);
        this.name = name;
    }
    login(){
        console.log(`Employee has logged in`);
    }
    logout(){
        console.log(`Employee has logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto Approved`)
    }
}
class Programmer extends Employee{
    // if there is no constructor in the child class, this is created automatically
    // constructor(...args){
    //     super(...args);
    // }
    constructor(name){
        super(name);
        // this.name = name;
        console.log(`${name} Programmers constructor is here. This is newly written constructor`);
    }

    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log('One extra is granted')
        // console.log(`Employee has requested ${leaves+1}, he will get one extra leave`)
    }
}

// let e = new Employee();
let p = new Programmer('Rakib Vai');
// e.login();
// e.requestLeaves(3);
p.login();
p.requestLeaves(3);
