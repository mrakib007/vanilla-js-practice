class RailwayForm{
    //whenever an object is created, constructor is called automatically
    constructor(givenName,trainNum,address){
        console.log('Constructor called'+''+ givenName,trainNum);
        this.name = givenName;
        this.trainNo = trainNum;
        this.address = address;
    }
    preview(){
        alert(this.name + 'Your form submitted for train number: '+ this.trainNo + 'Your address is'+''+ this.address);
    }
    submit(){
        alert(this.name + 'Your form submitted for train number: '+ this.trainNo);
    }
    cancel(){
        alert(this.name + 'This form is cancelled for train number: '+ this.trainNo);
        this.trainNo = 0;
    }
}

let rakibfrom = new RailwayForm('Rakib',123456,"Road: 5,House:29");
rakibfrom.preview();
rakibfrom.submit();
rakibfrom.cancel();
rakibfrom.preview();