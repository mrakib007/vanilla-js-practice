class RailwayForm{
    submit(){
        alert(this.name + 'Your form submitted for train number: '+ this.trainNo);
    }
    cancel(){
        alert(this.name + 'This form is cancelled for train number: '+ this.trainNo);
    }
    fill(givenName,trainNum){
        this.name = givenName;
        this.trainNo = trainNum;
    }
}

//create a form for Rakib
let rakibForm = new RailwayForm();
//fill the form with details
rakibForm.fill('Rakib',123456);
//create a form for sakib
let sakibForm1 = new RailwayForm();
let sakibForm2 = new RailwayForm();
//fill the form with details
sakibForm1.fill('Sakib',122222);
sakibForm2.fill('Sakib',122420);

rakibForm.submit();
sakibForm1.submit();
sakibForm2.submit();
sakibForm2.cancel();