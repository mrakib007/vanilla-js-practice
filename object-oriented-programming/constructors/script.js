class RailwayForm{
    //whenever an object is created, constructor is called automatically
    constructor(givenName,trainNum){
        console.log('Constructor called'+''+ givenName,trainNum);
        this.name = givenName;
        this.trainNo = trainNum;
    }
    submit(){
        alert(this.name + 'Your form submitted for train number: '+ this.trainNo);
    }
    cancel(){
        alert(this.name + 'This form is cancelled for train number: '+ this.trainNo);
    }
}

//create and fill a form for Rakib
let rakibForm = new RailwayForm('Rakib',123456);
//fill the form with details
// rakibForm.fill('Rakib',123456);
//create and fill form for sakib
let sakibForm1 = new RailwayForm('Sakib',122222);
let sakibForm2 = new RailwayForm('Sakib',122420);

rakibForm.submit();
sakibForm1.submit();
sakibForm2.submit();
sakibForm2.cancel();