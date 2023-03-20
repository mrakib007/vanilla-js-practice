const f = () =>{

try{
    let a = 0;
    // console.log(program);
    console.log('program ran successfully');
    return; // finally will run whether you return or not
}
catch(err){
    console.log('this is error');
    console.log(p);
}
finally{
    console.log('I am a good boy');
    //close the file
    //Exit the loop
    //write to the log file
}
}

f();
console.log("End");