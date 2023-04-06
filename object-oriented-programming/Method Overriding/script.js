class Employee{
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
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log('One extra is granted')
        // console.log(`Employee has requested ${leaves+1}, he will get one extra leave`)
    }
}

let e = new Employee();
let p = new Programmer();
// e.login();
// e.requestLeaves(3);
p.login();
p.requestLeaves(3);
