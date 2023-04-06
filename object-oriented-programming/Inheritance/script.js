class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name +""+'is running');
    }
    shout(){
        console.log(this.name +""+'is shouting');
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + ' is eating banana');
    }
    hide(){
        console.log(`${this.name} is hiding`)
    }
}

let animal1 = new Animal('Koko','white');
let animal2 = new Monkey('dodo','orange');

animal1.shout();
animal2.eatBanana();
animal2.hide();
// animal1.hide();  //This is will through an error.